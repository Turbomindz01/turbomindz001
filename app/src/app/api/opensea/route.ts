import { NextRequest, NextResponse } from "next/server";

/**
 * TURBOMINDZ — Server-Side OpenSea API Proxy
 *
 * All OpenSea API v2 calls MUST go through this route to protect the API key.
 * NEVER expose OPENSEA_API_KEY in frontend code.
 *
 * Endpoints proxied:
 *   GET /api/opensea?type=collection        → GET /v2/listings/collection/{slug}/all
 *   GET /api/opensea?type=nft&tokenId=42    → GET /v2/listings/collection/{slug}/nfts/42/best
 *
 * Full opensea-js Seaport integration added in MP3.
 */

const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY ?? "";
const OPENSEA_API_BASE = "https://api.opensea.io/api/v2";
const COLLECTION_SLUG = process.env.OPENSEA_COLLECTION_SLUG ?? "turbomindz";

// 60-second client-side cache hint
const CACHE_MAX_AGE = 60;

export async function GET(request: NextRequest) {
  if (!OPENSEA_API_KEY) {
    return NextResponse.json(
      { error: "OpenSea API key not configured. Add OPENSEA_API_KEY to .env.local" },
      { status: 503 }
    );
  }

  const { searchParams } = request.nextUrl;
  const type = searchParams.get("type");
  const tokenId = searchParams.get("tokenId");

  let openseaPath: string;

  if (type === "nft" && tokenId) {
    openseaPath = `/listings/collection/${COLLECTION_SLUG}/nfts/${tokenId}/best`;
  } else if (type === "collection") {
    openseaPath = `/listings/collection/${COLLECTION_SLUG}/all`;
  } else {
    return NextResponse.json(
      { error: "Invalid request. Use ?type=collection or ?type=nft&tokenId={id}" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${OPENSEA_API_BASE}${openseaPath}`, {
      headers: {
        "X-API-KEY": OPENSEA_API_KEY,
        "Accept": "application/json",
      },
      // Next.js fetch cache — revalidate every 60 seconds
      next: { revalidate: CACHE_MAX_AGE },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OpenSea API error [${response.status}]:`, errorText);
      return NextResponse.json(
        { error: `OpenSea API returned ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=30`,
      },
    });
  } catch (error) {
    console.error("OpenSea proxy error:", error);
    return NextResponse.json({ error: "Failed to fetch from OpenSea" }, { status: 500 });
  }
}

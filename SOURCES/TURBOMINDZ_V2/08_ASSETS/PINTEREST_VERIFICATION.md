# PINTEREST DOMAIN VERIFICATION — turbomindz.com

**Status:** Saved — apply when website is deployed  
**Date Saved:** April 16, 2026  

---

## VERIFICATION CREDENTIALS

You have 3 options to verify turbomindz.com with Pinterest. **Use Option 1 (HTML tag)** — it's the simplest when building the PWA.

---

### Option 1: HTML Meta Tag (RECOMMENDED)

Add this tag inside the `<head>` section of your website:

```html
<meta name="p:domain_verify" content="71cc5b5895524aa4e57ed58c420e48a2"/>
```

**Where to add in Next.js 14 PWA:**

In `app/layout.tsx`, add it to the metadata export:

```tsx
export const metadata: Metadata = {
  // ... existing metadata
  other: {
    'p:domain_verify': '71cc5b5895524aa4e57ed58c420e48a2',
  },
};
```

Or add it directly in the `<head>` via the `<Head>` component if using a custom document.

---

### Option 2: Upload HTML File

Download the verification HTML file from Pinterest settings and upload it to the website's root directory (the `/public` folder in Next.js).

- File goes to: `/public/pinterest-verify.html`

---

### Option 3: DNS TXT Record

Add this TXT record to your domain's DNS settings (in your domain registrar — Namecheap, GoDaddy, Cloudflare, etc.):

```
pinterest-site-verification=71cc5b5895524aa4e57ed58c420e48a2
```

- Record type: TXT
- Host: @ (root domain)
- Value: `pinterest-site-verification=71cc5b5895524aa4e57ed58c420e48a2`

---

## WHEN TO APPLY

- **If using Carrd (pre-launch site, Days 3-43):** Use Option 3 (DNS TXT record) since Carrd doesn't give you access to the `<head>` tag on free plans.
- **If using Next.js PWA (Day 43+):** Use Option 1 (HTML meta tag in `app/layout.tsx`).
- **After applying:** Go back to Pinterest Settings → Claimed Accounts → Click "Verify" to confirm.

---

## WHY THIS MATTERS

Claiming your website on Pinterest:
- Shows your profile photo on all pins linking to turbomindz.com
- Enables Pinterest Analytics for your website traffic
- Gives your pins a ranking boost in Pinterest search
- Adds a "Follow" button next to your domain on pins
- Unlocks Rich Pins (enhanced metadata pulled from your site automatically)

import { createThirdwebClient } from 'thirdweb';

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

if (!clientId || clientId === 'your-client-id-here') {
  console.warn('[Turbomindz] NEXT_PUBLIC_THIRDWEB_CLIENT_ID is not configured. Wallet features will not work.');
}

export const client = createThirdwebClient({
  clientId: clientId || 'placeholder',
});

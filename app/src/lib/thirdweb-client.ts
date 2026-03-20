import { createThirdwebClient } from 'thirdweb';

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || 'default-client-id';

export const client = createThirdwebClient({
  clientId,
});

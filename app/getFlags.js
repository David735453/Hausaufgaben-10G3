import { decryptOverrides } from 'flags/next';
 
async function getFlags(request) {
  const overrideCookie = request.cookies['vercel-flag-overrides'];
  const overrides = await decryptOverrides(overrideCookie);
 
  const flags = {
    exampleFlag: overrides?.exampleFlag ?? false,
  };
 
  return flags;
}
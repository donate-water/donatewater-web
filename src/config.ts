export const ApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://localhost:44385';
export const baseUrl =
  process.env.NEXT_PUBLIC_HOST_URL || 'http://localhost:3000';

export const ClientId = process.env.NEXT_PUBLIC_CLIENTID
export const ClientSecret = process.env.NEXT_PUBLIC_CLIENTSECRET
export const Scope = process.env.NEXT_PUBLIC_SCOPE

export const oidcConfig = {
  authority: ApiBaseUrl,
  client_id: ClientId,
  client_secret: ClientSecret,
  redirect_uri: `${baseUrl}/redirect/`,
  scope: Scope,
};

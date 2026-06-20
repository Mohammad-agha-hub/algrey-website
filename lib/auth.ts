// Edge-runtime compatible (uses Web Crypto + btoa, not Node's `crypto`/`Buffer`)
// because this is imported by middleware.ts, which runs on the Edge runtime.

export const COOKIE_NAME = "admin_session";
const SESSION_DAYS = 7;

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("Missing AUTH_SECRET environment variable");
  }
  return secret;
}

function toBase64Url(bytes: ArrayBuffer): string {
  const arr = new Uint8Array(bytes);
  let str = "";
  for (let i = 0; i < arr.length; i++) str += String.fromCharCode(arr[i]);
  const b64 = btoa(str);
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return toBase64Url(sig);
}

/** Creates a signed `<expiry>.<signature>` token good for SESSION_DAYS. */
export async function createSessionToken(): Promise<string> {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = `${exp}`;
  const sig = await hmac(payload);
  return `${payload}.${sig}`;
}

/** Verifies the signature is valid and the token hasn't expired. */
export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;

  const expected = await hmac(payload);
  if (expected !== sig) return false;

  const exp = Number(payload);
  if (!exp || Number.isNaN(exp) || Date.now() > exp) return false;

  return true;
}

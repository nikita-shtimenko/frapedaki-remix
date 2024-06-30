import { redirect } from "@remix-run/node";
import { createServerClient, serialize, parse } from "@supabase/ssr";

export function createClient(request: Request) {
  const cookies = parse(request.headers.get("Cookie") ?? "");
  const headers = new Headers();

  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key];
        },
        set(key, value, options) {
          headers.append("Set-Cookie", serialize(key, value, options));
        },
        remove(key, options) {
          headers.append("Set-Cookie", serialize(key, "", options));
        },
      },
    },
  );
}

export async function redirectAuthenticatedUser(request: Request) {
  const client = createClient(request);
  const {
    data: { user },
  } = await client.auth.getUser();

  if (user) {
    throw redirect("/");
  }
}

export async function requireAuthenticatedUser(request: Request) {
  const client = createClient(request);
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    throw redirect("/");
  }

  return { user };
}

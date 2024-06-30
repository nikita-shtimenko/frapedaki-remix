import { LoaderFunctionArgs } from "@remix-run/node";
import { redirectAuthenticatedUser } from "~/lib/supabase.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await redirectAuthenticatedUser(request);
  return null;
}

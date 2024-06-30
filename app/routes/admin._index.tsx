import { LoaderFunctionArgs, json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import PageDefaultLayout from "~/components/page-default-layout";
import { PageHeading, PageSubheading } from "~/components/page-heading";
import { Text } from "~/components/ui/text";
import { requireAuthenticatedUser } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [{ title: "אדמין" }, { name: "description", content: "עמוד אדמין" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { user } = await requireAuthenticatedUser(request);
  return json({ user });
}

export default function PageAdminIndex() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <PageDefaultLayout>
      <main className="flex w-full flex-col items-center">
        <div className="mx-auto max-w-2xl text-center sm:text-center">
          <PageHeading>עמוד אדמין</PageHeading>
          <PageSubheading>עמוד רק בשביל אדמינים</PageSubheading>
          <Text>{user.is_anonymous}</Text>
        </div>
      </main>
    </PageDefaultLayout>
  );
}

import PageDefaultLayout from "~/components/page-default-layout";
import { PageHeading } from "~/components/page-heading";

export default function PageAccessibilityIndex() {
  return (
    <PageDefaultLayout>
      <main className="flex w-full flex-col items-center">
        <PageHeading>הצהרת נגישות האתר</PageHeading>
      </main>
    </PageDefaultLayout>
  );
}

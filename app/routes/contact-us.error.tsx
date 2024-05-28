import { MetaFunction } from "@remix-run/react";
import PageDefaultLayout from "~/components/page-default-layout";
import { Button } from "~/components/ui/button";
import { Heading, Subheading } from "~/components/ui/heading";

export const meta: MetaFunction = () => {
  return [
    { title: "פראפדקי" },
    { name: "description", content: "הודעתכם לא נשלחה, משהו השתבש" },
  ];
};

export default function PageContactUsError() {
  return (
    <PageDefaultLayout>
      <main className="flex w-full flex-col items-center pt-48">
        <div className="flex flex-col gap-y-2 lg:gap-y-1">
          <Heading level={1} className="text-center">
            אופס, משהו השתבש 😓
          </Heading>
          <Subheading level={2} className="text-center">
            אנו מצטערים על אי נוחות, נסו שנית מאוחר יותר.
          </Subheading>
        </div>
        <Button href="/" color="blue" className="mt-8">
          לחזור לעמוד הראשי
        </Button>
      </main>
    </PageDefaultLayout>
  );
}

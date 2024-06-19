import { MetaFunction } from "@remix-run/react";
import PageDefaultLayout from "~/components/page-default-layout";
import { Button } from "~/components/ui/button";
import { Heading, Subheading } from "~/components/ui/heading";

export const meta: MetaFunction = () => {
  return [
    { title: "צור קשר" },
    { name: "description", content: "עמוד שמודיע על כך שיצירת קשר נכשלה" },
  ];
};

export default function PageContactUsError() {
  return (
    <PageDefaultLayout>
      <main className="flex w-full flex-col items-center">
        <div className="mt-24 flex w-full max-w-screen-xs flex-col rounded-lg border bg-red-600/10 p-16 lg:mt-48">
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
        </div>
      </main>
    </PageDefaultLayout>
  );
}

import { MetaFunction } from "@remix-run/react";
import PageDefaultLayout from "~/components/page-default-layout";
import { Button } from "~/components/ui/button";
import { Heading, Subheading } from "~/components/ui/heading";

export const meta: MetaFunction = () => {
  return [
    { title: "צור קשר" },
    {
      name: "description",
      content: "עמוד שמודיע על כך שיצירת קשר עברה בהצלחה",
    },
  ];
};

export default function PageContactUsSuccess() {
  return (
    <PageDefaultLayout>
      <main className="flex w-full flex-col items-center">
        <div className="mt-48 flex w-full max-w-screen-xs flex-col rounded-lg border bg-green-600/10 p-16">
          <div className="flex flex-col gap-y-2 lg:gap-y-1">
            <Heading level={1} className="text-center">
              הודעתכם נשלחה בהצלחה 🥳
            </Heading>
            <Subheading level={2} className="text-center">
              אנו מודים לכם על פנייתכם ונחזור עליכם בהקדם האפשרי.
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

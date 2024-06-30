import { MetaFunction } from "@remix-run/react";
import Announcement from "~/components/announcement";
import PageDefaultLayout from "~/components/page-default-layout";
import { PageHeading, PageSubheading } from "~/components/page-heading";

export const meta: MetaFunction = () => {
  return [
    { title: "התפריט שלנו" },
    { name: "description", content: "עמוד עם תפריט אוכל ושתייה" },
  ];
};

export default function PageMenuIndex() {
  return (
    <PageDefaultLayout>
      <main className="flex w-full flex-col items-center">
        <div className="mx-auto max-w-2xl text-center sm:text-center">
          <PageHeading>הכירו את התפריט שלנו</PageHeading>
          <PageSubheading>
            מגוון טעמים וריחות מכל העולם - התפריט המושלם לחובבי הקפה
          </PageSubheading>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-y-8 lg:flex-row lg:gap-x-8 lg:gap-y-0">
          <img
            src="/images/drinks.png"
            className="max-w-screen-xxs max-h-[512px] rounded-xl border p-1 shadow-lg xs:max-w-xs sm:max-w-lg lg:max-w-none"
            alt="תפריט שתייה חמה ושתייה קרה"
          />
          <img
            src="/images/food.png"
            className="max-w-screen-xxs max-h-[512px] rounded-xl border p-1 shadow-lg xs:max-w-xs sm:max-w-lg lg:max-w-none"
            alt="תפריט מאפים מתוקים ומאפים מלוחים"
          />
        </div>
        <Announcement className="mt-8 w-full lg:mt-12 lg:w-1/2" />
      </main>
    </PageDefaultLayout>
  );
}

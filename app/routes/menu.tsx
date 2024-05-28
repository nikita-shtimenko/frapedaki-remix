import { MetaFunction } from "@remix-run/react";
import PageDefaultLayout from "~/components/page-default-layout";

export const meta: MetaFunction = () => {
  return [
    { title: "פראפדקי" },
    { name: "description", content: "הכירו את התפריט שלנו" },
  ];
};

export default function PageMenu() {
  return (
    <PageDefaultLayout>
      <main className="flex w-full flex-col">
        <div className="mx-auto max-w-2xl text-center sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
            הכירו את התפריט שלנו
          </h2>
          <h3 className="mt-4 text-lg leading-8 text-gray-600">
            מגוון טעמים וריחות מכל העולם - התפריט המושלם לחובבי הקפה
          </h3>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-y-8 lg:flex-row lg:gap-x-8 lg:gap-y-0">
          <img
            src="/images/frapedaki_menu_page_1-min.png"
            className="max-w-screen-xxs max-h-[512px] rounded-xl border p-1 shadow-lg xs:max-w-xs sm:max-w-lg lg:max-w-none"
            alt="תפריט שתייה חמה ושתייה קרה"
          />
          <img
            src="/images/frapedaki_menu_page_2-min.png"
            className="max-w-screen-xxs max-h-[512px] rounded-xl border p-1 shadow-lg xs:max-w-xs sm:max-w-lg lg:max-w-none"
            alt="תפריט מאפים מתוקים ומאפים מלוחים"
          />
        </div>
      </main>
    </PageDefaultLayout>
  );
}

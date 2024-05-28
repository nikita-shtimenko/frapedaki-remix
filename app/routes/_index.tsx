import type { MetaFunction } from "@remix-run/node";
import { ArrowLeft } from "lucide-react";
import PageDefaultLayout from "~/components/page-default-layout";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "פראפדקי" },
    { name: "description", content: "ברוכים הבאים לפראפדקי" },
  ];
};

export default function PageIndex() {
  return (
    <PageDefaultLayout>
      <main className="grid w-full grid-flow-row grid-rows-2 sm:max-lg:justify-center lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-8">
        <div className="flex w-full max-w-screen-sm flex-col justify-center text-center lg:justify-start lg:pt-32 lg:text-right">
          <h1 className="font-greek text-7xl text-blue-600 lg:text-9xl">
            FRAPEDAKI
          </h1>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            עגלות קפה בכל רחבי הארץ
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md md:max-w-none">
            פראפדקי הינה רשת עגלות קפה בסגנון ייוני אשר נוסדה כמיזם עסקי-חברתי
            במטרה להצדיע לחיילים בודדים משוחררים ולייצר עבורם מקומות תעסוקה תוך
            ליווי מלא להצלחתם.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button href="/contact-us" className="w-2/5 md:w-1/4 lg:w-1/5">
              צור קשר
              <ArrowLeft size={16} />
            </Button>
            <Button
              href="/menu"
              color="blue"
              className="w-2/5 md:w-1/4 lg:w-1/5"
            >
              תפריט שלנו
            </Button>
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-2 pt-4 lg:pt-16">
          <img
            src="/images/frappe.jpg"
            alt="פראפה"
            className="aspect-[2/3] size-64 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <img
            src="/images/matcha.jpg"
            alt="כריך"
            className="aspect-[2/3] size-64 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <img
            src="/images/espresso.jpg"
            alt="אספרסו"
            className="aspect-[2/3] size-64 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <img
            src="/images/croissant_chocolate.jpg"
            alt="קרואסן שוקולד"
            className="aspect-[2/3] size-64 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
        </div>
      </main>
    </PageDefaultLayout>
  );
}

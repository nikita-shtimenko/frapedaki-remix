import { LinkDescriptor, LinksFunction } from "@vercel/remix";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/remix";

import fontStyleSheet from "~/styles/fonts.css?url";
import tailwindStyleSheet from "~/styles/tailwind.css?url";

export const links: LinksFunction = () => {
  const fonts = ["Heebo.ttf", "Greek.otf"];
  return [
    ...fonts.map(
      (font) =>
        ({
          rel: "preload",
          as: "font",
          href: `/fonts/${font}`,
          crossOrigin: "anonymous",
        }) as LinkDescriptor,
    ),
    {
      rel: "stylesheet",
      href: fontStyleSheet,
    },
    {
      rel: "stylesheet",
      href: tailwindStyleSheet,
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        {children}
        <SpeedInsights />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Wedding App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My app</title>
      </head>
      <body className="flex flex-col min-h-screen" cz-shortcut-listen="true">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

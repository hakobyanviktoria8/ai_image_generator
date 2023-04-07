import { Header } from "@/components/Header";
import "./../styles/globals.css";
import { PromtInput } from "@/components/PromptInput";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: "AI Image Generator",
  description: "Generated images for suggestion!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {/* header */}
          <Header />

          {/* input part */}
          <PromtInput />

          {children}
        </ClientProvider>
      </body>
    </html>
  );
}

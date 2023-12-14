import type { Metadata } from "next";
import { sans, serif } from "./fonts";
import { clsx } from "clsx";
import "@/app/globals.css";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shortlet",
  description: "Shortlet App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(serif.variable, sans.variable)}>
      <body className={"relative"}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      <Script
        id={"show-whatsapp-float"}
        dangerouslySetInnerHTML={{
          __html: `var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?13768';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var options = {
        "enabled":true,
        "chatButtonSetting":{
            "backgroundColor":"#FF5626",
            "ctaText":"Chat with us",
            "borderRadius":"25",
            "marginLeft": "0",
            "marginRight": "20",
            "marginBottom": "20",
            "ctaIconWATI":true,
            "position":"right"
        },
        "brandSetting":{
            "brandName":"ShortLet App LTD",
            "brandSubTitle":"undefined",
            "brandImg":"https://www.shortletapp.com/icon.png?95b49dd30ee631ee",
            "welcomeText": "Hi there! How can we help you?",
            "messageText":"Hello, %0A I have a question about {{page_link}}",
            "backgroundColor":"#FF5626",
            "ctaText":"Chat with us",
            "borderRadius":"25",
            "autoShow":false,
            "phoneNumber":"2348078785672"
        }
        };
        s.onload = function() {
            CreateWhatsappChatWidget(options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);`,
        }}
      />
    </html>
  );
}

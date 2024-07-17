import "@/app/globals.css";
import { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alisherov Sadulla",
    description: "My Personal Portfolio website",
    openGraph: {
        title: "Alisherov Sadulla",
        description: "My Personal Portfolio website",
        url: "https://sadullaalisherov.vercel.app",
        siteName: "Alisherov Sadulla",
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Alisherov Sadulla",
        description: "My Personal Portfolio website",
        creator: "@sadullaalisherov",
    },
};

type TProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: Readonly<TProps>) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>{children}</body>
        </html>
    );
}

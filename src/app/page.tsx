import { ReactNode } from "react";
import { Icons } from "@/app/icons";

function getAge() {
    return new Date().getFullYear() - 2005;
}

export default function Home() {
    return (
        <main className="w-full h-full flex items-center justify-center container">
            <ul className="w-full flex flex-col gap-y-3">
                <Item title="me">
                    <span>Sadulla Alisherov, {getAge()} years old</span>
                </Item>
                <Line />
                <Item title="specification">
                    <span>Web & Mobile</span>
                </Item>
                <Line />
                <Item title="location">
                    <span>Uzbekistan</span>
                </Item>
                <Line />
                <Item title="contact">
                    <a href="tel:+998914225392">+(998) 91 422-53-92</a>
                </Item>
                <Line />
                <Item title="resume">
                    <a
                        download="/resume.pdf"
                        href="/resume.pdf"
                        className="underline"
                    >
                        check out here
                    </a>
                </Item>
                <Line />
                <Item title="social">
                    <div className="flex items-center gap-x-2">
                        <a
                            target="_blank"
                            href="https://github.com/alisherov-cs"
                        >
                            <Icons.github />
                        </a>
                        <a
                            target="_blank"
                            href="https://t.me/sadulla_alisherov"
                        >
                            <Icons.telegram />
                        </a>
                    </div>
                </Item>
            </ul>
        </main>
    );
}

type TItemProps = {
    title: string;
    children: ReactNode;
};

function Item({ title, children }: TItemProps) {
    return (
        <li className="flex items-center gap-x-3">
            <div className="flex items-center justify-center border rounded-full p-1">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            </div>
            <span className="font-bold text-teal-300">{title}: </span>
            {children}
        </li>
    );
}

function Line() {
    return <span className="h-10 w-[1px] ml-2 bg-red-500" />;
}

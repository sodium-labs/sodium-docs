import Image from "next/image";
import { BookIcon, RssIcon } from "lucide-react";
import DiscordIcon from "@/icons/brands/DiscordIcon";
import GitHubIcon from "@/icons/brands/GitHubIcon";
import SodiumLabsIcon from "@/icons/brands/SodiumLabsIcon";
import { DISCORD_URL, GITHUB_URL, SODIUM_LABS_URL, STATUS_URL } from "@/config";
import { modules } from "@/modules";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
                <div className="mx-auto flex items-center gap-2">
                    <Image
                        className="-ml-4 size-32"
                        src="/favicon.ico"
                        alt="Next.js logo"
                        width={128}
                        height={128}
                        priority
                    />
                    <span className="text-4xl font-semibold">Sodium Docs</span>
                </div>

                <ol className="text-md/6 list-inside text-center font-[family-name:var(--font-geist-mono)] sm:text-left">
                    <li className="mb-2 tracking-[-.01em]">The official docs of all the Sodium modules</li>
                </ol>

                <div className="mx-auto flex flex-col items-center gap-4 sm:flex-row">
                    <Link
                        prefetch={false}
                        className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
                        href={`/${modules[0]}`}
                        rel="noopener noreferrer"
                    >
                        <BookIcon />
                        Read our docs
                    </Link>
                    <Link
                        prefetch={false}
                        className="flex h-10 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon className="size-6" />
                        View our GitHub
                    </Link>
                </div>
            </main>

            <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
                <Link
                    prefetch={false}
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href={SODIUM_LABS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SodiumLabsIcon />
                    Sodium Labs
                </Link>
                <Link
                    prefetch={false}
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href={STATUS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RssIcon />
                    Status
                </Link>
                <Link
                    prefetch={false}
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiscordIcon />
                    Discord
                </Link>
            </footer>
        </div>
    );
}

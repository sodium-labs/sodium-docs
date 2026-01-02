import { codeToHtml } from "@/lib/shiki.bundle";

export async function SyntaxHighlighter({
    lang,
    code,
    className = "",
}: {
    readonly className?: string;
    readonly code: string;
    readonly lang: string;
}) {
    const codeHTML = await codeToHtml(code.trim(), {
        lang,
        themes: {
            light: "github-light",
            dark: "github-dark-dimmed",
        },
    });

    return <div className={className} dangerouslySetInnerHTML={{ __html: codeHTML }} />;
}

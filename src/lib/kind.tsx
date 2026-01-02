import { VscSymbolClass } from "@react-icons/all-files/vsc/VscSymbolClass";
import { VscSymbolEnum } from "@react-icons/all-files/vsc/VscSymbolEnum";
import { VscSymbolEnumMember } from "@react-icons/all-files/vsc/VscSymbolEnumMember";
import { VscSymbolEvent } from "@react-icons/all-files/vsc/VscSymbolEvent";
import { VscSymbolInterface } from "@react-icons/all-files/vsc/VscSymbolInterface";
import { VscSymbolMethod } from "@react-icons/all-files/vsc/VscSymbolMethod";
import { VscSymbolParameter } from "@react-icons/all-files/vsc/VscSymbolParameter";
import { VscSymbolProperty } from "@react-icons/all-files/vsc/VscSymbolProperty";
import { VscSymbolVariable } from "@react-icons/all-files/vsc/VscSymbolVariable";

export function resolveKindIcon(kind: string, size = 24) {
    switch (kind) {
        case "Class":
            return <VscSymbolClass aria-hidden className="shrink-0" size={size} />;
        case "Enum":
            return <VscSymbolEnum aria-hidden className="shrink-0" size={size} />;
        case "EnumMember":
            return <VscSymbolEnumMember aria-hidden className="shrink-0" size={size} />;
        case "Interface":
            return <VscSymbolInterface aria-hidden className="shrink-0" size={size} />;
        case "Property":
        case "PropertySignature":
            return <VscSymbolProperty aria-hidden className="shrink-0" size={size} />;
        case "TypeAlias":
        case "Variable":
            return <VscSymbolVariable aria-hidden className="shrink-0" size={size} />;
        case "Event":
            return <VscSymbolEvent aria-hidden className="shrink-0" size={size} />;
        case "Parameter":
        case "TypeParameter":
            return <VscSymbolParameter aria-hidden className="shrink-0" size={size} />;
        default:
            return <VscSymbolMethod aria-hidden className="shrink-0" size={size} />;
    }
}

export function resolveNodeKindColor(kind: string) {
    switch (kind) {
        case "Class":
            return {
                text: "text-vscode-class",
                hover: "hover:text-vscode-class-hover",
                background: "bg-vscode-class/20",
            };
        case "Interface":
            return {
                text: "text-emerald-400",
                hover: "hover:text-emerald-500",
                background: "bg-emerald-400/20",
            };
        case "EnumMember":
        case "Constant":
            return {
                text: "text-vscode-constant",
                hover: "hover:text-vscode-constant-hover",
                background: "bg-vscode-constant/20",
            };
        case "Method":
        case "MethodSignature":
        case "Function":
            return {
                text: "text-vscode-function",
                hover: "hover:text-vscode-function-hover",
                background: "bg-vscode-function/20",
            };
        case "Enum":
            return {
                text: "text-emerald-400",
                hover: "hover:text-emerald-500",
                background: "bg-emerald-400/20",
            };
        case "TypeAlias":
            return {
                text: "text-vscode-control",
                hover: "hover:text-vscode-control",
                background: "bg-vscode-control/20",
            };
        case "Variable":
        case "PropertySignature":
        case "Property":
            return {
                text: "text-vscode-variable",
                hover: "hover:text-vscode-variable-hover",
                background: "bg-vscode-variable/20",
            };
        case "Keyword":
        case "Constructor":
            return {
                text: "text-vscode-keyword",
                hover: "hover:text-vscode-keyword-hover",
                background: "bg-vscode-keyword/20",
            };
        default:
            return {
                text: "text-gray-400",
                hover: "hover:text-gray-500",
                background: "bg-gray-400/20",
            };
    }
}

export function resolveNodeKindSpanClass(kind: string) {
    const color = resolveNodeKindColor(kind);
    return `${color.text}`;
}

export function resolveNodeKindLinkClass(kind: string) {
    const color = resolveNodeKindColor(kind);
    return `${color.text} ${color.hover}`;
}

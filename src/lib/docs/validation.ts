import { PACKAGES } from "../constants";

const VERSION_REGEX = /^v?\d+\.\d+\.\d+(-[\w.]+)?$/;

const ITEM_REGEX = /^[A-Za-z_$.][A-Za-z0-9_$.]*$/;

export function isValidPackage(packageName: string, version?: string) {
    if (!PACKAGES.find(p => p.name === packageName)) return false;
    if (version && !VERSION_REGEX.test(version)) return false;
    return true;
}

export function isValidItemName(name: string): boolean {
    if (!ITEM_REGEX.test(name)) return false;
    return true;
}

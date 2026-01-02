import { GITHUB_NAME } from "./constants";

export const resolvePackageImageURL = (repository: string, version: string, src: string): string => {
    return `https://raw.githubusercontent.com/${GITHUB_NAME}/${repository}/refs/tags/v${version}/${src}`;
};

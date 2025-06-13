import type { MetadataRoute } from "next";
import { BASE_URL } from "@/config";
import { modules } from "@/modules";

export default (): MetadataRoute.Sitemap => {
    return [
        {
            url: BASE_URL,
            priority: 1,
            lastModified: new Date().toISOString(),
        },
        ...modules.map(m => ({
            url: `${BASE_URL}/${m}/sitemap.xml`,
            lastModified: new Date().toISOString(),
        })),
    ];
};

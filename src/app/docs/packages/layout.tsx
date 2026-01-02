import "./style.css";
import type { PropsWithChildren } from "react";
import { Footer } from "@/components/layout/Footer";
import { DocSidebar } from "@/components/layout/sidebar/DocSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function Layout({ children }: PropsWithChildren) {
    return (
        <SidebarProvider>
            <DocSidebar />

            <div className="flex-1 pb-12 max-w-[calc(100vw-10px)] md:max-w-[calc(100vw-var(--sidebar-width)-10px)]">
                <div className="relative px-6 pt-12 md:hidden">
                    <div className="fixed top-5 left-6 z-20 md:hidden">
                        <SidebarTrigger className="bg-primary/60 border border-primary p-2 size-8 rounded-full" />
                    </div>
                </div>
                {children}
                <Footer />
            </div>
        </SidebarProvider>
    );
}

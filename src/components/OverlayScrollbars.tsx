"use client";

import "overlayscrollbars/overlayscrollbars.css";
import { cn } from "@/lib/utils";
import { OverlayScrollbars, ClickScrollPlugin } from "overlayscrollbars";
import type { OverlayScrollbarsComponentProps } from "overlayscrollbars-react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

OverlayScrollbars.plugin(ClickScrollPlugin);

export function Scrollbars(props: OverlayScrollbarsComponentProps) {
    const { className, children, ...additionalProps } = props;

    return (
        <OverlayScrollbarsComponent {...additionalProps} className={cn(className)} defer>
            {children}
        </OverlayScrollbarsComponent>
    );
}

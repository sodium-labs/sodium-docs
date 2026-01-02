import { MethodOverload } from "@/lib/docs/types";
import { Tab, TabList, TabPanel, Tabs } from "../ui/tabs";

export async function OverloadNode({
    overloads,
    displayOverload,
}: {
    readonly overloads: MethodOverload[];
    readonly displayOverload: (overload: MethodOverload) => React.ReactElement;
}) {
    return (
        <Tabs className="flex flex-col gap-4">
            <TabList className="flex flex-wrap gap-2">
                {overloads.map(overload => (
                    <Tab
                        className="cursor-pointer rounded-full bg-neutral-800/10 px-2 py-1 font-sans text-sm leading-none font-normal whitespace-nowrap text-neutral-800 hover:bg-neutral-800/20 data-selected:bg-neutral-500 data-selected:text-neutral-100 dark:bg-neutral-200/10 dark:text-neutral-200 dark:hover:bg-neutral-200/20 dark:data-selected:bg-neutral-500/70"
                        id={`overload-${overload.displayName}-${overload.overloadIndex}`}
                        key={`overload-tab-${overload.displayName}-${overload.overloadIndex}`}
                    >
                        <span>Overload {overload.overloadIndex}</span>
                    </Tab>
                ))}
            </TabList>

            {overloads.map(overload => (
                <TabPanel
                    className="flex flex-col gap-4"
                    id={`overload-${overload.displayName}-${overload.overloadIndex}`}
                    key={`overload-tab-panel-${overload.displayName}-${overload.overloadIndex}`}
                >
                    {displayOverload(overload)}
                </TabPanel>
            ))}
        </Tabs>
    );
}

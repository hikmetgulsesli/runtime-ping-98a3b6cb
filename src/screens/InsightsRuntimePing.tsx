// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Runtime Ping
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, Bug, ChevronDown, CircleAlert, CircleHelp, Download, Gauge, GitBranch, Info, Lightbulb, Menu, RefreshCw, Terminal, Timer, TrendingUp, TriangleAlert } from "lucide-react";


export type InsightsRuntimePingActionId = "menu-1" | "export-2" | "operations-1" | "pipeline-2" | "insights-3" | "documentation-4" | "support-5" | "investigate-traces-6";

export interface InsightsRuntimePingProps {
  actions?: Partial<Record<InsightsRuntimePingActionId, () => void>>;

}

export function InsightsRuntimePing({ actions }: InsightsRuntimePingProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col pt-md pb-xl bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline fixed left-0 top-0 h-full w-[240px] z-40">
      <div className="px-margin-desktop mb-xl mt-sm flex items-center gap-sm">
      <Gauge  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary font-black text-2xl" aria-hidden={true} focusable="false" />
      <div className="font-headline-md text-headline-md font-bold text-on-surface">System Health</div>
      </div>
      <div className="px-margin-desktop mb-md">
      <div className="font-label-caps text-label-caps text-secondary mb-xs">STATUS</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      All systems operational
                  </div>
      </div>
      <ul className="flex-1 px-sm space-y-1 mt-md">
      <li>
      <a className="flex items-center gap-3 px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-body-sm text-body-sm" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Terminal aria-hidden={true} focusable="false" />
                          Operations
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-body-sm text-body-sm" href="#" data-action-id="pipeline-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-2"]?.(); }}>
      <GitBranch aria-hidden={true} focusable="false" />
                          Pipeline
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-sm py-2 rounded-DEFAULT bg-primary-container text-on-primary-container border-l-2 border-primary font-bold transition-colors duration-200 ease-in-out font-body-sm text-body-sm" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <Lightbulb aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </li>
      </ul>
      <div className="px-sm mt-auto border-t border-outline-variant pt-sm">
      <ul className="space-y-1">
      <li>
      <a className="flex items-center gap-3 px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-body-sm text-body-sm" href="#" data-action-id="documentation-4" onClick={(event) => { event.preventDefault(); actions?.["documentation-4"]?.(); }}>
      <CircleHelp className="text-sm" aria-hidden={true} focusable="false" />
                              Documentation
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-sm py-2 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-body-sm text-body-sm" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-sm" aria-hidden={true} focusable="false" />
                              Support
                          </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-[240px] flex flex-col h-full bg-surface-container-lowest">
      {/* TopNavBar (Mobile Only for Navigation, Contextual Header on Desktop) */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 bg-surface border-b border-outline-variant">
      <div className="font-headline-md text-headline-md font-black text-primary">Runtime Ping</div>
      <div className="flex items-center gap-sm">
      <button className="p-xs text-secondary hover:bg-surface-container-low rounded-DEFAULT transition-colors" type="button" aria-label="Menu" data-action-id="menu-1" onClick={actions?.["menu-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Insights Header */}
      <div className="pt-20 md:pt-lg px-margin-mobile md:px-margin-desktop pb-md flex flex-col sm:flex-row sm:items-center justify-between gap-md border-b border-outline-variant bg-surface">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-primary">Insights &amp; Trends</h1>
      <p className="font-body-sm text-body-sm text-secondary mt-1">System performance overview and recent anomalies.</p>
      </div>
      <div className="flex items-center gap-sm">
      {/* Timeframe Filter */}
      <div className="relative">
      <select className="appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-DEFAULT py-1.5 pl-3 pr-8 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer h-8">
      <option>Last 1 Hour</option>
      <option>Last 24 Hours</option>
      <option selected={true}>Last 7 Days</option>
      <option>Last 30 Days</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-sm" aria-hidden={true} focusable="false" />
      </div>
      {/* Export Action */}
      <button className="h-8 px-3 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-DEFAULT hover:bg-surface-container-low transition-colors flex items-center gap-xs" type="button" data-action-id="export-2" onClick={actions?.["export-2"]}>
      <Download className="text-sm" aria-hidden={true} focusable="false" />
                          Export
                      </button>
      </div>
      </div>
      {/* Scrollable Canvas */}
      <div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop">
      {/* Actionable Hint (Contextual) */}
      <div className="mb-lg bg-error-container/20 border-l-2 border-error p-sm flex items-start gap-sm rounded-r-DEFAULT">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-label-mono text-label-mono text-on-surface font-semibold">3 records failing verification</div>
      <div className="font-body-sm text-body-sm text-secondary mt-0.5">Database shards in us-east-1 are experiencing high latency leading to timeout errors.</div>
      <a className="font-body-sm text-body-sm text-primary underline mt-1 inline-block" href="#" data-action-id="investigate-traces-6" onClick={(event) => { event.preventDefault(); actions?.["investigate-traces-6"]?.(); }}>Investigate traces</a>
      </div>
      </div>
      {/* Bento Grid Layout for Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-md">
      {/* Compact Metric Cards (Top Row) */}
      <div className="col-span-1 md:col-span-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-md">
      {/* Metric: Uptime */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-caps text-label-caps text-secondary">GLOBAL UPTIME</span>
      <BadgeHelp className="text-secondary text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-primary">99.994%</div>
      <div className="font-body-sm text-body-sm text-emerald-700 flex items-center gap-xs mt-1">
      <TrendingUp className="text-[14px]" aria-hidden={true} focusable="false" />
                                      +0.002% from last week
                                  </div>
      </div>
      </div>
      {/* Metric: Error Rate */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between mb-sm relative z-10">
      <span className="font-label-caps text-label-caps text-secondary">ERROR RATE</span>
      <Bug className="text-secondary text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="relative z-10">
      <div className="font-headline-lg text-headline-lg text-primary">0.12%</div>
      <div className="font-body-sm text-body-sm text-amber-700 flex items-center gap-xs mt-1">
      <TrendingUp className="text-[14px]" aria-hidden={true} focusable="false" />
                                      Elevated (Threshold: 0.10%)
                                  </div>
      </div>
      {/* Decorative background element indicating issue */}
      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-amber-50 rounded-full opacity-50 blur-xl"></div>
      </div>
      {/* Metric: Avg Response */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-caps text-label-caps text-secondary">AVG RESPONSE (P95)</span>
      <Timer className="text-secondary text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-primary">142ms</div>
      <div className="font-body-sm text-body-sm text-secondary flex items-center gap-xs mt-1">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" />
                                      Stable across regions
                                  </div>
      </div>
      </div>
      </div>
      {/* Main Chart Area (Spans 2 columns on desktop) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md flex flex-col">
      <div className="flex items-center justify-between mb-md">
      <span className="font-label-caps text-label-caps text-secondary">LATENCY TREND (7D)</span>
      <div className="font-label-mono text-label-mono text-secondary">us-east-1</div>
      </div>
      {/* Abstract representation of a chart using divs */}
      <div className="flex-1 flex items-end gap-1 h-48 relative border-b border-outline-variant pb-2">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-secondary font-label-mono pb-2">
      <span>200ms</span>
      <span>150ms</span>
      <span>100ms</span>
      <span>50ms</span>
      </div>
      {/* Bars (simulated data) */}
      <div className="ml-10 flex-1 flex items-end gap-1 h-full">
      <div className="w-full bg-primary-fixed hover:bg-primary-container transition-colors rounded-t-sm" style={{height: "40%"}}></div>
      <div className="w-full bg-primary-fixed hover:bg-primary-container transition-colors rounded-t-sm" style={{height: "45%"}}></div>
      <div className="w-full bg-primary-fixed hover:bg-primary-container transition-colors rounded-t-sm" style={{height: "60%"}}></div>
      <div className="w-full bg-primary-fixed hover:bg-primary-container transition-colors rounded-t-sm" style={{height: "55%"}}></div>
      <div className="w-full bg-primary-fixed hover:bg-primary-container transition-colors rounded-t-sm" style={{height: "70%"}}></div>
      <div className="w-full bg-error-container hover:bg-error transition-colors rounded-t-sm relative group" style={{height: "95%"}}>
      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-mono text-[10px] px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                          Spike: 195ms
                                      </div>
      </div>
      <div className="w-full bg-primary-fixed hover:bg-primary-container transition-colors rounded-t-sm" style={{height: "50%"}}></div>
      </div>
      </div>
      <div className="flex justify-between mt-2 ml-10 text-[10px] text-secondary font-label-mono">
      <span>Mon</span>
      <span>Wed</span>
      <span>Fri</span>
      <span>Sun</span>
      </div>
      </div>
      {/* State Distribution (Pie Chart Context) */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary mb-md">NODE HEALTH DISTRIBUTION</span>
      <div className="flex-1 flex flex-col items-center justify-center">
      {/* CSS Donut Chart representation */}
      <div className="relative w-32 h-32 rounded-full mb-md" style={{background: "conic-gradient(#131b2e 0% 85%, #ffdad6 85% 95%, #eae7e9 95% 100%)"}}>
      <div className="absolute inset-2 bg-surface-container-lowest rounded-full flex items-center justify-center">
      <div className="text-center">
      <div className="font-headline-md text-headline-md text-primary">85%</div>
      <div className="font-label-mono text-[10px] text-secondary">Healthy</div>
      </div>
      </div>
      </div>
      <div className="w-full space-y-2 mt-auto">
      <div className="flex justify-between items-center font-body-sm text-body-sm">
      <div className="flex items-center gap-2"><div className="w-2 h-2 bg-primary-container rounded-sm"></div> <span className="text-on-surface">Healthy</span></div>
      <span className="font-label-mono text-label-mono">1,204</span>
      </div>
      <div className="flex justify-between items-center font-body-sm text-body-sm">
      <div className="flex items-center gap-2"><div className="w-2 h-2 bg-error-container rounded-sm"></div> <span className="text-on-surface">Degraded</span></div>
      <span className="font-label-mono text-label-mono text-error">142</span>
      </div>
      <div className="flex justify-between items-center font-body-sm text-body-sm">
      <div className="flex items-center gap-2"><div className="w-2 h-2 bg-surface-container-high rounded-sm"></div> <span className="text-on-surface">Offline</span></div>
      <span className="font-label-mono text-label-mono">71</span>
      </div>
      </div>
      </div>
      </div>
      {/* Recent Activity Feed */}
      <div className="col-span-1 md:col-span-3 lg:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT flex flex-col h-[320px]"> {/* Fixed height to align in grid */}
      <div className="p-md border-b border-outline-variant bg-surface-container-low rounded-t-DEFAULT">
      <span className="font-label-caps text-label-caps text-secondary">RECENT ANOMALIES</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm">
      <ul className="space-y-1">
      {/* Event 1 */}
      <li className="p-2 hover:bg-surface-container-low rounded-DEFAULT transition-colors group cursor-pointer border-b border-outline-variant last:border-0 border-dashed">
      <div className="flex items-start justify-between">
      <div className="flex items-start gap-2">
      <CircleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error text-[16px] mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-body-sm text-body-sm text-on-surface font-medium">DB Connection Timeout</div>
      <div className="font-label-mono text-[10px] text-secondary mt-0.5">Cluster: alpha-eu-west</div>
      </div>
      </div>
      <span className="font-label-mono text-[10px] text-secondary">2m ago</span>
      </div>
      </li>
      {/* Event 2 */}
      <li className="p-2 hover:bg-surface-container-low rounded-DEFAULT transition-colors group cursor-pointer border-b border-outline-variant last:border-0 border-dashed">
      <div className="flex items-start justify-between">
      <div className="flex items-start gap-2">
      <TriangleAlert className="text-amber-600 text-[16px] mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-body-sm text-body-sm text-on-surface font-medium">High Memory Usage</div>
      <div className="font-label-mono text-[10px] text-secondary mt-0.5">Node: worker-042</div>
      </div>
      </div>
      <span className="font-label-mono text-[10px] text-secondary">15m ago</span>
      </div>
      </li>
      {/* Event 3 */}
      <li className="p-2 hover:bg-surface-container-low rounded-DEFAULT transition-colors group cursor-pointer border-b border-outline-variant last:border-0 border-dashed">
      <div className="flex items-start justify-between">
      <div className="flex items-start gap-2">
      <Info className="text-secondary text-[16px] mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-body-sm text-body-sm text-on-surface font-medium">Auto-scaling Triggered</div>
      <div className="font-label-mono text-[10px] text-secondary mt-0.5">+2 instances in us-east</div>
      </div>
      </div>
      <span className="font-label-mono text-[10px] text-secondary">1h ago</span>
      </div>
      </li>
      {/* Event 4 */}
      <li className="p-2 hover:bg-surface-container-low rounded-DEFAULT transition-colors group cursor-pointer border-b border-outline-variant last:border-0 border-dashed">
      <div className="flex items-start justify-between">
      <div className="flex items-start gap-2">
      <CircleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error text-[16px] mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-body-sm text-body-sm text-on-surface font-medium">Verification Failed</div>
      <div className="font-label-mono text-[10px] text-secondary mt-0.5">Record ID: 894a-2b</div>
      </div>
      </div>
      <span className="font-label-mono text-[10px] text-secondary">3h ago</span>
      </div>
      </li>
      {/* Event 5 */}
      <li className="p-2 hover:bg-surface-container-low rounded-DEFAULT transition-colors group cursor-pointer border-b border-outline-variant last:border-0 border-dashed">
      <div className="flex items-start justify-between">
      <div className="flex items-start gap-2">
      <RefreshCw className="text-secondary text-[16px] mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-body-sm text-body-sm text-on-surface font-medium">Config Sync Completed</div>
      <div className="font-label-mono text-[10px] text-secondary mt-0.5">All regions updated</div>
      </div>
      </div>
      <span className="font-label-mono text-[10px] text-secondary">5h ago</span>
      </div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

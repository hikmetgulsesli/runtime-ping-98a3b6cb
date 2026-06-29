// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Runtime Ping
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUp, BadgeHelp, Bell, CheckCircle2, CircleAlert, CircleHelp, Database, EllipsisVertical, GitBranch, Lightbulb, ListFilter, Pencil, Plus, RefreshCw, Search, Server, Settings, Terminal, TriangleAlert, X } from "lucide-react";


export type RecordOperationsRuntimePingActionId = "notifications-1" | "settings-2" | "act-retry-load-3" | "act-create-record-4" | "more-vert-5" | "more-vert-6" | "more-vert-7" | "more-vert-8" | "close-9" | "edit-10" | "shell-11" | "operations-1" | "pipeline-2" | "insights-3" | "documentation-4" | "support-5";

export interface RecordOperationsRuntimePingProps {
  actions?: Partial<Record<RecordOperationsRuntimePingActionId, () => void>>;

}

export function RecordOperationsRuntimePing({ actions }: RecordOperationsRuntimePingProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop h-16">
      <div className="flex items-center gap-lg">
      <div className="font-headline-lg text-headline-lg font-black text-primary dark:text-inverse-primary tracking-tight">Runtime Ping</div>
      <div className="relative hidden md:block w-64 ml-md">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <input aria-label="ACT_SEARCH_RECORDS" className="w-full pl-lg py-[6px] bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm focus:outline-none focus:border-primary focus:border-2 focus:py-[5px] transition-colors" placeholder="Search resources..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-xs text-secondary hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors rounded-DEFAULT cursor-pointer active:opacity-80" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-secondary hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors rounded-DEFAULT cursor-pointer active:opacity-80" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant ml-sm object-cover" data-alt="A small, professional headshot of an engineer in a brightly lit office setting. The lighting is soft and neutral, fitting a corporate or tech environment. High resolution, clear focus, minimal background distractions." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWRp90SyPSgBvNBhXOk8HhAfLkNDl58ys5y3Mzozu2UyLuE5-gPKh6mfp7NR3bSvtolIjTRpdTyP97ju0RCbX48mn7oMxy5unEVIrOcj7-gTjFNGA6SR1RrGB2T0y_Ng50IoA5xk9ZRZ_BRrfXKWuqs_YnUY9HwObd7pLxWW4bHpBsmuhM57bHtH0jbXc0JIUmLbEuVQA_Jo8bttqaW0ZyJESgSBb5iTavA0zjN7Qej3YNkk7A0cbP2keJ-8_nSynFriVgmE7bfrM" />
      </div>
      </nav>
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col pt-md pb-xl bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline fixed left-0 top-16 h-full w-[240px] z-40">
      <div className="px-md mb-lg">
      <div className="flex items-center gap-sm mb-sm">
      <div className="w-8 h-8 rounded-DEFAULT bg-emerald-50 border border-emerald-200 flex items-center justify-center">
      <CheckCircle2 className="text-emerald-700 text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md font-bold text-on-surface">System Health</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">All systems operational</div>
      </div>
      </div>
      </div>
      <nav className="flex-1 flex flex-col gap-xs px-sm">
      <a className="bg-primary-container dark:bg-secondary-container text-on-primary-container dark:text-on-secondary-container border-l-2 border-primary font-bold flex items-center gap-sm px-sm py-[6px] rounded-r-DEFAULT duration-200 ease-in-out cursor-pointer" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Terminal  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase tracking-wider">Operations</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest dark:hover:bg-secondary-fixed transition-colors flex items-center gap-sm px-sm py-[6px] border-l-2 border-transparent rounded-r-DEFAULT duration-200 ease-in-out cursor-pointer" href="#" data-action-id="pipeline-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-2"]?.(); }}>
      <GitBranch className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase tracking-wider">Pipeline</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest dark:hover:bg-secondary-fixed transition-colors flex items-center gap-sm px-sm py-[6px] border-l-2 border-transparent rounded-r-DEFAULT duration-200 ease-in-out cursor-pointer" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <Lightbulb className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase tracking-wider">Insights</span>
      </a>
      </nav>
      <div className="mt-auto flex flex-col gap-xs px-sm">
      <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest dark:hover:bg-secondary-fixed transition-colors flex items-center gap-sm px-sm py-[6px] rounded-DEFAULT duration-200 ease-in-out cursor-pointer" href="#" data-action-id="documentation-4" onClick={(event) => { event.preventDefault(); actions?.["documentation-4"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase tracking-wider">Documentation</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest dark:hover:bg-secondary-fixed transition-colors flex items-center gap-sm px-sm py-[6px] rounded-DEFAULT duration-200 ease-in-out cursor-pointer" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase tracking-wider">Support</span>
      </a>
      </div>
      </aside>
      {/* Main Content */}
      <main className="md:pl-[240px] pt-16 min-h-screen">
      <div className="p-margin-desktop max-w-[1600px] mx-auto">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Operations Ledger</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Monitor and manage runtime records across all clusters.</p>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="ACT_RETRY_LOAD" className="h-8 px-md bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-DEFAULT flex items-center gap-xs hover:bg-surface-container-low transition-colors" type="button" data-action-id="act-retry-load-3" onClick={actions?.["act-retry-load-3"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                              Refresh
                          </button>
      <button aria-label="ACT_CREATE_RECORD" className="h-8 px-md bg-primary text-on-primary font-body-sm text-body-sm rounded-DEFAULT flex items-center gap-xs hover:bg-surface-tint transition-colors" type="button" data-action-id="act-create-record-4" onClick={actions?.["act-create-record-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                              Create Record
                          </button>
      </div>
      </div>
      {/* Summary Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Records</span>
      <Database className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface">1,248,392</div>
      <div className="font-body-sm text-body-sm text-secondary mt-xs flex items-center gap-xs">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> 2.4% vs last week
                          </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Active Streams</span>
      <BadgeHelp className="text-emerald-600 text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface">843</div>
      <div className="font-body-sm text-body-sm text-secondary mt-xs flex items-center gap-xs">
      <CheckCircle2 className="text-[14px] text-emerald-600" aria-hidden={true} focusable="false" /> All healthy
                          </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md flex flex-col justify-between">
      <div className="flex items-center justify-between mb-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Failed Operations</span>
      <CircleAlert className="text-error text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface">12</div>
      <div className="font-body-sm text-body-sm text-secondary mt-xs flex items-center gap-xs">
      <TriangleAlert className="text-[14px] text-error" aria-hidden={true} focusable="false" /> Requires attention
                          </div>
      </div>
      </div>
      {/* Main Data Area (Table + Preview) */}
      <div className="flex flex-col lg:flex-row gap-md">
      {/* Table Container */}
      <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT overflow-hidden flex flex-col">
      {/* Table Toolbar */}
      <div className="p-sm border-b border-outline-variant flex items-center justify-between bg-surface">
      <div className="flex items-center gap-sm">
      <select className="h-7 px-sm py-0 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm focus:outline-none focus:border-primary">
      <option>Status: All</option>
      <option>Active</option>
      <option>Failed</option>
      <option>Pending</option>
      </select>
      <select className="h-7 px-sm py-0 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm focus:outline-none focus:border-primary">
      <option>Time: Last 24h</option>
      <option>Last 7 days</option>
      <option>Last 30 days</option>
      </select>
      </div>
      <div className="relative w-48">
      <ListFilter className="absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-7 pl-lg pr-sm py-0 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm focus:outline-none focus:border-primary focus:border-2 transition-colors" placeholder="Filter..." type="text" />
      </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto flex-1">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant">
      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold w-12 text-center">
      <input className="rounded-sm border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </th>
      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Record ID</th>
      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Name / Origin</th>
      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Status</th>
      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Last Ping</th>
      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm">
      {/* Row 1 - Selected */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer border-l-2 !border-l-primary">
      <td className="p-sm text-center">
      <input defaultChecked={true} className="rounded-sm border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-sm font-label-mono text-label-mono text-secondary">REC-8924-A</td>
      <td className="p-sm">
      <div className="font-medium text-on-surface">us-east-1-cluster-alpha</div>
      <div className="text-secondary text-[11px]">AWS / Production</div>
      </td>
      <td className="p-sm">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-DEFAULT bg-emerald-50 text-emerald-700 font-label-caps text-label-caps border border-emerald-100 uppercase">Active</span>
      </td>
      <td className="p-sm font-label-mono text-label-mono text-secondary">12s ago</td>
      <td className="p-sm text-right">
      <button className="p-xs text-secondary hover:text-on-surface" type="button" aria-label="More Vert" data-action-id="more-vert-5" onClick={actions?.["more-vert-5"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer border-l-2 border-l-transparent">
      <td className="p-sm text-center">
      <input className="rounded-sm border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-sm font-label-mono text-label-mono text-secondary">REC-8923-F</td>
      <td className="p-sm">
      <div className="font-medium text-on-surface">eu-west-db-replica-2</div>
      <div className="text-secondary text-[11px]">GCP / Staging</div>
      </td>
      <td className="p-sm">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-DEFAULT bg-amber-50 text-amber-700 font-label-caps text-label-caps border border-amber-100 uppercase">Warning</span>
      </td>
      <td className="p-sm font-label-mono text-label-mono text-secondary">1m 14s ago</td>
      <td className="p-sm text-right">
      <button className="p-xs text-secondary hover:text-on-surface" type="button" aria-label="More Vert" data-action-id="more-vert-6" onClick={actions?.["more-vert-6"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer border-l-2 border-l-transparent">
      <td className="p-sm text-center">
      <input className="rounded-sm border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-sm font-label-mono text-label-mono text-secondary">REC-8922-E</td>
      <td className="p-sm">
      <div className="font-medium text-on-surface">ap-south-cache-node</div>
      <div className="text-secondary text-[11px]">Azure / Development</div>
      </td>
      <td className="p-sm">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-DEFAULT bg-red-50 text-red-700 font-label-caps text-label-caps border border-red-100 uppercase">Failed</span>
      </td>
      <td className="p-sm font-label-mono text-label-mono text-secondary">4m 02s ago</td>
      <td className="p-sm text-right">
      <button className="p-xs text-secondary hover:text-on-surface" type="button" aria-label="More Vert" data-action-id="more-vert-7" onClick={actions?.["more-vert-7"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors bg-surface-container-lowest cursor-pointer border-l-2 border-l-transparent">
      <td className="p-sm text-center">
      <input className="rounded-sm border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="p-sm font-label-mono text-label-mono text-secondary">REC-8921-A</td>
      <td className="p-sm">
      <div className="font-medium text-on-surface">us-west-2-worker-pool</div>
      <div className="text-secondary text-[11px]">AWS / Production</div>
      </td>
      <td className="p-sm">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-DEFAULT bg-emerald-50 text-emerald-700 font-label-caps text-label-caps border border-emerald-100 uppercase">Active</span>
      </td>
      <td className="p-sm font-label-mono text-label-mono text-secondary">45s ago</td>
      <td className="p-sm text-right">
      <button className="p-xs text-secondary hover:text-on-surface" type="button" aria-label="More Vert" data-action-id="more-vert-8" onClick={actions?.["more-vert-8"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Preview Panel */}
      <aside className="w-full lg:w-[320px] shrink-0 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT flex flex-col h-[500px]">
      <div className="p-sm border-b border-outline-variant flex items-center justify-between bg-surface">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">Record Details</span>
      <button className="p-xs text-secondary hover:text-on-surface" type="button" aria-label="Close" data-action-id="close-9" onClick={actions?.["close-9"]}><X className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="p-md overflow-y-auto flex-1">
      <div className="flex items-center gap-sm mb-md">
      <div className="w-10 h-10 rounded-DEFAULT bg-surface-container-low border border-outline-variant flex items-center justify-center">
      <Server className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface">us-east-1-cluster-alpha</h3>
      <p className="font-label-mono text-label-mono text-secondary">REC-8924-A</p>
      </div>
      </div>
      <div className="mb-md">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-DEFAULT bg-emerald-50 text-emerald-700 font-label-caps text-label-caps border border-emerald-100 uppercase mb-xs">Active</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Last ping received 12 seconds ago. Latency within normal parameters (42ms).</p>
      </div>
      <hr className="border-outline-variant my-md" />
      <div className="space-y-sm">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary uppercase">Environment</span>
      <span className="font-body-sm text-body-sm text-on-surface">AWS / Production</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary uppercase">IP Address</span>
      <span className="font-label-mono text-label-mono text-on-surface">10.0.124.88</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary uppercase">Region</span>
      <span className="font-body-sm text-body-sm text-on-surface">us-east-1 (N. Virginia)</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary uppercase">Uptime</span>
      <span className="font-body-sm text-body-sm text-on-surface">45 days, 12:04:22</span>
      </div>
      </div>
      <hr className="border-outline-variant my-md" />
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs">Recent Telemetry</span>
      <div className="bg-surface-container-low rounded-DEFAULT p-sm font-label-mono text-label-mono text-on-surface text-[10px] whitespace-pre-wrap border border-outline-variant">&#123;"cpu": "12%", "mem": "4.2GB", "net_tx": "1.2MB/s"&#125;</div>
      </div>
      </div>
      <div className="p-sm border-t border-outline-variant bg-surface-container-low flex gap-sm">
      <button className="flex-1 h-8 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-DEFAULT flex items-center justify-center gap-xs hover:bg-surface-container-highest transition-colors" type="button" data-action-id="edit-10" onClick={actions?.["edit-10"]}>
      <Pencil className="text-[16px]" aria-hidden={true} focusable="false" /> Edit
                              </button>
      <button className="flex-1 h-8 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-DEFAULT flex items-center justify-center gap-xs hover:bg-surface-container-highest transition-colors" type="button" data-action-id="shell-11" onClick={actions?.["shell-11"]}>
      <Terminal className="text-[16px]" aria-hidden={true} focusable="false" /> Shell
                              </button>
      </div>
      </aside>
      </div>
      </div>
      </main>
    </>
  );
}

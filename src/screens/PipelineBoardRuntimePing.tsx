// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board - Runtime Ping
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, Ban, Bell, CheckCircle2, CircleHelp, Ellipsis, GitBranch, Lightbulb, ListFilter, Plus, Search, Settings, Terminal, TriangleAlert } from "lucide-react";


export type PipelineBoardRuntimePingActionId = "notifications-1" | "settings-2" | "filter-3" | "new-record-4" | "more-horiz-5" | "more-horiz-6" | "more-horiz-7" | "more-horiz-8" | "operations-1" | "pipeline-2" | "insights-3" | "documentation-4" | "support-5";

export interface PipelineBoardRuntimePingProps {
  actions?: Partial<Record<PipelineBoardRuntimePingActionId, () => void>>;

}

export function PipelineBoardRuntimePing({ actions }: PipelineBoardRuntimePingProps) {
  return (
    <>
      {/* TopNavBar component */}
      <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop h-16">
      <div className="flex items-center gap-xl">
      <span className="font-headline-lg text-headline-lg font-black text-primary dark:text-inverse-primary">Runtime Ping</span>
      {/* Search Bar */}
      <div className="relative hidden md:block w-96">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-sm bg-surface-container-low border border-outline-variant rounded-DEFAULT focus:border-primary focus:ring-0 font-body-sm text-body-sm placeholder:text-on-surface-variant transition-colors" data-action="ACT_SEARCH_RECORDS" placeholder="Search records, IDs, or owners..." type="text" />
      <span className="absolute right-sm top-1/2 -translate-y-1/2 font-label-mono text-label-mono text-on-surface-variant bg-surface-container-highest px-xs rounded-sm border border-outline-variant">⌘K</span>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="p-xs text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors rounded-full cursor-pointer active:opacity-80 flex items-center justify-center" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low dark:hover:bg-primary-container transition-colors rounded-full cursor-pointer active:opacity-80 flex items-center justify-center" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant ml-sm cursor-pointer hover:opacity-80 transition-opacity">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot avatar of a technical user in a minimalist style, light background, corporate context, subtle lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUyE5oij6ZYhfPsjOfHIo0O_EZXT51y5JZ5AKJWuF3KjlJJJ1yN0AdJySh9P1RlNwZYM35ayOGb3I8AYMAZfrT0zyxnKsLgae-3UYTPxqolVNtQWr19w8xX7wkpTj97D5PKQdoEgvVi4csxX1eANDaKg8kL16kpEUy5wwWxvcvrTa0ze-9c8q--G8OnEhQ0SQ3mGmBkppqYmyOqDeXfgqtDDyD3PUfIaWBvnoChh4toTt-AVtuULjtnS3rvchOVr80Njf1h1ZCQKU" />
      </div>
      </div>
      </header>
      {/* SideNavBar Component */}
      <nav className="bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline fixed left-0 top-16 h-full w-[240px] flex flex-col pt-md pb-xl hidden md:flex z-40">
      <div className="px-md mb-lg">
      <div className="flex items-center gap-sm">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary-container flex items-center justify-center text-on-primary-container">
      <BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-headline-md text-headline-md font-bold text-on-surface">System Health</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">All systems operational</p>
      </div>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-xs px-sm">
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest dark:hover:bg-secondary-fixed transition-colors duration-200 ease-in-out font-label-caps text-label-caps group" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Terminal className="text-[18px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT bg-primary-container dark:bg-secondary-container text-on-primary-container dark:text-on-secondary-container border-l-2 border-primary font-bold font-label-caps text-label-caps transition-colors duration-200 ease-in-out" href="#" data-action-id="pipeline-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-2"]?.(); }}>
      <GitBranch className="text-[18px]" aria-hidden={true} focusable="false" />
                      Pipeline
                  </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest dark:hover:bg-secondary-fixed transition-colors duration-200 ease-in-out font-label-caps text-label-caps group" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <Lightbulb className="text-[18px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      <div className="mt-auto flex flex-col gap-xs px-sm pt-md border-t border-outline-variant">
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-label-caps text-label-caps" href="#" data-action-id="documentation-4" onClick={(event) => { event.preventDefault(); actions?.["documentation-4"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
                      Documentation
                  </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-label-caps text-label-caps" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
                      Support
                  </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="ml-0 md:ml-[240px] mt-16 p-margin-desktop h-[calc(100vh-64px)] overflow-hidden flex flex-col bg-surface-bright">
      {/* Board Header */}
      <div className="flex justify-between items-end mb-md flex-shrink-0">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-sm">
                          Active Pipeline Board
                          <span className="px-2 py-0.5 rounded-sm bg-surface-container-highest text-on-surface-variant font-label-mono text-[10px] uppercase tracking-wider ml-2">Filtered: All Teams</span>
      </h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Drag and drop records to update operational stage.</p>
      </div>
      <div className="flex gap-sm">
      <button className="h-8 px-sm bg-surface-container-lowest border border-outline-variant rounded-DEFAULT flex items-center gap-xs text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" type="button" data-action-id="filter-3" onClick={actions?.["filter-3"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                          Filter
                      </button>
      <button className="h-8 px-sm bg-primary text-on-primary rounded-DEFAULT flex items-center gap-xs hover:bg-primary/90 transition-colors font-body-sm text-body-sm font-medium" type="button" data-action-id="new-record-4" onClick={actions?.["new-record-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                          New Record
                      </button>
      </div>
      </div>
      {/* Kanban Board Area */}
      <div className="flex-1 flex gap-md pb-sm custom-scrollbar h-full overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      {/* Column 1: Queue */}
      <div className="w-[320px] min-w-[320px] flex flex-col bg-surface-container-low rounded-lg border border-outline-variant">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container">
      <h3 className="font-label-caps text-label-caps text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                              Queue
                              <span className="ml-xs bg-surface-container-highest px-1.5 py-0.5 rounded-sm text-[10px] text-on-surface-variant">12</span>
      </h3>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-5" onClick={actions?.["more-horiz-5"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-sm flex-1 overflow-y-auto kanban-column flex flex-col gap-sm custom-scrollbar" id="col-queue">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm hover:border-primary hover:shadow-sm transition-colors cursor-grab active:cursor-grabbing group relative" data-action="ACT_SELECT_RECORD" draggable="true" id="card-1">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-label-mono text-label-mono text-secondary">REC-8492</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant">2h ago</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium leading-tight mb-sm">Initial telemetry ingestion failure on Node Gamma</h4>
      <div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-variant">
      <div className="flex gap-xs">
      <span className="px-1.5 py-0.5 rounded-sm bg-surface-container-highest text-on-surface-variant font-label-caps text-[9px] border border-outline-variant/50">Infrastructure</span>
      </div>
      <div className="w-6 h-6 rounded-full overflow-hidden border border-outline-variant">
      <img className="w-full h-full object-cover" data-alt="Small avatar icon of a female engineer, professional setting, minimalist." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsJjUlb8ITAbG-4YNZN7G5YF0y8BZdodhFdCnF1Tn2y3JJXf972egetzB3JD4fmIPTmSzLDDJsU09h7y4xP3XYWdtomYevQEZOa3YERXCWkwSit_x7Re97gGjNE55dwC48yuEaiDmuXVJZJHeSnve0s6hv2ol7zdp78_YiKMT5LxwgjEP_-0GO0mh2IgMNNeKW9FoldyGJEfeUZx1bTxfn8Ida0arbTFC5oapDi_DaczmmXi8uuvdxvRG7FO6rfAmqbiKtjKfsBO4" />
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm hover:border-primary hover:shadow-sm transition-colors cursor-grab active:cursor-grabbing group relative" data-action="ACT_SELECT_RECORD" draggable="true" id="card-2">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-label-mono text-label-mono text-secondary">REC-8490</span>
      <span className="font-body-sm text-[11px] text-error font-medium">1d ago</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium leading-tight mb-sm">SSL Certificate expiration warning for primary domain</h4>
      <div className="flex items-center gap-xs mb-sm">
      <TriangleAlert className="text-[14px] text-error" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-[11px] text-error">High Priority</span>
      </div>
      <div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-variant">
      <div className="flex gap-xs">
      <span className="px-1.5 py-0.5 rounded-sm bg-surface-container-highest text-on-surface-variant font-label-caps text-[9px] border border-outline-variant/50">Security</span>
      </div>
      <div className="w-6 h-6 rounded-full overflow-hidden border border-outline-variant bg-surface-container-highest flex items-center justify-center">
      <BadgeHelp className="text-[14px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column 2: Processing */}
      <div className="w-[320px] min-w-[320px] flex flex-col bg-surface-container-low rounded-lg border border-outline-variant">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container">
      <h3 className="font-label-caps text-label-caps text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                              Processing
                              <span className="ml-xs bg-surface-container-highest px-1.5 py-0.5 rounded-sm text-[10px] text-on-surface-variant">3</span>
      </h3>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-6" onClick={actions?.["more-horiz-6"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-sm flex-1 overflow-y-auto kanban-column flex flex-col gap-sm custom-scrollbar" id="col-processing">
      {/* Card 3 */}
      <div className="bg-surface-container-lowest border-l-2 border-l-[#3b82f6] border-y border-r border-outline-variant rounded-DEFAULT p-sm hover:shadow-sm transition-colors cursor-grab active:cursor-grabbing group relative" data-action="ACT_SELECT_RECORD" draggable="true" id="card-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-label-mono text-label-mono text-secondary">REC-8485</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant">45m ago</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium leading-tight mb-sm">Database connection pooling threshold breached</h4>
      <div className="w-full bg-surface-variant h-1 rounded-full mb-sm overflow-hidden">
      <div className="bg-[#3b82f6] h-full" style={{width: "60%"}}></div>
      </div>
      <div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-variant">
      <div className="flex gap-xs">
      <span className="px-1.5 py-0.5 rounded-sm bg-surface-container-highest text-on-surface-variant font-label-caps text-[9px] border border-outline-variant/50">Database</span>
      </div>
      <div className="w-6 h-6 rounded-full overflow-hidden border border-outline-variant">
      <img className="w-full h-full object-cover" data-alt="Avatar icon of a male database administrator, focused expression, corporate minimalist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKtkq3XFVH42Zbscj2ycEfKS7KPw06OcGiF1Qn3l5tySUy1hJ4Dwouwogk1IchuGu94TFJpzV0YuMyONsbN-LJQUvw1EU5JCBIDA72hOsuMv_51FDbDmzcgzt2XiniT5ySoAlM5RErZgddE233kd9x1ohhRZ9JvqcMDhygE5V_gkWHWnlJXoNu0-kRehJKN6Cws7xCtinXnw7TFaZNV9W1V0G22JpKkVoX9IgWJZ8ql8JjffKCBJurEWEBETViFCqchXzWZJewI1k" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column 3: Verification */}
      <div className="w-[320px] min-w-[320px] flex flex-col bg-surface-container-low rounded-lg border border-outline-variant">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container">
      <h3 className="font-label-caps text-label-caps text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
                              Verification
                              <span className="ml-xs bg-surface-container-highest px-1.5 py-0.5 rounded-sm text-[10px] text-on-surface-variant">1</span>
      </h3>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-7" onClick={actions?.["more-horiz-7"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-sm flex-1 overflow-y-auto kanban-column flex flex-col gap-sm custom-scrollbar" id="col-verification">
      {/* Card 4 (Blocked) */}
      <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-DEFAULT p-sm hover:shadow-sm transition-colors cursor-grab active:cursor-grabbing group relative" data-action="ACT_SELECT_RECORD" draggable="true" id="card-4">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-label-mono text-label-mono text-[#b45309]">REC-8472</span>
      <span className="font-body-sm text-[11px] text-[#b45309]">5h ago</span>
      </div>
      <h4 className="font-body-md text-body-md text-[#92400e] font-medium leading-tight mb-sm">API Gateway latency spikes in EU-West region</h4>
      <div className="flex items-center gap-xs mb-sm bg-[#fef3c7] p-xs rounded-sm border border-[#fde68a]">
      <Ban className="text-[14px] text-[#b45309]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-[11px] text-[#b45309] font-medium">Awaiting third-party vendor logs</span>
      </div>
      <div className="flex justify-between items-center mt-auto pt-sm border-t border-[#fde68a]">
      <div className="flex gap-xs">
      <span className="px-1.5 py-0.5 rounded-sm bg-[#fef3c7] text-[#92400e] font-label-caps text-[9px] border border-[#fcd34d]/50">Network</span>
      </div>
      <div className="w-6 h-6 rounded-full overflow-hidden border border-[#fcd34d]">
      <img className="w-full h-full object-cover" data-alt="Avatar icon of a senior network engineer, neutral expression, minimalist lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1GfvwMYbitS5i54ALtNaiL3B228PXWM0l2yRnXAMeujhd0YnpbqmFGf4i9hxDtsZB4mIbJ2OlGgtaZWXc2qlaIp-5_w1L9c71CtrFE-bh8-_Tjr7CnMQnirnAR2A8CifH04acAyHxkhOIWdgDoXR_pOPxWctix-kp5mJa9gApfROB3rYT3caJ3rBCKMdGUREQUkSSYEiBx66HQABRn-jSvQrQrZMDPx9et4T7tEiU_OV6aq_5r-6inka9YiO4Bzub81kCDiAHxw" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column 4: Complete */}
      <div className="w-[320px] min-w-[320px] flex flex-col bg-surface-container-low rounded-lg border border-outline-variant opacity-70 hover:opacity-100 transition-opacity">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container">
      <h3 className="font-label-caps text-label-caps text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                              Complete
                              <span className="ml-xs bg-surface-container-highest px-1.5 py-0.5 rounded-sm text-[10px] text-on-surface-variant">24</span>
      </h3>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="More Horiz" data-action-id="more-horiz-8" onClick={actions?.["more-horiz-8"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-sm flex-1 overflow-y-auto kanban-column flex flex-col gap-sm custom-scrollbar" id="col-complete">
      {/* Card 5 (Done) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm opacity-80" data-action="ACT_SELECT_RECORD">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-label-mono text-label-mono text-secondary line-through">REC-8460</span>
      <CheckCircle2 className="text-[14px] text-[#10b981]" aria-hidden={true} focusable="false" />
      </div>
      <h4 className="font-body-md text-body-md text-on-surface-variant font-medium leading-tight mb-sm">Memory leak in user authentication service</h4>
      <div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-variant">
      <span className="font-body-sm text-[11px] text-on-surface-variant">Closed by System</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      
    </>
  );
}

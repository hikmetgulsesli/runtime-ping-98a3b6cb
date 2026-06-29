// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Runtime Ping
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, BadgeHelp, CircleAlert, Save, X } from "lucide-react";


export type RecordEditorRuntimePingActionId = "cancel-1" | "save-changes-2" | "close-3" | "close-4" | "cancel-5" | "save-changes-6" | "back-to-operations-1";

export interface RecordEditorRuntimePingProps {
  actions?: Partial<Record<RecordEditorRuntimePingActionId, () => void>>;

}

export function RecordEditorRuntimePing({ actions }: RecordEditorRuntimePingProps) {
  return (
    <>
      {/* TopNavBar: Suppressed for focused transactional task */}
      {/* SideNavBar: Suppressed for focused transactional task */}
      <main className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      {/* Header Section */}
      <header className="mb-lg flex items-center justify-between">
      <div>
      <a className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-sm" href="#" data-action-id="back-to-operations-1" onClick={(event) => { event.preventDefault(); actions?.["back-to-operations-1"]?.(); }}>
      <ArrowLeft className="text-[18px] mr-xs" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Back to Operations</span>
      </a>
      <div className="flex items-center gap-md">
      <h1 className="font-headline-lg text-headline-lg text-primary">Edit Record: API Gateway</h1>
      {/* Modified Unsaved Badge */}
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps uppercase border border-outline-variant">
                              Modified
                          </span>
      </div>
      </div>
      <div className="flex gap-sm">
      {/* Secondary Action */}
      <button className="h-8 px-md rounded-DEFAULT bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm flex items-center justify-center" type="button" data-action-id="cancel-1" onClick={actions?.["cancel-1"]}>
                          Cancel
                      </button>
      {/* Primary Action */}
      <button className="h-8 px-md rounded-DEFAULT bg-primary text-on-primary hover:bg-surface-tint transition-colors font-body-sm text-body-sm flex items-center justify-center" type="button" data-action-id="save-changes-2" onClick={actions?.["save-changes-2"]}>
                          Save Changes
                      </button>
      </div>
      </header>
      {/* Form Card */}
      <div className="bg-surface-container-lowest rounded-DEFAULT border border-outline-variant p-lg shadow-sm">
      <form action="#" className="space-y-lg" method="POST">
      {/* Bento-style grid for inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Record Name */}
      <div className="col-span-1 md:col-span-2">
      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-xs" htmlFor="record_name">
                                  Record Name <span className="text-error">*</span>
      </label>
      <input className="w-full h-8 px-sm bg-surface-container-lowest border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" id="record_name" name="record_name" required={true} type="text" defaultValue="API Gateway" />
      </div>
      {/* Endpoint URL */}
      <div className="col-span-1 md:col-span-2">
      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-xs" htmlFor="endpoint_url">
                                  Endpoint URL <span className="text-error">*</span>
      </label>
      <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-sm text-secondary">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
      </span>
      <input className="w-full h-8 pl-8 pr-sm bg-surface-container-lowest border border-outline-variant rounded-DEFAULT font-label-mono text-label-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" id="endpoint_url" name="endpoint_url" required={true} type="url" defaultValue="https://api.internal.service/health" />
      </div>
      {/* Validation Message (Hidden by default, shown for demo) */}
      <p className="mt-xs font-body-sm text-body-sm text-error flex items-center hidden" id="url-error">
      <CircleAlert className="text-[14px] mr-xs" aria-hidden={true} focusable="false" />
                                  Please enter a valid HTTPS URL.
                              </p>
      </div>
      {/* Ping Interval */}
      <div className="col-span-1">
      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-xs" htmlFor="ping_interval">
                                  Ping Interval <span className="text-error">*</span>
      </label>
      <select className="w-full h-8 px-sm bg-surface-container-lowest border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors appearance-none" id="ping_interval" name="ping_interval" required={true}>
      <option value="10s">Every 10 seconds</option>
      <option value="30s">Every 30 seconds</option>
      <option selected={true} value="1m">Every 1 minute</option>
      <option value="5m">Every 5 minutes</option>
      </select>
      </div>
      {/* Tags */}
      <div className="col-span-1">
      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-xs" htmlFor="tags">
                                  Tags
                              </label>
      <div className="flex items-center gap-xs flex-wrap mb-xs">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono border border-outline-variant">
                                      production
                                      <button className="ml-1 text-secondary hover:text-error focus:outline-none" type="button" aria-label="Close" data-action-id="close-3" onClick={actions?.["close-3"]}>
      <X className="text-[12px]" aria-hidden={true} focusable="false" />
      </button>
      </span>
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono border border-outline-variant">
                                      api
                                      <button className="ml-1 text-secondary hover:text-error focus:outline-none" type="button" aria-label="Close" data-action-id="close-4" onClick={actions?.["close-4"]}>
      <X className="text-[12px]" aria-hidden={true} focusable="false" />
      </button>
      </span>
      </div>
      <div className="relative">
      <input className="w-full h-8 px-sm bg-surface-container-lowest border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" id="tags" name="tags" placeholder="Add tag..." type="text" />
      </div>
      </div>
      {/* Description */}
      <div className="col-span-1 md:col-span-2">
      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-xs" htmlFor="description">
                                  Description
                              </label>
      <textarea className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none" id="description" name="description" rows={3}>Primary gateway for external traffic. Monitored for latency spikes.</textarea>
      </div>
      </div>
      {/* Footer Actions (Sticky on mobile if needed, inline here) */}
      <div className="pt-lg mt-lg border-t border-outline-variant flex justify-end gap-sm">
      <button className="h-8 px-md rounded-DEFAULT bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" type="button" data-action-id="cancel-5" onClick={actions?.["cancel-5"]}>
                              Cancel
                          </button>
      <button className="h-8 px-md rounded-DEFAULT bg-primary text-on-primary hover:bg-surface-tint transition-colors font-body-sm text-body-sm flex items-center" type="submit" data-action-id="save-changes-6" onClick={actions?.["save-changes-6"]}>
      <Save className="text-[16px] mr-xs" aria-hidden={true} focusable="false" />
                              Save Changes
                          </button>
      </div>
      </form>
      </div>
      </main>
      
    </>
  );
}

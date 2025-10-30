"use client";

import { useEffect, useMemo } from "react";
import { createPageDataFromTemplate, templates } from "../../lib/templates";
import type { PageData } from "../../lib/schemas";
import { PuckProvider } from "../../components/editor/puck-provider";
import { useBuilderStore } from "../../lib/store";
import { saveProject } from "../../lib/storage";
import { useSearchParams } from "next/navigation";

type SearchParams = { template?: keyof typeof templates };

export default function BuilderPage() {
  const params = useSearchParams();
  const templateParam = (params.get("template") ?? "luxuryVillas") as keyof typeof templates;

  const initialData: PageData = useMemo(() => createPageDataFromTemplate(templateParam), [templateParam]);
  const { pageData, setPageData, updateSections, saveCurrent } = useBuilderStore();

  // Initialize store on first render
  useEffect(() => {
    if (!pageData) {
      setPageData(initialData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="text-sm text-muted-foreground">Template: {templateParam}</div>
        <div className="flex items-center gap-2">
          <button
            className="rounded bg-zinc-900 px-3 py-1 text-sm text-white dark:bg-white dark:text-black"
            onClick={() => {
              if (!pageData) return;
              saveProject(pageData.id, pageData, pageData.name);
              alert("Saved to LocalStorage");
            }}
          >
            Save
          </button>
          {pageData && (
            <a
              href={`/preview?id=${encodeURIComponent(pageData.id)}`}
              className="rounded border px-3 py-1 text-sm"
              title="Open Preview"
            >
              Preview
            </a>
          )}
        </div>
      </div>
      <PuckProvider
        data={pageData ?? initialData}
        onPublish={(nextPage) => {
          // nextPage is PageData produced from Puck content
          updateSections(nextPage.sections);
          saveProject(nextPage.id, nextPage, nextPage.name);
          alert("Published & Saved. Open Preview to see it.");
        }}
      />
    </div>
  );
}
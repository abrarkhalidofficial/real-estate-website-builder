"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { PageData } from "../../lib/schemas";
import { loadProject, getLastProjectId } from "../../lib/storage";
import { PageRender } from "../../components/site/page-render";

export default function PreviewPage() {
  const params = useSearchParams();
  const [data, setData] = useState<PageData | null>(null);

  useEffect(() => {
    const idParam = params.get("id");
    const id = idParam ?? getLastProjectId();
    if (!id) return;
    const loaded = loadProject<PageData>(id);
    if (loaded) setData(loaded);
  }, [params]);

  if (!data) {
    return (
      <div className="grid min-h-screen place-items-center">
        <p className="text-sm text-muted-foreground">No project loaded. Publish from the builder first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageRender sections={data.sections} />
    </div>
  );
}
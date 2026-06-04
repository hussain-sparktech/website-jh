import { PageEditor } from "@/components/admin/PageEditor";
import { CMS_PAGE_IDS, CMS_PAGE_LABELS, type CmsPageId } from "@/lib/cms/types";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CMS_PAGE_IDS.map((pageId) => ({ pageId }));
}

export default function AdminPageEditorRoute({ params }: { params: { pageId: string } }) {
  const pageId = params.pageId as CmsPageId;

  if (!CMS_PAGE_IDS.includes(pageId)) {
    notFound();
  }

  return <PageEditor pageId={pageId} pageLabel={CMS_PAGE_LABELS[pageId]} />;
}

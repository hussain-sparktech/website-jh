"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ImportContentButton } from "@/components/admin/ImportContentButton";
import { CMS_PAGE_IDS, CMS_PAGE_LABELS } from "@/lib/cms/types";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export function AdminDashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAdminAuth();

  return (
    <div className="admin-shell admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <strong>3C CMS</strong>
          <p className="admin-muted">{user?.email}</p>
        </div>

        <div className="admin-sidebar__body">
          <nav className="admin-nav" aria-label="CMS pages">
            {CMS_PAGE_IDS.map((pageId) => (
              <Link
                className={pathname === `/admin/dashboard/${pageId}` ? "active" : ""}
                href={`/admin/dashboard/${pageId}`}
                key={pageId}
              >
                {CMS_PAGE_LABELS[pageId]}
              </Link>
            ))}
          </nav>

          <ImportContentButton />
        </div>

        <div className="admin-sidebar__footer">
          <Link href="/en">View website</Link>
          <button className="admin-button ghost" type="button" onClick={() => logout()}>
            Sign out
          </button>
        </div>
      </aside>

      <main className="admin-main">{children}</main>
    </div>
  );
}

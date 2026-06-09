import type { ReactNode } from "react";
import { AdminAuthGate } from "@/components/admin/AdminAuthGate";
import { AdminDashboardShell } from "@/components/admin/AdminDashboardShell";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AdminAuthGate>
      <AdminDashboardShell>{children}</AdminDashboardShell>
    </AdminAuthGate>
  );
}

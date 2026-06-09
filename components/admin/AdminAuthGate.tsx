"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export function AdminAuthGate({ children }: { children: ReactNode }) {
  const { user, loading } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="admin-shell">
        <p className="admin-muted">Checking session…</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="admin-shell">
        <p className="admin-muted">
          Redirecting to <Link href="/admin/login">login</Link>…
        </p>
      </div>
    );
  }

  return <>{children}</>;
}

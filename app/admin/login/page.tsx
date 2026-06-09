"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { isFirebaseConfigured } from "@/lib/firebase/config";

export default function AdminLoginPage() {
  const { user, loading, login } = useAdminAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/admin/dashboard/home");
    }
  }, [loading, user, router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await login(email.trim(), password);
      router.replace("/admin/dashboard/home");
    } catch (loginError) {
      console.error(loginError);
      setError("Login failed. Check email, password, and Firebase Authentication setup.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!isFirebaseConfigured()) {
    return (
      <div className="admin-shell admin-login">
        <div className="admin-card">
          <h1>Admin login</h1>
          <p className="admin-error">
            Firebase is not configured. Add your keys to <code>.env.local</code> and restart{" "}
            <code>npm run dev</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-shell admin-login">
      <div className="admin-card">
        <p className="admin-eyebrow">3C CMS</p>
        <h1>Admin login</h1>
        <p className="admin-muted">Edit site text in Firestore. Image uploads come later.</p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input
              autoComplete="username"
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              autoComplete="current-password"
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {error ? <p className="admin-error">{error}</p> : null}
          <button className="admin-button primary" disabled={submitting} type="submit">
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="admin-muted">
          <Link href="/en">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}

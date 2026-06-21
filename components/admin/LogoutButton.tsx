"use client";

import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch {
      // Even if the request fails, still send them to login below —
      // there's nothing more useful to do client-side here.
    } finally {
      // Hard navigation, not router.push(). Cookie state is read by
      // middleware on the server; a client-side route transition can
      // serve a cached tree that still thinks the session is valid,
      // which is exactly the "click logout, nothing happens" symptom.
      window.location.assign("/admin/login");
    }
  };

  return (
    <button onClick={handleLogout} disabled={loading} className="adm-logout">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="M16 17l5-5-5-5" />
        <path d="M21 12H9" />
      </svg>
      {loading ? "Signing out…" : "Log Out"}
    </button>
  );
}

'use client';

import { useState, useEffect } from 'react';
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const userData = user ? JSON.parse(user) : null;

    if (!userData || userData.role !== 'admin') {
      window.location.href = '/admin/login';
      return;
    }

    setIsAuthorized(true);
    setLoading(false);
  }, []);

  if (loading) return <div className="flex justify-center py-12">Loading...</div>;
  if (!isAuthorized) return null;

  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 bg-slate-100 p-8">{children}</main>
      </div>
    </>
  );
}

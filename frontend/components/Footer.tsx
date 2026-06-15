export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-slate-600 md:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900">Bakery Naichii</p>
          <p className="mt-2 text-sm">Hangat di Hati, Lembut di Setiap Gigitan</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p>Alamat: Jalan Roti Bahagia No. 15</p>
          <p>Email: hello@naichii.com</p>
          <p>Telp: +62 812-3456-7890</p>
        </div>
      </div>
    </footer>
  );
}

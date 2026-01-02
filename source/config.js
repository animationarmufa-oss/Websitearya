// Web HirrOfficial — Client Config (AMAN untuk browser)
// ⚠️ Jangan taruh API KEY di sini. Secrets harus di Vercel Environment Variables.

export const BRAND = {
  name: "ARMUFA STORE",
  tagline: "Powerful hosting • Panel Pterodactyl • Bergaransi",
};

// Mata uang (display only)
export const CURRENCY = "IDR";

// Link (opsional)
export const LINKS = {
  // Jika mau aman, kosongkan dan kembalikan link via endpoint server setelah pembayaran.
  resellerGroupFallback: "https://t.me/+dA8elHyzEGw5MTE1", // contoh: "https://chat.whatsapp.com/XXXXX"
};

// Produk & harga (edit bebas)
export const PRODUCTS = [
  {
    key: "panel",
    title: "Panel Pterodactyl",
    subtitle: "Pilih RAM sesuai kebutuhan. Unlimited = request-based.",
    icon: "panel",
    requires: { name: true, hostname: false },
    plans: [
      { key: "panel-1gb", label: "1GB", ramGb: 1, cores: null, price: 1000, badge: "Starter" },
      { key: "panel-2gb", label: "2GB", ramGb: 2, cores: null, price: 2000, badge: "Basic" },
      { key: "panel-3gb", label: "3GB", ramGb: 3, cores: null, price: 3000, badge: "Plus" },
      { key: "panel-4gb", label: "4GB", ramGb: 4, cores: null, price: 4000, badge: "Popular" },
      { key: "panel-5gb", label: "5GB", ramGb: 5, cores: null, price: 5000, badge: "Popular" },
      { key: "panel-6gb", label: "6GB", ramGb: 6, cores: null, price: 6000, badge: "Popular" },
      { key: "panel-7gb", label: "7GB", ramGb: 7, cores: null, price: 6500, badge: "Popular" },
      { key: "panel-8gb", label: "8GB", ramGb: 8, cores: null, price: 7000, badge: "Popular" },
      { key: "panel-9gb", label: "9GB", ramGb: 9, cores: null, price: 8000, badge: "Popular" },
      { key: "panel-10gb", label: "10GB", ramGb: 10, cores: null, price: 10000, badge: "Popular" },
      { key: "panel-unlimited", label: "UNLIMITED", ramGb: 0, cores: null, price: 12000, badge: "Request" },
    ],
    notes: [
      "Unlimited (ram=0) = request-based (bukan RAM tak terbatas secara fisik).",
      "Resource menyesuaikan kapasitas server & kebijakan fair use.",
    ],
  },

  {
    key: "admin",
    title: "Admin Panel Pterodactyl",
    subtitle: "Akses admin untuk panel (high privilege).",
    icon: "admin",
    requires: { name: true, hostname: false },
    plans: [
      { key: "admin-access", label: "Admin Access", ramGb: null, cores: null, price: 15000, badge: "Admin" },
    ],
    notes: [
      "Masukkan username/nama target admin dengan benar.",
      "Produk ini high privilege — pastikan data benar.",
    ],
  },

  {
    key: "OWNER",
    title: "Owner Panel Pterodactyl",
    subtitle: "Akses Owner untuk panel (high privilege).",
    icon: "admin",
    requires: { name: true, hostname: false },
    plans: [
      { key: "owner-access", label: "Owner Access", ramGb: null, cores: null, price: 20000, badge: "Owner" },
    ],
    notes: [
      "Masukkan username/nama target Owner dengan benar.",
      "Kalau membeli owner panel langsung ke telegram @MYARMUFASTORE Serta bukti pembayaran",
    ],
  },
  
  {
    key: "PARTNER",
    title: "Partner Panel Pterodactyl",
    subtitle: "Akses Partner untuk panel (high privilege).",
    icon: "admin",
    requires: { name: true, hostname: false },
    plans: [
      { key: "partner-access", label: "Owner Access", ramGb: null, cores: null, price: 18000, badge: "Partner" },
    ],
    notes: [
      "Masukkan username/nama target Partner dengan benar.",
      "Kalau membeli Partner panel langsung ke telegram @MYARMUFASTORE Serta bukti pembayaran",
    ],
  },
  
  {
    key: "reseller",
    title: "Reseller Panel Pterodactyl",
    subtitle: "Akses reseller + link khusus setelah pembayaran.",
    icon: "reseller",
    requires: { name: false, hostname: false },
    plans: [
      { key: "reseller-access", label: "Reseller Access", ramGb: null, cores: null, price: 14000, badge: "Reseller" },
    ],
    notes: ["Setelah pembayaran sukses, kamu akan mendapat link khusus reseller."],
  },
];

// UX defaults
export const UX = {
  autoPollMs: 8000,
};

# 🛣️ Aplikasi Jasa Marga Traffic Service

Aplikasi web internal untuk pengelolaan data lalu lintas (lalin) dan master gerbang, dikembangkan menggunakan **Next.js**, **Tailwind CSS**, **React Query**, **Shadcn/UI**, dan **React Hooks**.  
Aplikasi ini memiliki sistem proteksi login, halaman dashboard, serta fitur CRUD untuk laporan lalu lintas dan master gerbang.

---

## 🚀 Teknologi yang Digunakan

| Teknologi | Deskripsi |
|------------|------------|
| **Next.js** | Framework React untuk SSR dan SSG |
| **Tailwind CSS** | Library utility-first untuk styling responsif |
| **React Query** | Data fetching dan caching state manajemen API |
| **Shadcn/UI** | Komponen UI modern berbasis Radix dan Tailwind |
| **React Hooks** | Pengelolaan state dan efek pada komponen fungsional |

---

## ⚙️ Fitur Utama

### 🔐 Autentikasi
- Sistem **Protect Login** agar halaman hanya dapat diakses oleh user yang sudah login.
- Redirect otomatis ke halaman login jika belum terautentikasi.

### 🧭 Dashboard
- Tampilan ringkasan data laporan lalu lintas dan status sistem.
- Akses cepat ke menu CRUD data.

### 🗂️ CRUD Fitur
1. **Laporan Lalin**
   - Create, Read, Update, Delete data laporan lalu lintas.
   - Validasi input sebelum penyimpanan.
2. **Master Gerbang**
   - Manajemen data gerbang tol secara dinamis.

### 💡 Tampilan dan UX Tambahan
- **Loading Splash Screen** — animasi singkat saat aplikasi pertama kali dimuat.  
- **Service Loading State** — indikator loading saat memuat data dari API.  
- **Service Error State** — tampilan error ketika API gagal diakses.  
- **No Data State** — tampilan khusus ketika data kosong.

---

## 🧑‍💻 Cara Menjalankan Project di Lokal


### 1. Clone Repository
```bash
git clone https://github.com/setiawan-utsman/FE_Test.git
```

### Masuk ke Folder Project
```bash 
cd FE_Test
```

## Install Dependencies
## Menggunakan npm:

```bash
npm install
```
## Atau menggunakan yarn:
```bash
yarn install
```

## Jalankan Aplikasi
```bash 
   npm run dev
```
Akses di browser:
```bash
http://localhost:3000


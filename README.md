# Pengembangan Estimator.id

Repository ini berisi source code untuk pengembangan sistem **Estimator.id**, dengan fokus pada penambahan fitur **Analisa Harga Satuan (AHS)** pada bagian **Rencana Anggaran Biaya (RAB)**.

Sistem ini mengimplementasikan algoritma perhitungan menggunakan **PHPSpreadsheet**.

## 📂 Struktur Folder
Proyek ini terbagi menjadi dua bagian utama:

- **`Frontend-estimator/`** : Antarmuka pengguna berbasis **React.js** (Vite).
- **`backend-estimator/`** : API dan logika server berbasis **CodeIgniter 3** (PHP).

## 🛠️ Teknologi yang Digunakan

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS (jika digunakan)
- **Language:** JavaScript/JSX

### Backend
- **Framework:** CodeIgniter 3
- **Language:** PHP
- **Library Utama:** PHPSpreadsheet (untuk kalkulasi AHS/RAB)
- **Database:** MySQL

---

## 🚀 Cara Menjalankan Project

### 1. Persiapan Backend
1. Pindahkan folder `backend-estimator` ke dalam direktori server lokal Anda (misalnya: `htdocs` di XAMPP).
2. Buat database baru di MySQL (misalnya: `estimator_db`).
3. Import file database (jika ada file `.sql`).
4. Sesuaikan konfigurasi database di `application/config/database.php`.
5. Pastikan server Apache dan MySQL sudah berjalan.

### 2. Persiapan Frontend
1. Buka terminal dan masuk ke folder frontend:
   ```bash
   cd Frontend-estimator

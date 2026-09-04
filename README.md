# SIPPA - Sistem Informasi Pemetaan Produksi Pertanian

Dashboard interaktif untuk memvisualisasikan hasil kluster pertanian tanaman pangan Indonesia menggunakan K-Means.

## Cara Instalasi & Menjalankan

### Prasyarat

- **Node.js** versi 18 atau lebih baru
- **npm** (sudah termasuk dalam Node.js)

### 1. Install Dependencies

```bash
npm install
```

atau singkatnya:

```bash
npm i
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Buka `http://localhost:5173` di browser untuk melihat dashboard.

### 3. Build untuk Production

```bash
npm run build
```

Hasil build tersimpan di folder `dist/`.

### 4. Preview Production Build

```bash
npm run preview
```

## Struktur Project

```
├── data-resource/          # ← Letakkan file CSV data di sini
│   ├── MASTER/             # Data master dari tim data/ML
│   └── ML_OUTPUT/          # Output dari model ML (clustering, evaluasi)
├── src/
│   ├── components/         # Komponen UI reusable
│   ├── data/
│   │   ├── generated/      # JSON hasil konversi (auto-generated, jangan edit manual)
│   │   └── *.ts            # Type-safe wrapper untuk data
│   ├── pages/              # Halaman-halaman dashboard
│   └── hooks/              # Custom React hooks
├── tools/
│   └── import-data.mjs     # Skrip konversi CSV → JSON
└── package.json
```

## Cara Pakai (Untuk Tim Backend/Data)

### 1. Letakkan File CSV

Simpan semua file CSV di folder `data-resource/` dengan struktur:

```
data-resource/
├── MASTER/
│   ├── Hasil_Clustering_Provinsi.csv    # Data provinsi + hasil clustering
│   ├── Ringkasan_Cluster.csv            # Ringkasan karakteristik tiap cluster
│   └── Master_Dataset_Pertanian_9_Dataset_Final.csv  # Dataset lengkap
└── ML_OUTPUT/
    ├── Profil_Provinsi.csv              # Profil detail per provinsi-komoditas
    ├── Evaluasi_KMeans.csv              # Metrik evaluasi K-Means (k=2..8)
    ├── PCA_Variance.csv                 # Variance explained per komponen PCA
    └── Ringkasan_Cluster.csv            # Ringkasan cluster (sama dengan MASTER)
```

### 2. Format CSV yang Diharapkan

#### `Profil_Provinsi.csv` (Wajib)
```csv
provinsi,cluster,cluster_name,komoditas,tahun,produksi,median_cluster,selisih_dengan_median_cluster
Aceh,1,Produksi Tinggi dengan Hortikultura Dataran Tinggi Menonjol,Padi,2025,1615200.0,1382697.0,232503.0
```

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| provinsi | string | Nama provinsi (sesuai GeoJSON peta) |
| cluster | number | Nomor cluster (0, 1, 2, 3, ...) |
| cluster_name | string | Nama deskriptif cluster |
| komoditas | string | Nama komoditas pertanian |
| tahun | number | Tahun data |
| produksi | number | Jumlah produksi (ton) |
| median_cluster | number | Median produksi cluster |
| selisih_dengan_median_cluster | number | Selisih produksi dengan median |

#### `Evaluasi_KMeans.csv` (Wajib)
```csv
k,inertia,silhouette_score,davies_bouldin_index,smallest_cluster,largest_cluster
2,1052.07,0.362,0.992,13,25
```

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| k | number | Jumlah cluster yang diuji |
| inertia | number | Inertia (within-cluster sum of squares) |
| silhouette_score | number | Silhouette coefficient (0-1, lebih tinggi lebih baik) |
| davies_bouldin_index | number | DBI (lebih rendah lebih baik) |
| smallest_cluster | number | Jumlah anggota cluster terkecil |
| largest_cluster | number | Jumlah anggota cluster terbesar |

#### `PCA_Variance.csv` (Opsional)
```csv
component,explained_variance,cumulative_variance
1,0.617,0.617
```

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| component | number | Nomor komponen PCA |
| explained_variance | number | Variance yang dijelaskan komponen ini |
| cumulative_variance | number | Kumulatif variance explained |

#### `Ringkasan_Cluster.csv` (Wajib)
```csv
cluster,cluster_name,jumlah_provinsi,provinsi,karakteristik
0,Produksi Multi-Komoditas Relatif Rendah,8,"DKI Jakarta, Gorontalo, Papua",Produksi multi-komoditas secara umum relatif rendah
```

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| cluster | number | Nomor cluster |
| cluster_name | string | Nama deskriptif cluster |
| jumlah_provinsi | number | Jumlah provinsi dalam cluster |
| provinsi | string | Daftar provinsi (dipisah koma, dalam tanda kutip) |
| karakteristik | string | Deskripsi karakteristik cluster |

#### `Hasil_Clustering_Provinsi.csv` (Opsional)
```csv
provinsi,produksi_padi_2025,produksi_jagung_2024,...,cluster,cluster_name
Aceh,1615200.0,52249.4,...,1,Produksi Tinggi dengan Hortikultura Dataran Tinggi Menonjol
```

### 3. Jalankan Import

Setelah semua CSV siap, jalankan:

```bash
npm run import-data
```

Output:
```
✓ src/data/generated/overview.json
✓ src/data/generated/map.json
✓ src/data/generated/provinceDetail.json
✓ src/data/generated/profileCluster.json
✓ src/data/generated/modelEval.json
✓ src/data/generated/clusters.json

Selesai! 38 provinsi, 65 komoditas, 4 cluster (K=4).
```

### 4. Lihat Hasil

```bash
npm run dev
```

Buka `http://localhost:5173` untuk melihat dashboard.

## Catatan Penting

### Format Angka
- **Desimal**: Gunakan titik (`.`) atau koma (`,`), keduanya diterima
- **Delimiter**: Koma (`,`) atau titik koma (`;`), otomatis terdeteksi
- **Contoh valid**: `1615200.0`, `1615200,0`, `1.615.200,00`

### Nama Provinsi
Pastikan nama provinsi sesuai dengan GeoJSON peta Indonesia. Alias yang sudah ditangani:
| Nama CSV | Nama di Peta |
|----------|--------------|
| DKI Jakarta | Jakarta Raya |
| DI Yogyakarta | Yogyakarta |
| Kepulauan Bangka Belitung | Bangka-Belitung |
| Papua Barat | Irian Jaya Barat |

Jika nama berbeda, tambahkan di `GEO_ALIAS` di `tools/import-data.mjs`.

### Data yang Dihitung Otomatis
Beberapa metrik dihitung otomatis dari CSV (tidak perlu diisi manual):
- Rata-rata produksi per cluster
- Persentase kontribusi nasional per cluster
- Jumlah provinsi per cluster
- K terbaik (berdasarkan silhouette score tertinggi)
- Radar chart data (median komoditas per cluster)

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| `File tidak ditemukan` | Pastikan nama file dan folder sesuai (case-sensitive) |
| `Property 'X' does not exist` | Cek apakah kolom CSV sesuai format |
| Peta tidak menampilkan provinsi | Cek nama provinsi sesuai GeoJSON |
| Angka tidak muncul | Pastikan format angka valid (gunakan `.` untuk desimal) |

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4, Recharts
- **Build Tool**: Vite 8
- **Data Processing**: Node.js script (CSV → JSON)

## LOGO

Nanti frontend yang buat masi proses

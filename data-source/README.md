# Sumber Data (CSV)

Letakkan file CSV di folder ini, lalu jalankan:

```
npm run import-data
```

Semua data dashboard akan dibangun ulang dari CSV → `src/data/generated/*.json`.

Aturan umum:
- Delimiter koma **atau** titik-koma (deteksi otomatis — aman untuk "CSV Windows/Excel Indonesia").
- Desimal boleh `5,3` atau `5.3`; sel kosong = data belum tersedia.
- Baris dengan `#` di awal diabaikan; baris kosong diabaikan.

## Daftar file

| File | Wajib? | Kolom | Dipakai untuk |
|---|---|---|---|
| `provinsi.csv` | ✅ wajib | `provinsi,cluster[,indeks][,produksi_juta_ton][,luas_juta_ha][,produktivitas_ton_ha][,nama_peta]` | Peta kluster, profil kluster, detail provinsi (daftar & dropdown) |
| `tren_produksi.csv` | opsional | `tahun,nilai` | Grafik tren produksi (Overview) |
| `komoditas.csv` | opsional | `komoditas,produksi_juta_ton,persentase` | Top komoditas (Overview), Top Komoditas & bar Detail Provinsi, komoditas dominan per cluster |
| `produksi_periode.csv` | opsional | `granularitas,label,nilai` | Dropdown Total Produksi (Per Tahun / Per Bulan / Per Minggu) di Detail Provinsi |
| `evaluasi_model.csv` | opsional | `k,inertia,silhouette,dbi,calinski_harabasz` | Halaman Evaluasi Model (K terbaik dihitung otomatis dari silhouette tertinggi) |

## Catatan kolom `provinsi.csv`

- `cluster` wajib diisi `1`, `2`, atau `3`.
- `indeks` (0–100) dipakai untuk persentase bar "Daftar Provinsi"; default 50 jika kosong.
- `nama_peta` hanya perlu diisi bila nama di peta/GeoJSON berbeda dengan nama tampilan,
  contoh: `DKI Jakarta → Jakarta Raya`, `NTB → Nusa Tenggara Barat`, `Papua Barat → Irian Jaya Barat`.
- Angka produksi/luas/produktivitas boleh diisi sebagian provinsi saja — provinsi tanpa angka tampil samar di peta.

## Tahun data

Saat ini dashboard menampilkan data per tahun lewat dropdown "Pilih Tahun Data" (2024/2025/2026).
Jika CSV kamu punya kolom `tahun`, cukup buat beberapa set file (mis. `provinsi-2024.csv`, `provinsi-2025.csv`)
dan beri tahu saya — pipeline bisa diperluas untuk menggabungkannya per tahun.

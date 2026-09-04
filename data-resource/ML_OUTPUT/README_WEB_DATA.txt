
============================================================
WEB DATA MAPPING
CAPSTONE ODYSSEY
============================================================

Folder WEB_OUTPUT berisi dataset yang telah disiapkan
mengikuti struktur Entity Relationship Diagram (ERD)
aplikasi.

Tujuannya agar tim backend tidak perlu melakukan
transformasi ulang terhadap MASTER Dataset maupun
hasil Machine Learning.

============================================================
CSV TO ERD MAPPING
============================================================


1. commodities.csv
------------------------------------------------------------

ERD TABLE:
COMMODITIES

SUMBER DATA:
Data_Dictionary.csv

FIELD:
- slug
- display_name
- category
- reference_year
- unit
- has_luas_panen_produktivitas

KETERANGAN:
Berisi master data komoditas yang digunakan pada sistem.

reference_year menunjukkan tahun data yang digunakan
untuk masing-masing komoditas.

Mayoritas komoditas menggunakan tahun 2025.
Jagung menggunakan tahun 2024.

Satuan produksi:
ton


============================================================


2. clusters.csv
------------------------------------------------------------

ERD TABLE:
CLUSTERS

SUMBER DATA:
Ringkasan_Cluster.csv

FIELD:
- cluster_number
- name
- jumlah_provinsi
- karakteristik

KETERANGAN:
Berisi informasi empat cluster hasil akhir K-Means.

cluster_number terdiri dari:
0, 1, 2, dan 3.

Nomor cluster hanya merupakan ID hasil algoritma
dan bukan ranking.


============================================================


3. provinces.csv
------------------------------------------------------------

ERD TABLE:
PROVINCES

SUMBER DATA:
Hasil_Clustering_Provinsi.csv

FIELD:
- name
- cluster_number

KETERANGAN:
Berisi daftar provinsi dan cluster masing-masing provinsi.

Pada proses import database:

cluster_number
    ↓
dicocokkan dengan CLUSTERS
    ↓
disimpan sebagai cluster_id

UUID dapat dibuat oleh backend pada saat import.


============================================================


4. cluster_commodity_profiles.csv
------------------------------------------------------------

ERD TABLE:
CLUSTER_COMMODITY_PROFILES

SUMBER DATA:
Profil_Cluster.csv

FIELD:
- cluster_number
- commodity_slug
- median_produksi
- mean_z_score

KETERANGAN:

median_produksi
Median produksi suatu komoditas dari seluruh provinsi
yang termasuk dalam cluster yang sama.

mean_z_score
Nilai rata-rata hasil standardisasi fitur komoditas
pada cluster.

mean_z_score bukan nilai produksi dalam ton.

Nilai positif:
komoditas relatif berada di atas rata-rata.

Nilai negatif:
komoditas relatif berada di bawah rata-rata.


============================================================


5. province_commodity_productions.csv
------------------------------------------------------------

ERD TABLE:
PROVINCE_COMMODITY_PRODUCTIONS

SUMBER DATA:
- Profil_Provinsi.csv
- MASTER Dataset

FIELD:
- province
- commodity_slug
- produksi
- luas_panen
- produktivitas
- median_cluster
- selisih_dengan_median_cluster

KETERANGAN:

produksi
Nilai produksi komoditas pada suatu provinsi.

luas_panen
Luas panen komoditas jika tersedia.

produktivitas
Nilai produktivitas komoditas jika tersedia.

median_cluster
Median produksi komoditas pada cluster tempat
provinsi tersebut berada.

selisih_dengan_median_cluster
Produksi provinsi dikurangi median cluster.

Satuan:
- produksi      = ton
- luas_panen    = ha
- produktivitas = ku/ha

CATATAN:
Tidak semua komoditas memiliki data luas panen
dan produktivitas.

Jika data tidak tersedia:
- luas_panen = NULL
- produktivitas = NULL

NULL tidak boleh diganti dengan 0 karena
0 memiliki arti data tersedia tetapi nilainya nol.


============================================================


6. province_padi_monthly_productions.csv
------------------------------------------------------------

ERD TABLE:
PROVINCE_PADI_MONTHLY_PRODUCTIONS

SUMBER DATA:
MASTER Dataset / data padi bulanan hasil Data Engineering

FIELD:
- province
- month
- year
- luas_panen
- produksi

GRANULARITAS:
1 baris = 1 provinsi x 1 bulan x 1 tahun.

SATUAN:
- luas_panen = ha
- produksi   = ton

KETERANGAN:
Digunakan untuk menampilkan perkembangan produksi
dan luas panen padi bulanan pada halaman Detail Provinsi.

Data ini merupakan informasi pendukung dashboard
dan bukan fitur tambahan pada proses clustering.


============================================================


7. kmeans_evaluations.csv
------------------------------------------------------------

ERD TABLE:
KMEANS_EVALUATIONS

SUMBER DATA:
Evaluasi_KMeans.csv

FIELD:
- k
- inertia
- silhouette_score
- davies_bouldin_index
- smallest_cluster
- largest_cluster

KETERANGAN:
Berisi hasil evaluasi K-Means untuk K=2 sampai K=8.

Digunakan untuk:
- Elbow Method
- Silhouette Score
- Davies-Bouldin Index
- distribusi ukuran cluster
- halaman Model Evaluation


============================================================


8. pca_variances.csv
------------------------------------------------------------

ERD TABLE:
PCA_VARIANCES

SUMBER DATA:
PCA_Variance.csv

FIELD:
- component
- explained_variance
- cumulative_variance

KETERANGAN:
Berisi hasil Principal Component Analysis.

55 fitur produksi direduksi menjadi 10 komponen
dengan mempertahankan sekitar 90.05% variasi data.

CATATAN:
90.05% bukan akurasi model.


============================================================
SUMMARY MAPPING
============================================================

commodities.csv
    → COMMODITIES

clusters.csv
    → CLUSTERS

provinces.csv
    → PROVINCES

cluster_commodity_profiles.csv
    → CLUSTER_COMMODITY_PROFILES

province_commodity_productions.csv
    → PROVINCE_COMMODITY_PRODUCTIONS

province_padi_monthly_productions.csv
    → PROVINCE_PADI_MONTHLY_PRODUCTIONS

kmeans_evaluations.csv
    → KMEANS_EVALUATIONS

pca_variances.csv
    → PCA_VARIANCES


============================================================
IMPORT NOTES
============================================================

1. WEB_OUTPUT telah disiapkan mengikuti struktur ERD.

2. Backend tidak perlu melakukan preprocessing
   Machine Learning kembali.

3. UUID primary key tidak disediakan pada CSV.

4. Foreign key dapat diselesaikan menggunakan:
   - cluster_number
   - province
   - commodity_slug

5. UUID dan foreign key final dapat dibuat pada proses
   import/seeding database.

6. luas_panen dan produktivitas harus nullable.

7. Produktivitas menggunakan satuan ku/ha.

8. median_cluster tetap disediakan sesuai struktur ERD.

9. Nilai NULL berarti data tidak tersedia dan berbeda
   dengan nilai 0.

============================================================
END OF MAPPING
============================================================

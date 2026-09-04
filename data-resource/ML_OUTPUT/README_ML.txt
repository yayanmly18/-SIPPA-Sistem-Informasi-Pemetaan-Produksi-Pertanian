
============================================================
ML OUTPUT DOCUMENTATION
CAPSTONE ODYSSEY
============================================================

OVERVIEW
--------

Folder ML_OUTPUT berisi hasil akhir proses Machine Learning
untuk pengelompokan provinsi Indonesia berdasarkan profil
produksi multi-komoditas pertanian.

Output pada folder ini merupakan sumber analisis Machine
Learning dan akan digunakan kembali pada tahap Web Data
Preparation untuk membentuk dataset yang sesuai dengan ERD
database aplikasi.

Model:
K-Means Clustering

Jumlah provinsi:
38

Jumlah fitur produksi:
55

Final cluster:
K = 4

PCA:
55 fitur direduksi menjadi 10 principal components
dengan sekitar 90.05% variance retained.

Final Evaluation:
Silhouette Score     : 0.2731
Davies-Bouldin Index : 1.0836
Inertia              : 622.8144


============================================================
ML OUTPUT FILES
============================================================

1. Hasil_Clustering_Provinsi.csv

Satu baris merepresentasikan satu provinsi.

Berisi:
- provinsi
- 55 fitur produksi
- cluster
- cluster_name

Digunakan sebagai sumber utama hasil clustering
pada level provinsi.


2. Ringkasan_Cluster.csv

Satu baris merepresentasikan satu cluster.

Berisi:
- cluster
- cluster_name
- jumlah_provinsi
- daftar provinsi
- karakteristik

Digunakan sebagai sumber data tabel CLUSTERS.


3. Profil_Cluster.csv

Satu baris merepresentasikan satu kombinasi:
cluster x komoditas.

Berisi:
- cluster
- cluster_name
- komoditas
- tahun
- median_produksi
- mean_z_score

Digunakan sebagai sumber data untuk
CLUSTER_COMMODITY_PROFILES.


4. Profil_Provinsi.csv

Satu baris merepresentasikan satu kombinasi:
provinsi x komoditas.

Berisi:
- provinsi
- cluster
- cluster_name
- komoditas
- tahun
- produksi
- median_cluster
- selisih_dengan_median_cluster

File ini merupakan hasil profil provinsi dari ML.

Pada tahap Web Data Preparation, file ini akan digabungkan
dengan MASTER Dataset untuk menambahkan:
- luas_panen
- produktivitas

sehingga sesuai dengan struktur
PROVINCE_COMMODITY_PRODUCTIONS pada ERD.


5. Evaluasi_KMeans.csv

Berisi evaluasi K=2 sampai K=8:
- inertia
- silhouette_score
- davies_bouldin_index
- smallest_cluster
- largest_cluster

Digunakan sebagai sumber data tabel
KMEANS_EVALUATIONS.


6. PCA_Variance.csv

Berisi:
- component
- explained_variance
- cumulative_variance

Digunakan sebagai sumber data tabel
PCA_VARIANCES.


7. Data_Dictionary.csv

Berisi dokumentasi field hasil Machine Learning:
- field_name
- display_name
- category
- year
- unit
- description

Digunakan untuk membantu proses transformasi data
ke struktur database.


============================================================
DATA FLOW
============================================================

MASTER Dataset
        +
ML_OUTPUT
        ↓
Web Data Preparation
        ↓
WEB_OUTPUT
        ↓
Import Database
        ↓
Backend API
        ↓
Frontend Dashboard


============================================================
IMPORTANT NOTES
============================================================

1. ML_OUTPUT tidak perlu diolah ulang oleh backend.

2. Dataset yang benar-benar disiapkan untuk proses import
   database akan tersedia pada folder WEB_OUTPUT.

3. WEB_OUTPUT akan mengikuti struktur ERD aplikasi.

4. Foreign key UUID tidak dibuat pada tahap Data Science.
   Dataset menggunakan natural key seperti:
   - province name
   - commodity slug
   - cluster number

   UUID akan dibuat dan direlasikan pada saat proses
   import database oleh backend.

5. Produksi menggunakan satuan ton.

6. Luas panen menggunakan satuan hektar (ha).

7. Produktivitas menggunakan satuan kuintal per hektar
   (ku/ha).

8. Jika luas panen atau produktivitas tidak tersedia,
   nilai akan disimpan sebagai NULL dan bukan 0.

9. Cluster 0, 1, 2, dan 3 hanya merupakan ID cluster
   dan bukan ranking.

10. cluster_name merupakan hasil interpretasi profiling,
    bukan nama yang dibuat otomatis oleh K-Means.


============================================================
END OF ML DOCUMENTATION
============================================================

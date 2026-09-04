import fs from "node:fs";
for (const f of ["ML_OUTPUT/Profil_Provinsi.csv","ML_OUTPUT/Data_Dictionary.csv","ML_OUTPUT/PCA_Variance.csv","MASTER/Ringkasan_Cluster.csv"]) {
  const t = fs.readFileSync("data-resource/" + f, "utf8");
  console.log("=== " + f + " (rows: " + t.split(/\r?\n/).filter(l => l.trim()).length + ")");
  console.log(t.split(/\r?\n/).slice(0, 4).join("\n"));
  console.log();
}
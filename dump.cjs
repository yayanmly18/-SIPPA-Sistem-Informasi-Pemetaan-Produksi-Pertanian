const fs = require("fs");
console.log(require("fs").readFileSync("src/components/Sidebar.tsx", "utf8").split("\n").slice(30, 50).map((l, i) => (31 + i) + ": " + l).join("\n"));
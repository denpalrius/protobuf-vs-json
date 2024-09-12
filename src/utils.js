const fs = require("fs");

const writeFile = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

const getFileSize = (filePath) => {
  const stats = fs.statSync(filePath);
  return stats.size;
};

const printStatsTable = (stats) => {
  console.table(
    stats.map((stat) => ({
      File: stat.filePath,
      Size: stat.size,
      Unit: 'bytes',
    }))
  );
};

const compareSizeEfficiency = (jsonStat, binaryStat) => {
  const efficiencyPercentage = (jsonStat.size / binaryStat.size - 1) * 100;
  console.log(
    `Binary file is ${efficiencyPercentage.toFixed(2)}% smaller than JSON file.`
  );
};

module.exports = {
  writeFile,
  getFileSize,
  printStatsTable,
  compareSizeEfficiency,
};

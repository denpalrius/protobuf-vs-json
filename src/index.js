const jsonStats = require('./jsonData');
const protobufStats = require('./protobufData');
const { printStatsTable, compareSizeEfficiency } = require('./utils');

printStatsTable([jsonStats, protobufStats]);

compareSizeEfficiency(jsonStats, protobufStats);



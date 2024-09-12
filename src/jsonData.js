const { writeFile, getFileSize } = require('./utils');

const planetData = [
  { name: "Mercury", order: 1, hasLife: false },
  { name: "Venus", order: 2, hasLife: false },
  { name: "Earth", order: 3, hasLife: true },
  { name: "Mars", order: 4, hasLife: false },
  { name: "Jupiter", order: 5, hasLife: false },
  { name: "Saturn", order: 6, hasLife: false },
  { name: "Uranus", order: 7, hasLife: false },
  { name: "Neptune", order: 8, hasLife: false },
  { name: "Pluto", order: 9, hasLife: false },
  { name: "Ceres", order: 10, hasLife: false },
  { name: "Eris", order: 11, hasLife: false },
];

const createJsonPlanets = () => {
  const planets = planetData.map((planet, index) => ({
    id: index + 1,
    ...planet,
  }));
  return JSON.stringify(planets, null, 2);
};

const jsonFilePath = "./data/planets.json";
const jsonPlanets = createJsonPlanets();

writeFile(jsonFilePath, jsonPlanets);

const jsonSize = getFileSize(jsonFilePath);

module.exports = { filePath: jsonFilePath, size: jsonSize };

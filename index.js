const fs = require("fs");

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

const planets = [];

planetData.forEach((planet, index) => {
  planets.push({
    id: index + 1,
    ...planet,
  });
});

const planetsStr = JSON.stringify(planets);

console.log(planetsStr);

fs.writeFileSync("./data/planets.json", planetsStr);
console.log("Planets data written to file");


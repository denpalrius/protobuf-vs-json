const fs = require("fs");
const Schema = require("../schema/planets_pb");
const { writeFile, getFileSize } = require("./utils");

// Utility function to create a new Planet
const createPlanet = (id, name, hasLife, orderFromTheSun) => {
  const planet = new Schema.Planet();
  planet.setId(id);
  planet.setName(name);
  planet.setOrderfromthesun(orderFromTheSun);
  planet.setHaslife(hasLife);
  return planet;
};

// Create Planet instances
const createProtobufPlanets = () => {
  const planets = new Schema.Planets();
  const planetInfo = [
    { id: 1, name: "Mercury", hasLife: false, orderFromTheSun: 1 },
    { id: 2, name: "Venus", hasLife: false, orderFromTheSun: 2 },
    { id: 3, name: "Earth", hasLife: true, orderFromTheSun: 3 },
    { id: 4, name: "Mars", hasLife: false, orderFromTheSun: 4 },
    { id: 5, name: "Jupiter", hasLife: false, orderFromTheSun: 5 },
    { id: 6, name: "Saturn", hasLife: false, orderFromTheSun: 6 },
    { id: 7, name: "Uranus", hasLife: false, orderFromTheSun: 7 },
    { id: 8, name: "Neptune", hasLife: false, orderFromTheSun: 8 },
    { id: 9, name: "Pluto", hasLife: false, orderFromTheSun: 9 },
    { id: 10, name: "Ceres", hasLife: false, orderFromTheSun: 10 },
    { id: 11, name: "Eris", hasLife: false, orderFromTheSun: 11 },
  ];

  planetInfo.forEach(({ id, name, hasLife, orderFromTheSun }) => {
    planets.addPlanets(createPlanet(id, name, hasLife, orderFromTheSun));
  });

  return planets.serializeBinary();
};

const protobufFilePath = "./data/planets.binary";
const protobufPlanetsBinary = createProtobufPlanets();

console.log("Deserialized binary data: ", Schema.Planets.deserializeBinary(protobufPlanetsBinary).toString());

writeFile(protobufFilePath, protobufPlanetsBinary);

const protobufSize = getFileSize(protobufFilePath);

module.exports = { filePath: protobufFilePath, size: protobufSize };

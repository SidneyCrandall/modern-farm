import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalogHarvest } from "./catalog.js";
import { addPlant, usePlants } from "./field.js";

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const asparagusSeed = createAsparagus()

const seedObj = asparagusSeed;
addPlant(seedObj);

const results = usePlants();
console.log(results);

plantSeeds(yearlyPlan);

const newPlantArray = usePlants();
console.log(newPlantArray)

const harvestedPlantArray = harvestPlants(newPlantArray);
console.log(harvestedPlantArray);

catalogHarvest(harvestedPlantArray);
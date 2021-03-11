import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js";
import { createSunflower } from "./seeds/sunflower.js";


export const plantSeeds = (plan) => {
    plan.forEach((row) => {
        row.forEach((plant) => {
            if (plant === "Wheat") {
                const wheatSeed = createWheat();
                addPlant(wheatSeed);
            } else if (plant === "Asparagus") {
                const asaparagusSeed = createAsparagus();
                addPlant(asaparagusSeed);
            } else if (plant === "Potato") {
                const potatoSeed = createPotato();
                addPlant(potatoSeed);
            } else if (plant === "Soybean") {
                const soybeanSeed = createSoybean();
                addPlant(soybeanSeed);
            } else if (plant === "Corn") {
                const cornSeed = createCorn();
                addPlant(cornSeed);
            } else if (plant === "Sunflower") {
                const sunflowerSeed = createSunflower();
                addPlant(sunflowerSeed);
            }
        });
    });
};
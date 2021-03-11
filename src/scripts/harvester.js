export const harvestPlants = (plantedPlants) => {
    let harvestplantArray = [];

    plantedPlants.forEach((plant) => {
        let harvestOutput = plant.output;
        if (plant.type === "Corn") {
            let halfCorn = harvestOutput / 2;
            for (let i = 0; i < halfCorn; i++) {
                harvestplantArray.push(plant);
            }
        } else {
            for (let i = 0; i < harvestOutput; i++) {
                harvestplantArray.push(plant);
            }
        }
    })
    return harvestplantArray;
};
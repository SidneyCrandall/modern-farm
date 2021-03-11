const field = [];

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject) === true) {
        const cornArray = seedObject;
        cornArray.forEach((singleSeed) => {
            field.push(singleSeed);
        });
    } else {
        field.push(seedObject);
    }
};


export const usePlants = () => {
    return field.slice();
};
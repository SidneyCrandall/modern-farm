const plantCollection = [{
        type: Potato,
        height: "32",
        output: "2",
    },
    {
        type: Corn,
        height: "180",
        output: "4",
    },
    {
        type: Soybean,
        height: "20",
        output: "4",
    },
    {
        type: Sunflower,
        height: "380",
        output: "3",
    },
    {
        type: Asparagus,
        height: "24",
        output: "4",
    },
    {
        type: Wheat,
        height: "230",
        output: "6",
    },
];

export const getPlant = () => {
    return plantCollection;
};
export const catalogHarvest = (harvestplantArray) => {
    const contentTarget = document.querySelector("main");
    for (const harvestBounty of harvestplantArray) {
        contentTarget.innerHTML += `<div class="container">${harvestBounty.type}</div> `
    }
};
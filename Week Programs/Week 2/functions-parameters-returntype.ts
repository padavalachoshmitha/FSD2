// Function with Parameters and Explicit Return Type

function calculateFuel(distance: number, fuelPerKm: number): number {
    return distance * fuelPerKm;
}

let requiredFuel = calculateFuel(120, 3);

console.log("Total Fuel Required:", totalFuel, "litres");

// Function with Default Parameters

function launchMission(missionName: string, planet: string = "Mars"): string {
    return `Mission ${missionName} is launching to ${planet}.`;
}

console.log(launchMission("Explorer-1"));
console.log(launchMission("Galaxy-X", "Jupiter"));

//// Function with Optional Parameters

function astronautProfile(name: string, specialization?: string): string {
    if (specialization) {
        return `${name} is a ${specialization} astronaut.`;
    }
    return `${name} is an astronaut.`;
}

console.log(astronautProfile("eun woo"));
console.log(astronautProfile("si eun", "Pilot"));

//// Function with Rest Parameters

function collectSamples(...samples: string[]): void {
    console.log("Collected Samples:");
    for (let sample of samples) {
        console.log(sample);
    }
}

collectSamples("Moon Rock", "Ice Crystal", "Meteor Dust", "Solar Soil");

//// Testing the Experiment

console.log("Fuel Needed:", calculateFuel(150, 4));
console.log(launchMission("Nova"));
console.log(launchMission("Star", "Saturn"));
console.log(astronautProfile("Riya"));
console.log(astronautProfile("Arjun", "Engineer"));
collectSamples("Rock", "Gas", "Ice");
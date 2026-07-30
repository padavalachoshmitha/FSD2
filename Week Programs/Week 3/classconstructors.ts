// Class Implementation with Constructors

class SpaceRover {
    // 1. Properties
    roverName: string;
    mission: string;
    batteryLevel: number;

    // 2. Constructor Overloading
    constructor(roverName: string);
    constructor(roverName: string, mission: string, batteryLevel: number);

    constructor(roverName: string, mission?: string, batteryLevel?: number) {
        this.roverName = roverName;
        this.mission = mission || "Surface Exploration";
        this.batteryLevel = batteryLevel || 100;
    }

    // 3. Methods
    displayDetails(): void {
        console.log("Rover Name:", this.roverName);
        console.log("Mission:", this.mission);
        console.log("Battery Level:", this.batteryLevel + "%");
    }

    rechargeBattery(units: number): void {
        this.batteryLevel += units;
        console.log(`${this.roverName} recharged by ${units}%`);
    }
}


// 4. Using Properties and Methods Post Construction

// Object using first constructor
let firstRover = new SpaceRover("Explorer-X");

// Object using overloaded constructor
let secondRover = new SpaceRover("Galaxy-7", "Rock Collection", 70);

console.log("Rover 1");
firstRover.displayDetails();
firstRover.rechargeBattery(15);
console.log("Updated Battery:", firstRover.batteryLevel + "%");

console.log("\nRover 2");
secondRover.displayDetails();
secondRover.rechargeBattery(20);
console.log("Updated Battery:", secondRover.batteryLevel + "%");

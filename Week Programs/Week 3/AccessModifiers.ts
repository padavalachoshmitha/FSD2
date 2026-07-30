// Parent Class
class SmartDoor {

    // Public property
    public mainDoorName: string = "Main Entrance";

    // Private property
    private password: number = 2026;

    // Protected property
    protected isLocked: boolean = true;

    // Public method
    public unlockDoor(enteredPassword: number): void {

        if (this.checkPassword(enteredPassword)) {
            this.isLocked = false;
            console.log("Door Unlocked Successfully");
        } else {
            console.log("Wrong Password");
        }
    }

    // Private method
    private checkPassword(enteredPassword: number): boolean {
        return this.password === enteredPassword;
    }
}

// Child Class
class SecurityDoor extends SmartDoor {

    public mainDoorStatus(): void {

        if (this.isLocked) {
            console.log("Door Status: Locked");
        } else {
            console.log("Door Status: Unlocked");
        }
    }
}

// Main Program
const mainDoor = new SmartDoor();

// Accessing public property
console.log("Door Name:", mainDoor.mainDoorName);

// Public method
mainDoor.unlockDoor(2026);

// Wrong password
mainDoor.unlockDoor(1234);

// Child object
const securityDoor = new SecurityDoor();
securityDoor.mainDoorStatus();
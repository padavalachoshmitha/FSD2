namespace Bank {

    // Private variable
    const minimumBalance = 500;

    // Exported function
    export function isValidBalance(balance: number): boolean {
        return balance >= minimumBalance;
    }

    export function calculateInterest(
        amount: number,
        rate: number
    ): number {

        return (amount * rate) / 100;
    }

    // Nested namespace
    export namespace Account {

        export function getAccountType(balance: number): string {

            if (balance >= 100000)
                return "Premium";

            if (balance >= 50000)
                return "Gold";

            return "Regular";
        }

    }
}

// ---------- Using Namespace ----------

let balance = 75000;

console.log(Bank.isValidBalance(balance));

console.log(Bank.calculateInterest(75000, 5));

console.log(Bank.Account.getAccountType(balance));
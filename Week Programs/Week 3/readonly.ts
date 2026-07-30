class Company {
    public static readonly companyName: string = "Tech Solutions";
    public static employeeCount: number;
    constructor(count: number) {
        Company.employeeCount = count;
    }
    public static display(): void {
        console.log(`Company: ${Company.companyName}`);
        console.log(`Employees: ${Company.employeeCount}`);
    }
}
const company = new Company(250);
Company.display();
const employee = {
  id: 101,
  name: "Ravi Kumar",
  age: 25,
  department: "Engineering",
  designation: "Software Developer",
  salary: 40000,
  skills: ["JavaScript", "React", "Node.js"],
  address: {
    city: "Vijayawada",
    state: "Andhra Pradesh"
  },


  displayInfo() {
    console.log("------ Employee Details ------");
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Department:", this.department);
    console.log("Designation:", this.designation);
    console.log("Monthly Salary: ₹" + this.salary);
    console.log("Skills:", this.skills.join(", "));
    console.log("City:", this.address.city + ", " + this.address.state);
  },


  getAnnualSalary() {
    return this.salary * 12;
  },


  giveRaise(percent) {
    this.salary = this.salary + (this.salary * percent) / 100;
    console.log(`${this.name} got a ${percent}% raise. New salary: ₹${this.salary}`);
  },

  changeDepartment(newDepartment) {
    this.department = newDepartment;
    console.log(`${this.name} moved to ${newDepartment} department`);
  },

  addSkill(skill) {
    this.skills.push(skill);
    console.log(`Skill added: ${skill}`);
  }
};

employee.displayInfo();
console.log("Annual Salary: ₹" + employee.getAnnualSalary());

employee.giveRaise(10);
employee.changeDepartment("Product");
employee.addSkill("MongoDB");

employee.displayInfo();


class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`${this.id} | ${this.name} | ${this.department} | ₹${this.salary}`);
  }

  getAnnualSalary() {
    return this.salary * 12;
  }
}

const employees = [
  new Employee(101, "Ravi", "Engineering", 40000),
  new Employee(102, "Sita", "HR", 35000),
  new Employee(103, "Kiran", "Engineering", 50000)
];

console.log("------ All Employees ------");
employees.forEach(emp => emp.displayInfo());


const engineers = employees.filter(emp => emp.department === "Engineering");
console.log("Engineering employees:", engineers.map(emp => emp.name));

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total monthly salary: ₹" + totalSalary);

const annualList = employees.map(emp => ({
  name: emp.name,
  annualSalary: emp.getAnnualSalary()
}));
console.table(annualList);
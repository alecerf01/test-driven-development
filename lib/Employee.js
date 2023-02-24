const { default: inquirer } = require("inquirer");

// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    
    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    // getRole() {
    //     Employee
    // }

}

const emp1 = new Employee("Alexis-Charles Lecerf", 1024598, "alexis-charles.lecerf@ee.co.uk");
emp1.getName();
emp1.getId();
emp1.getEmail();


module.exports = Employee
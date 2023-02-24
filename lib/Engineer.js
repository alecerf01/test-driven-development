// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
    }
    
    getGithub() {
        console.log(this.github);
    }

    // getRole() {
    //     Engineer;
    // }
}

const eng1 = new Engineer("Matt Lecerf", 10023345, "mattlecerf@gmail.com", "alecerf0131")

eng1.getName();
eng1.getId();
eng1.getEmail();
eng1.getGithub()

module.exports = Engineer;
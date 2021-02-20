class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} works as a ${this.position}.`;
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        } else {
            throw new Error(`You can only add an instance of Employee.  Argument is not an employee: ${employee}`);
        }
    }

    describe() {
        return `${this.name} has ${this.employees.length} employees.`;
    }
}

class Menu {
    constructor() {
        this.departments = [];
        this.selectedDepartment = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createDepartment();
                    break;
                case '2':
                    this.viewDepartment();
                    break;
                case '3':
                    this.deleteDepartment();
                    break;
                case '4':
                    this.displayDepartments();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!')
    }

    showMainMenuOptions() {
        return prompt(`
          0) exit
          1) create new department
          2) view department employees
          3) delete department
          4) display all departments
        `);
    }

    showTeamMenuOptions(departmentInfo) {
        return prompt(`
          0) back
          1) create employee
          2) delete employee
          -----------------------
          ${departmentInfo}
          `)
    }

    displayDepartments() {
        let departmentString = '';
        for (let i = 0; i < this.departments.length; i++) {
            departmentString += i + ') ' + this.departments[i].name + '\n';
        }
        alert(departmentString);
    }

    createDepartment() {
        let name = prompt('Enter name for new department:');
        this.departments.push(new Department(name));
    }

    viewDepartment() {
        let index = prompt('Enter the index of the department you wish to view:');
        if (index > -1 && index < this.departments.length) {
            this.selectedDepartment = this.departments[index];
            let description = 'Department Name: ' + this.selectedDepartment.name + '\n';

            for (let i = 0; i < this.selectedDepartment.employees.length; i++) {
                description += i + ') ' + this.selectedDepartment.employees[i].name
                    + ' - ' + this.selectedDepartment.employees[i].position + '\n'
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createEmployee();
                    break;
                case '2':
                    this.deleteEmployee();

            }
        }
    }

    deleteDepartment() {
        let index = prompt('Enter the index of the department you wish to delete:');
        if (index > -1 && index < this.departments.length) {
            this.departments.splice(index, 1);
        }
    }

    createEmployee() {
        let name = prompt('Enter name for new Employee:');
        let position = prompt('Enter position for new Employee:');
        this.selectedDepartment.employees.push(new Employee(name, position));
    }

    deleteEmployee() {
        let index = prompt('Enter the index of the employee you wish to delete;');
        if (index > -1 && index < this.selectedDepartment.employees.length) {
            this.selectedDepartment.employees.splice(index, 1);
        }
    }
}

let menu = new Menu()
menu.start()


// class Vehicle {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this.maintenance = null;
//     }

//     info() {
//         return `I drive this ${this.make} ${this.model}.`
//             + (this.maintenance === null ? "" : ` The last oil change was on ${this.maintainedOn}.`);
//     }

//     maintained() {
//         this.maintainedOn = new Date();
//     }
// }


// class VehicleType extends Vehicle {
//     constructor(type, brand) {
//         super(type);
//         this.brand = brand;
//     }

//     moreInfo() {
//         return super.info() + " I also have " + this.type + this.breed + ".";
//     }
// }

// class VehicleMenu {
//     constructor() {
//         this.vehicle = [];
//         this.selectedvehicle = null;
//     }

//     start() {
//         let selection = this.showMainMenuOptions();
//         while (selection != 0) {
//             switch (selection) {
//                 case '1':
//                     this.enterVehicle();
//                     break;
//                 case '2':
//                     this.viewVehicles();
//                     break;
//                 case '3':
//                     this.deleteVehicles();
//                     break;
//                 case '4':
//                     this.displayVehicles();
//                     break;
//                 default:
//                     selection = 0;
//             }
//             selection = this.showMainMenuOptions();
//         }

//         alert('Goodbye!')
//     }

//     showMainMenuOptions() {
//         return prompt(`
//           0) exit
//           1) enter your main vehicle
//           2) view vehicles in your garage
//           3) delete vehicle
//           4) display all vehicles
//         `);
//     }

//     showTeamMenuOptions(vehicleInfo) {
//         return prompt(`
//           0) back
//           1) enter make
//           2) delete make
//           -----------------------
//           ${vehicleInfo}
//           `)
//     }
//     displayVehicles() {
//         let departmentString = '';
//         for (let i = 0; i < this.Vehicles.length; i++) {
//             vehicleString += i + ') ' + this.vehicles[i].name + '\n';
//         }
//         alert(vehicleString);
//     }

//     createVehicle() {
//         let name = prompt('Enter your new vehicle:');
//         this.vehicles.push(new Vehicle(name));
//     }

//     viewVehicles() {
//         let index = prompt('Enter the index of the vehicle you wish to view:');
//         if (index > -1 && index < this.vehicles.length) {
//             this.selectedVehicle = this.vehicles[index];
//             let description = 'Vehicle Name: ' + this.selectedVehicle.name + '\n';

//             for (let i = 0; i < this.selectedVehicle.vehicletypes.length; i++) {
//                 description += i + ') ' + this.selectedDepartment.employees[i].name
//                     + ' - ' + this.selectedDepartment.employees[i].position + '\n'
//             }

//             let selection = this.showTeamMenuOptions(description);
//             switch (selection) {
//                 case '1':
//                     this.createEmployee();
//                     break;
//                 case '2':
//                     this.deleteEmployee();

//             }
//         }
//     }

//     deleteDepartment() {
//         let index = prompt('Enter the index of the department you wish to delete:');
//         if (index > -1 && index < this.departments.length) {
//             this.departments.splice(index, 1);
//         }
//     }

//     createEmployee() {
//         let name = prompt('Enter name for new Employee:');
//         let position = prompt('Enter position for new Employee:');
//         this.selectedDepartment.employees.push(new Employee(name, position));
//     }

//     deleteEmployee() {
//         let index = prompt('Enter the index of the employee you wish to delete;');
//         if (index > -1 && index < this.selectedDepartment.employees.length) {
//             this.selectedDepartment.employees.splice(index, 1);
//         }
//     }
// }


// let vehicle = new VehicleMenu()
// vehicle.start()
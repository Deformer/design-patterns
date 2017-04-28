/**
 * Created by sbelan on 4/28/2017.
 */

class Developer {
  constructor(name, salary){
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class Manager {
  constructor(name, salary){
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class Organisation {
  constructor(){
    this.employees = [];
  }

  addEmployee(employee){
    this.employees.push(employee);
  }

  getNetSalaries(){
    let netSalary = 0;
    for(let i = 0;i < this.employees.length; i++){
      netSalary += this.employees[i].getSalary();
    }
    return netSalary;
  }
}

const sergey = new Developer('Sergey', 12000);
const alex = new Manager('Alex', 90000);

organisation = new Organisation();
organisation.addEmployee(sergey);
organisation.addEmployee(alex);

console.log(organisation.getNetSalaries());
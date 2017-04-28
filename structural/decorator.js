/**
 * Created by sbelan on 4/28/2017.
 */
class SimpleCoffee {
  getCost(){
    return 10;
  }
  getDescription(){
    return 'Simple coffee'
  }
}

class MilkCoffee{
  constructor(coffee){
    this.coffee = coffee;
  }

  getCost(){
    return this.coffee.getCost()+2;
  }

  getDescription(){
    return this.coffee.getDescription()+', milk';
  }
}

class VanillaCoffee {
  constructor(coffee){
    this.coffee = coffee;
  }

  getCost(){
    return this.coffee.getCost()+3;
  }

  getDescription(){
    return this.coffee.getDescription()+', vanilla';
  }
}

const someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

const someCoffeeMilk = new MilkCoffee(someCoffee);
console.log(someCoffeeMilk.getCost());
console.log(someCoffeeMilk.getDescription());

const someCoffeeVanilla = new VanillaCoffee(someCoffee);
console.log(someCoffeeVanilla.getCost());
console.log(someCoffeeVanilla.getDescription());
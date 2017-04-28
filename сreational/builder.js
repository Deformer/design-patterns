/**
 * Created by sbelan on 4/28/2017.
 */
class Burger {
  constructor(builder){
    this.cheese = !!builder.cheese;
    this.size = builder.size;
    this.pepperoni = !!builder.pepperoni;
    this.lettuce = !!builder.lettuce;
    this.tomato = !!builder.tomato;
  }
  show(){
    console.log(this);
  }
}

class BurgerBuilder {
  constructor(size){
    this.size = size;
    this.cheese = false;
    this.pepperoni = false;
    this.lettuce = false;
    this.tomato = false;
  }

  addPepperoni(){
    this.pepperoni = true;
    return this;
  }
  addLettuce(){
    this.lettuce = true;
    return this;
  }
  addCheese(){
    this.cheese = true;
    return this;
  }
  addTomato(){
    this.tomato = true;
    return this;
  }
  build(){
    return new Burger(this);
  }
}

const burger = (new BurgerBuilder(14))
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();
burger.show();
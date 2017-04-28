/**
 * Created by sbelan on 4/28/2017.
 */
class AfricanLion {
  roar(){
    console.log('roar')
  }
}

class AsianLion {
  roar(){
    console.log('roar')
  }
}

class Hunter {
  hunt(lion) {
    lion.roar();
  }
}

class WildDog {
  bark(){
    console.log('bark');
  }
}

class WildDogAdapter {
  constructor(dog){
    this.dog = dog;
  }
  roar(){
    this.dog.bark();
  }
}

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);
const africarLion = new AfricanLion();

const hunter = new Hunter();
hunter.hunt(africarLion);
hunter.hunt(wildDogAdapter);

/**
 * Created by sbelan on 4/28/2017.
 */

class WoodenDoor {
  constructor(w,h){
    this.width = w;
    this.height = h;
  }

  getWidth(){
    return this.width;
  }

  getHeight(){
    return this.height;
  }
}

const DoorFactory = (width, height) => {
  return new WoodenDoor(width, height);
};

const door = new WoodenDoor(100, 200);

console.log(door.getWidth(), door.getHeight());
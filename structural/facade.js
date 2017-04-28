/**
 * Created by sbelan on 4/28/2017.
 */
class Computer {
  getElectrickShock(){
    console.log('Ouch!');
  }
  makeSound(){
    console.log('Beep Beep');
  }
  showLoadingScreen(){
    console.log('Loading...');
  }
  bam(){
    console.log('ready to be used');
  }
  closeEverithing(){
    console.log('Bup bup bup buzzz');
  }
  sooth(){
    console.log('Zzzzz');
  }
  pullCurrent(){
    console.log('Haaash');
  }
}

class ComputerFacade {
  constructor(computer){
    this.computer = computer;
  }

  turnOn(){
    this.computer.getElectrickShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  turnOff(){
    this.computer.closeEverithing();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn();
computer.turnOff();
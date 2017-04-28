/**
 * Created by sbelan on 4/28/2017.
 */
class About {
  constructor(theme){
    this.theme = theme;
  }
  getContent(){
    return `About page in ${this.theme.getColor()}`;
  }
}

class Careers {
  constructor(theme){
    this.theme = theme;
  }
  getContent(){
    return `Careers page in ${this.theme.getColor()}`;
  }
}

class DarkTheme {
  getColor(){
    return 'Dark Black';
  }
}
class LightTheme {
  getColor(){
    return 'Off white';
  }
}
class AquaTheme {
  getColor(){
    return 'Light Blue';
  }
}

const darkTheme = new DarkTheme();
const aquaTheme = new AquaTheme();
const about = new About(darkTheme);
const careers = new Careers(aquaTheme);

console.log(about.getContent());
console.log(careers.getContent());

// I was able to successfully learn how to use getters and setters to update a class with new information. I also learned what a private variable is and how to generally signify it

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor (temp) {
    this._temp = 5/9* (temp - 32);
  }
  get temperature () {
    return this._temp;
  }
  set temperature (updatedTemp) {
    this._temp = updatedTemp;
  }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

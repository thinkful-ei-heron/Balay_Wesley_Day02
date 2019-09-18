'use strict';
/*function createMyObject(){
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      console.log('hello');
      return 'hello';
    }
  };
}*/
/*
function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang'
  return obj;
}
*/


/*
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return

    // full name
    fullName: function(){
      //return this.firstName + ' ' + this.lastName;
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}
*/


/*function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}
*/

/*
function makeStudentsReport(data) {
  let finalReport = [];
  let studentReports = data.forEach(student => {
    finalReport.push(`${student.name}: ${student.grade}`);
  });
  return finalReport;
}
*/

/*
function enrollInSummerSchool(students) {
  let newArray = [];
  for (let i = 0; i < students.length; i++) {
    students[i].status = 'In summer school';
    newArray.push(students[i]);
  }
  return newArray;
}
*/


/*
function findById(items, idNum) {
  // your code here
  let result = {};
  for ( let i = 0; i < items.length; i++){
    if(Object.values(items[i]).includes(idNum)){
      result = items[i];
    }
  }
  return result;
}
*/


/*function validateKeys(object, expectedKeys) {
  for (let i = 0; i < expectedKeys.length; i++) {
    if (Object.keys(object).includes(expectedKeys[i])) {
      if (Object.keys(object).length === expectedKeys.length) {
        return true;
      }
    } else {
      return false;
    }
  }
}
*/

/*const loaf = {
  flour: 300,
  water: 210,
  hydration(){
    return this.water / this.flour * 100;
  }
};

console.log(loaf.hydration());
*/

/* 
const test = {
  foo: 'foo1',
  bar: 'bar',
  fum: 'fum',
  spam: 'spam'
};


for ( const key in test){
  const value = test[key];
  console.log(key, value);
}
*/

/*
const object = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(object.meals[3]);
*/


/*
let objArr = [
  {
    name: 'wesley',
    jobTitle: 'student'
  },
  {
    name: 'balay',
    jobTitle: 'student',
    boss: 'wesley'
  }, 
  {
    name: 'opie',
    jobTitle: 'pet',
    boss: 'wesley'
    
  },
  {
    name: 'humphrey',
    jobTitle: 'pet',
    boss: 'wesley'
  }
];


for (let i = 0; i < objArr.length; i++) {
  //console.log(Object.values(objArr[i]));
  if (objArr[i].boss === undefined){
    console.log(`${objArr[i].jobTitle} ${objArr[i].name} doesn't report to anybody. `);
  } else{
    console.log(`${objArr[i].jobTitle} ${objArr[i].name} reports to ${objArr[i].boss}.`);
  }
  //console.log(`${objArr[i].jobTitle} ${objArr[i].name} reports to ${objArr[i].boss}.`);
}
*/

/*
function decode(str) {
  const code = {
    a: 2,
    b: 3,
    c: 4, 
    d: 5
  };
  let decodedStr = [];
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (code.hasOwnProperty(strArr[i][0])) {
      decodedStr.push(strArr[i][code[strArr[i][0]] - 1]);
    } else {
      decodedStr.push(' ');
    }
  }
  return decodedStr.join(' ');
}

//console.log(decode('craft block argon meter bells brown croon droop'));

function decodeWords(string) {
  return decode(string);
}

const sentence = 'craft block argon meter bells brown croon droop';
console.log(decodeWords(sentence));
*/

function createCharacter(name, nickname, race, origin, attack, defense){

  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight(char){
      let yourDamage = char.attack - this.defense;
      let oppDamage = this.attack - char.defense;

      if( yourDamage < 0 ){
        console.log(`Your opponent takes ${oppDamage} damage and you recieve 0 damage.`);
      }
      else if( oppDamage < 0 ){
        console.log(`Your opponent takes 0 damage and you recieve ${yourDamage} damage.`);
      } else { 
        console.log(`Your opponent takes ${oppDamage} damage and you recieve ${yourDamage} damage.`);
      }
      //console.log(`Your opponent takes ${oppDamage} damage and you recieve ${yourDamage} damage.`);
    }
  } ;
}
let char = [
createCharacter('Gandalf the White','gandalf', 'Wizard', 'Middle Earth', 10, 6), 
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
createCharacter('Arwin Unomill', 'Arwin', 'Half-Elf', 'Rivendell', 4, 9)
];


//console.log(char[4].evaluateFight(char[0]));
let found = char.find(function(item){
  if (item.nickname === 'aragorn'){
    return item;
  }
});
//console.log(found);

let hobbitArr = char.filter(item => {
  if (item.race === 'Hobbit') {
    return item;
  }
});
//console.log(hobbitArr);

let attackArr = char.filter(item => {
  if (item.attack > 5) {
    return item;
  }
});
//console.log(attackArr);

//create an array with the weapons corresponding to the names
let weaponsArr = ['a wizard staff', 'the Ring', 'the String and Barrow Blade', 'an Anduril', 'a Bow and Arrow', 'a Hadhafang'];

//create a function that will add a new describe method and new weapon property to a character object that is passed in
function addWeapon(char, weapon){
  //initialize our new describe method
  function weaponDescribe(){
    return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`;
  }
  //assign the new describe method
  char.describe = weaponDescribe;
  //assign the new weapon 
  char.weapon = weapon;
  //return the character with new describe method and new weapon property
  return char;
}


//loop through the array that contains each of our character objects
for (let i = 0; i < char.length; i++) {
  //run our addWeapon function on each character object with each weapon at the corresponding index in the WeaponsArr
  //then call the describe method on each altered object to print the new sentence!
    console.log(addWeapon(char[i], weaponsArr[i]).describe());
}









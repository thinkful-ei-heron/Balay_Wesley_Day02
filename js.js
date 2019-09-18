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






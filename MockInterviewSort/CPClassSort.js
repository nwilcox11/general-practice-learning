'use strict';

// Uses a Group constructor and the new keyword to build groups
// Pairs random developers with a random interviewer with no duplicates.
// rounds and group sizes can be specified.

let developers = ['nickW', 'nickL', 'ryanW', 'kevinP',
                  'johnM', 'maM', 'peteP', 'jackY',
                  'billyY', 'jacksonS', 'smith', 'tomW',
                  'martinezE', 'lindseyQ', 'michaelB'];

let interviewers = ['JASON', 'JEFF', 'ANTONY', 'MATT', 'BRIAN'];


const Group = function (developers, interviewers, groupSize) {
    this.interviewer = this.getInterviewer(interviewers) || '';
    this.developers = this.getDevs(developers, groupSize) || '';
};

Group.prototype.getRandomIndex = function (array) {
  let index = array.length;
  let randomIndex = Math.floor(Math.random() * index);

    return array[randomIndex];
};

Group.prototype.getDevs = function (devArray, groupSize) {
  let threeDevs = [], randomDev;
  while(threeDevs.length < groupSize) {
    randomDev = this.getRandomIndex(devArray) || '';

      threeDevs.push(randomDev);
      devArray.splice(devArray.indexOf(randomDev), 1);

  }
  return threeDevs;
};

Group.prototype.getInterviewer = function (intArray) {
  let randomInterviewer = this.getRandomIndex(intArray) || '';

  intArray.splice(intArray.indexOf(randomInterviewer), 1);
    return randomInterviewer;
};

const createGroups = (devArray, intArray, groupSize, rounds) => {
  let groups = [];

  while(rounds > 0) {
    groups.push(new Group(devArray, intArray, groupSize));
    rounds--;
  }
  return groups;
};

console.log(createGroups(developers, interviewers, 3, 5));

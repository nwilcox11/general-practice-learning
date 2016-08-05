'use strict';

// Uses one BuildGroup object, each new object delegates to it.
// Pairs random developers with a random interviewer with no duplicates.
// rounds and group sizes can be specified.

let developers = ['nickW', 'nickL', 'ryanW', 'kevinP',
                  'johnM', 'maM', 'peteP', 'jackY',
                  'billyY', 'jacksonS', 'smith', 'tomW',
                  'martinezE', 'lindseyQ', 'michaelB'];

let interviewers = ['JASON', 'JEFF', 'ANTONY', 'MATT', 'BRIAN'];


const BuildGroup = {
  getRandomIndex (array) {
    let index = array.length;
    let randomIndex = Math.floor(Math.random() * index);

      return array[randomIndex];
  },
  getInterviewer (intArray) {
    let randomInterviewer = this.getRandomIndex(intArray) || '';

    intArray.splice(intArray.indexOf(randomInterviewer), 1);
      return randomInterviewer;
  },
  getDevs (devArray, groupSize) {
    let threeDevs = [], randomDev;
    while(threeDevs.length < groupSize) {
      randomDev = this.getRandomIndex(devArray) || '';

        threeDevs.push(randomDev);
        devArray.splice(devArray.indexOf(randomDev), 1);
    }
    return threeDevs;
  },
  init (developers, interviewers, groupSize) {
    return {
      interviewer: this.getInterviewer(interviewers) || '',
      developers: this.getDevs(developers, groupSize) || '',
    };
  },
};

const createGroups = (devArray, intArray, groupSize, rounds) => {
  // MockInterview delegates to BuildGroup.
  const MockInterview = Object.create(BuildGroup);
  let groups = [];


  while(rounds > 0) {
    groups.push(MockInterview.init(devArray, intArray, groupSize));
    rounds--;
  }
  return groups;
};

console.log(createGroups(developers, interviewers, 3, 5));

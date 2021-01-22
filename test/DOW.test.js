const time = require('../dist/index');

const dowName = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

describe('nextDow()', () => {
  for(let i=0; i<7; ++i) {
    const t = time.nextDow(i);
    test(`(${i}) ${dowName[i]} -> ${t.toUTCString()}`,
      () => expect(t.getDay()).toEqual(i));
  }
});

describe('prevDow()', () => {
  for(let i=0; i<7; ++i) {
    const t = time.prevDow(i);
    test(`(${i}) ${dowName[i]} -> ${t.toUTCString()}`,
      () => expect(t.getDay()).toEqual(i));
  }
});

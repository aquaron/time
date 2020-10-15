const time = require('../dist/index');

describe('nextDow()', () => {
  for(let i=0; i<7; ++i) {
    test(`DOW ${i}`, () => {
      const t = time.nextDow(i);
      expect(t.getDay()).toEqual(i);
    });
  }
});

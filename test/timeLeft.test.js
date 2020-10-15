const time = require('../dist/index');

describe('timeLeft()', () => {
  const tests = [
    { delta: 1000, result: { days: 0, hours: 0, minutes: 0, seconds: 1 } },
    { delta: 86401000, result: { days: 1, hours: 0, minutes: 0, seconds: 1 } },
    { delta: 82800000, result: { days: 0, hours: 23, minutes: 0, seconds: 0 } }
  ];
  tests.forEach( (t) => test(`Delta ${t.delta}`, () =>
    expect(time.timeLeft(t.delta)).toEqual(expect.objectContaining(t.result))
  ));
});

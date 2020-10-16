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

describe('timeLeftStr()', () => {
  const tags = {
    days: 'ngày',
    hours: 'tiếng',
    minutes: 'phút',
    seconds: 'giây'
  };
  const tests = [
    { delta: 1000, result: '1 giây', result2: '1 second' },
    { delta: 2000, result: '2 giây', result2: '2 seconds' },
    { delta: 360000, result: '6 phút', result2: '6 minutes' },
    { delta: 93600000, result: '26 tiếng', result2: '26 hours' },
    { delta: 82800000, result: '23 tiếng', result2: '23 hours' },
    { delta: 345600000, result: '4 ngày', result2: '4 days' }
  ];
  tests.forEach( (t) => test(`Time left (vn): ${t.result}`, () =>
    expect(time.timeLeftStr(t.delta, tags)).toEqual(t.result)
  ));
  tests.forEach( (t) => test(`Time left (en): ${t.result2}`, () =>
    expect(time.timeLeftStr(t.delta)).toEqual(t.result2)
  ));
});

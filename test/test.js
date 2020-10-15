const time = require('../dist/index');

describe('toDate()', () => {
  const tests = [
    { date: '2020-10-14', time: undefined, result: '2020-10-14T00:00:00' },
    { date: '2020-10-12', time: '12:22:33', result: '2020-10-12T12:22:33' }
  ];
  tests.forEach( (t) => test(`Date ${t.date}`, () =>
    expect(time.toDate(t.date, t.time)).toEqual(new Date(t.result))
  ));

  const wrong_time = '12:2233';
  test(`Error time ${wrong_time}`, () =>
    expect( () => time.toDate('2020-12-24', wrong_time) )
      .toThrow(`Time format HH:MM:SS (${wrong_time})`)
  );
});

describe('toYMD()', () => {
  const tests = [
    { date: [1989,10,27], result: '1989-11-27' },
    { date: [2009,8,3], result: '2009-09-03' }
  ];
  tests.forEach( t => test(`Date ${t.date}`, () =>
    expect(time.toYMD(new Date(...t.date))).toEqual(t.result)
  ));
});

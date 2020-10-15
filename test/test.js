const time = require('../dist/index');

describe('toDate()', () => {
  const tests = [
    { date: '2020-10-14', time: undefined, result: '2020-10-14T07:00:00.000Z' },
    { date: '2020-10-12', time: '12:22:33', result: '2020-10-12T19:22:33.000Z' }
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
  const date = new Date(1989, 10, 27);
  test(`Date ${date}`, () =>
    expect(time.toYMD(date)).toEqual('1989-11-27')
  );
});

const time = require('../dist/index');

describe('isUpcoming()', () => {
  const data = {
    '2030-10-01': true,
    '2020-10-01': false
  };

  for (const d in data) {
    test(`${d} is ${data[d]}`, () =>
      expect(time.isUpcoming(d)).toBe(data[d])
    )
  }

  const wrong_date = '20202020';
  test(`Error date ${wrong_date}`, () =>
    expect( () => time.isUpcoming(wrong_date) )
      .toThrow(`Date format YYYY-MM-DD (${wrong_date})`)
  );
});

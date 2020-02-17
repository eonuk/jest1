

const percent = (a, b) => a * b / 100;

describe('my tests', function() {

  describe('my tests', function() {
    test('percent 1', () => {
      expect(percent(50, 20)).toBe(10);
    });

    test('percent 2', () => {
      expect(percent(80, 5)).toBe(4);
    });
  });
});



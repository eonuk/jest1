

const divide = (a, b) => a / b;

describe('my tests', function() {

  describe('my tests', function() {
    test('divide 1', () => {
      expect(divide(20, 4)).toBe(5);
    });

    test('divide 2', () => {
      expect(divide(25, 5)).toBe(5);
    });
  });

  describe('my tests', function() {
    test('divide 3', () => {
      expect(divide(40, 5)).toBe(8);
    });

    test('divide 4', () => {
      expect(divide(60, 20)).toBe(3);
    });
  });
});



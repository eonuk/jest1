

const multiply = (a, b) => a * b;

describe('my tests', function() {

  describe('my tests', function() {
    test('multiply 1', () => {
      expect(multiply(5, 4)).toBe(20);
    });

    test('multiply 2', () => {
      expect(multiply(25, 10)).toBe(250);
    });
  });

  describe('my tests', function() {
    test('multiply 3', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('multiply 4', () => {
      expect(multiply(66, 20)).toBe(1320);
    });
  });
});



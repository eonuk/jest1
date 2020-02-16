

const subtract = (a, b) => a - b;

describe('my tests', function() {

  describe('my tests', function() {
    test('add 1', () => {
      expect(subtract(5, 4)).toBe(1);
    });

    test('add 2', () => {
      expect(subtract(25, 10)).toBe(15);
    });
  });

  describe('my tests', function() {
    test('add 3', () => {
      expect(subtract(4, 5)).toBe(-1);
    });

    test('add 4', () => {
      expect(subtract(66, 20)).toBe(46);
    });
  });
});



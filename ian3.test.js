

const add = (a, b) => a + b;

describe('my tests', function() {

  describe('my tests', function() {
    test('add 1', () => {
      expect(add(4, 5)).toBe(9);
    });

    test('add 2', () => {
      expect(add(10, 20)).toBe(30);
    });
  });

  describe('my tests', function() {
    test('add 3', () => {
      expect(add(4, 5)).toBe(9);
    });

    test('add 4', () => {
      expect(add(10, 20)).toBe(30);
    });
  });
});



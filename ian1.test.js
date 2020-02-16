

function func(v) {
	return v * 2;
}

describe('my tests', function() {

  describe('my tests', function() {
    test('Outputs III', () => {
      expect(func(3)).toBe(6);
    });

    test('Outputs IV', () => {
      expect(func(5)).toBe(10);
    });
  });
  
  describe('my tests', function() {
    test('Outputs III', () => {
      expect(func(3)).toBe(6);
    });

    test('Outputs IV', () => {
      expect(func(5)).toBe(10);
    });
  });
  
});



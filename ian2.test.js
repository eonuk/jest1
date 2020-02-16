

function func(v) {
	return v * 2;
}

describe('my tests', function() {

  describe('my tests', function() {
    test('Outputs III', () => {
      expect(func(4)).toBe(8);
    });

    test('Outputs IV', () => {
      //expect(func(5)).toBe('IV');
    });
  });
  
  describe('my tests', function() {
    test('Outputs III', () => {
      //expect(func(3)).toBe('III');
    });

    test('Outputs IV', () => {
      //expect(func(5)).toBe('IV');
    });
  });
  
});



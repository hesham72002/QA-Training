const chai = require('chai');
const expect = chai.expect;

describe('Sample Test', () => {
  it('should return true', () => {
    expect(true).to.be.true;
  });
});

// دالة لجمع عددين
function add(a, b) {
    return a + b;
  }
  
  describe('Addition Function', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).to.equal(5);
    });
  
    it('should return the same number when adding zero', () => {
      expect(add(5, 0)).to.equal(5);
    });
  
    it('should add negative numbers correctly', () => {
      expect(add(-2, -3)).to.equal(-5);
    });
  });
  
  // دالة للتحقق مما إذا كانت القيمة زوجية
function isEven(num) {
    return num % 2 === 0;
  }
  
  describe('Even Number Check', () => {
    it('should return true for even numbers', () => {
      expect(isEven(4)).to.be.true;
    });
  
    it('should return false for odd numbers', () => {
      expect(isEven(3)).to.be.false;
    });
  });

  describe('Math Functions', () => {
    describe('Addition Function', () => {
      it('should add two positive numbers correctly', () => {
        expect(add(2, 3)).to.equal(5);
      });
    });
  
    describe('Even Number Check', () => {
      it('should return true for even numbers', () => {
        expect(isEven(4)).to.be.true;
      });
    });
  });
  
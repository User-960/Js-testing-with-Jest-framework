import { definePrime } from '../task/task_04';

describe('Check answer of task_04',
  () => {
    const simple = 17;
    const complex = 18;
    const invalid = 1001;

    it('Should operate correctly with simple number', 
      () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`)
      }
    ),
    it('should operate correctly with complex number',
      () => {
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
      }
    ),
    it('should operate correctly with invalid number',
      () => {
        expect(definePrime(invalid)).toBe(`Данные неверны`)
      }
    );
  }
);
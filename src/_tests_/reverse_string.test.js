import { reverseString } from '../task/task_01';

// test('Check answer of task_01', () => {
//   expect(reverseString('Hello')).toBe('olleH')
// });

describe('Check answer of task_01', () => {
  const testCase = [
    {
      inString: 'hello',
      expected: 'olleh'
    },
    {
      inString: 'blin ha',
      expected: 'ah nilb'
    },
    {
      inString: 'How are you?',
      expected: '?uoy era woH'
    }
  ];

  testCase.forEach(test => {
    it(`Входящая строка : ${test.inString} ожидаю : ${test.expected}`, 
        () => {
          const res = reverseString(test.inString)
          expect(res).toBe(test.expected)
        }
      )
  });
});

// метод toBe() используется для сравнения примитивов
// метод toEqual() используется для сравнения объектов и массивов
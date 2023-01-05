const filterArray = require('../task/task_02');

describe(
  'Check answer of task_02',
  () => {
    const testCase = [
      {
        in: [0, 1, 2, 3, 4, 5, 6],
        expected: [0, 2, 4, 6]
      },
      {
        in: [true, false, true, false, true, false],
        expected: [true, true, true]
      }
    ];

    testCase.forEach(test => {
      it(`in : ${test.in} expected : ${test.expected}`,
        () => {
          const res = filterArray(test.in);
          expect(res).toEqual(test.expected);
        }
      );
    })
  }
);

// метод toBe() используется для сравнения примитивов
// метод toEqual() используется для сравнения объектов и массивов
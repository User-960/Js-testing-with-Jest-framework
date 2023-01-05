const randomInt = require('../task/task_03');

describe(
  `Check answer of task_03`,
  () => {
    const testCase = [
      {
        from: 100,
        to: 110
      },
      {
        from: 200,
        to: 201
      }
    ];

    testCase.forEach(test => {
      it(`from : ${test.from} to : ${test.to}`,
        () => {
          const res = randomInt(test.from, test.to);
          console.log(res);
          expect(res).toBeGreaterThanOrEqual(test.from);
          expect(res).toBeLessThanOrEqual(test.to);
        }
      );
    });
  }
);
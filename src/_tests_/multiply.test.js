import { multiply } from '../task/task_05';

describe('test multiply', () => {
  it('multiply 1 * 1 to equal 1', () => {
    const res = multiply(1, 1);
    expect(res).toBe(1);
  }),
  it('multiply 1 * 1 to equal 0', () => {
    const res = multiply(1, 0);
    expect(res).toBe(0);
  });
})
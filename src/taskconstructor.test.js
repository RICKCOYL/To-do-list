// eslint-disable-next-line import/extensions
import Task from './taskconstructor.js';

describe('Task constructor', () => {
  const testTask = new Task('TESTNAME', 'TESTDESCRIPTION', 'TESTDATE', 'TESTPRIO');

  test('Task constructs a new task object', () => {
    expect(testTask instanceof Task).toBeTruthy();
  });

  test('title property equal to the first argument of the constructor', () => {
    expect(testTask.title).toBe('TESTNAME');
  });

  test('description property equal to the second argument of the constructor', () => {
    expect(testTask.description).toBe('TESTDESCRIPTION');
  });

  test(' dueDate property equal to the third argument of the constructor', () => {
    expect(testTask.dueDate).toBe('TESTDATE');
  });
});
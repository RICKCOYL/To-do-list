import Project from './projectconstructor';

describe('Project constructor', () => {
  const testProject = new Project('TESTNAME');

  test('Project constructs a new project object', () => {
    expect(testProject instanceof Project).toBeTruthy();
  });

  test('The created project has a title property equal to the first argument of the constructor', () => {
    expect(testProject.title).toBe('TESTNAME');
  });
});
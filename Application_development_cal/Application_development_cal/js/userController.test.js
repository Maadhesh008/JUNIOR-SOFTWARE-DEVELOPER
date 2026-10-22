const UserController = require('./userController');

describe('UserController Module - Task 2', () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  // Task 2: add() test
  test('add() inserts a new user successfully', () => {
    const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
    userController.add(user);
    expect(userController.findById(1)).toEqual(user);
  });

  // Task 2: remove() test
  test('remove() deletes a user by id', () => {
    const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
    userController.add(user);
    userController.remove(1);
    expect(userController.findById(1)).toBeUndefined();
  });

  // Task 2: findByEmail() tests (2 tests)
  test('findByEmail() returns the user when email exists', () => {
    const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
    userController.add(user);
    expect(userController.findByEmail('alice@example.com')).toEqual(user);
  });

  test('findByEmail() returns undefined when email is not found', () => {
    expect(userController.findByEmail('nonexistent@example.com')).toBeUndefined();
  });

  // Task 2: findById() tests (2 tests)
  test('findById() returns the user when matching ID exists', () => {
    const user = { id: 2, name: 'Bob', email: 'bob@example.com' };
    userController.add(user);
    expect(userController.findById(2)).toEqual(user);
  });

  test('findById() returns undefined when matching ID is not found', () => {
    expect(userController.findById(999)).toBeUndefined();
  });
});

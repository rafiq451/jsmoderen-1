const { User, all, store, update, destroy } = require('../index');

describe('# Menjalankan Test: Array of Object Users', () => {
  const keys = ['nama', 'age', 'major'];

  test('User harus berupa array of object', () => {
    expect(User).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nama: expect.any(String),
          age: expect.any(Number),
          major: expect.any(String),
        }),
      ])
    );
  });

  test('User setidaknya memiliki 5 items/data', () => {
    expect(User.length).toBeGreaterThanOrEqual(5);
  });

  User &&
    User.forEach((user) => {
      const { nama } = user;
      test(`${nama ?? 'item'} harus berupa object`, () => {
        expect(typeof user).toBe('object');
      });
    });

  User &&
    User.forEach((user) => {
      const { nama } = user;
      test(`${nama ?? 'item'} harus memiliki property nama, age, dan major`, () => {
        keys.forEach((key) => {
          expect(user).toHaveProperty(key);
        });
      });
    });
});

describe('# Menjalankan Test: Function all', () => {
  test('function all harus bisa dipanggil', () => {
    const result = all();
    expect(result).toBeUndefined();
  });
});

describe('# Menjalankan Test: Function store', () => {
  const user = {
    nama: 'Sabiq',
    age: 20,
    major: 'Informatics',
  };

  test('function create harus bisa dipanggil', () => {
    const result = store(user);
    expect(result).toBeUndefined();
  });

  test('function create harus bisa menambahkan user baru', () => {
    const lengthOfOldUsers = User.length;
    store(user);
    const lengthOfNewUsers = User.length;
    expect(lengthOfNewUsers).toBeGreaterThan(lengthOfOldUsers);
  });
});

describe('# Menjalankan Test: Function edit', () => {
  const index = 1;
  const oldUser = User && User[index];
  const user = {
    nama: 'Isfa Update',
    age: 10,
    major: 'Software Engineer Update',
  };

  test('function edit harus bisa dipanggil', () => {
    const result = update(index, user);
    expect(result).toBeUndefined();
  });

  test('function edit harus bisa mengedit user', () => {
    const newUser = User[index];
    expect(newUser).not.toEqual(oldUser);
  });
});

describe('# Menjalankan Test: Function destroy', () => {
  const index = 2;

  test('function destroy harus bisa dipanggil', () => {
    const result = destroy(index);
    expect(result).toBeUndefined();
  });

  test('function destroy harus bisa menghapus user', () => {
    const lengthOfOldUsers = User.length;
    destroy(index);
    const lengthOfNewUsers = User.length;
    expect(lengthOfNewUsers).toBeLessThan(lengthOfOldUsers);
  });
});

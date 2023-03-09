const User = [
  { nama: 'Aufa', age: 22, major: 'informatika' },
  { nama: 'Isfa', age: 22, major: 'informatika' },
  { nama: 'Nurul', age: 23, major: 'sistem informasi' },
  { nama: 'santi', age: 24, major: 'English' },
  { nama: 'Rena', age: 23, major: 'sistem informasi' },
];

//* fungsi menampilkan seluruh data
//* for..of
const all = (User) => {
  for (User of User) {
    console.log(`\nNama: ${User.nama} \nAge: ${User.age} \nMajor: ${User.major}`);
  }
};

//* fungsi untuk menambah data user
const store = (user) => User.push(user);

//* fungsi unruk mengupdate data user
const update = (i, user) => (User[i] = user);

//* fungsi untuk meneghapus data pertama
const destroy = (user) => User.splice(user, 1);

//* fungsi main
const main = () => {
  console.log('#Get All Users');
  all(User);

  console.log('#Add User: sabiq');
  const newUser = {
    nama: 'Sabiq',
    age: 20,
    major: 'informatika',
  };
  store(newUser);
  all(User);

  console.log('#update data: Isfani');
  const upData = {
    nama: 'Isfani Ghiyath',
    age: 23,
    major: 'English',
  };
  update(1, upData);
  all(User);

  console.log('#menghapus data Nurul');
  destroy(2);
  all(User);
};

main();

module.exports = { User, all, store, update, destroy };

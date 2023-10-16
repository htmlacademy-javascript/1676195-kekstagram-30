const users = [
  {
    id: 1,
    name: 'Dusya',
    isActive: true,
    age: 38
  },
  {
    id: 2,
    name: 'Tanya',
    isActive: false,
    age: 20
  },
  {
    id: 3,
    name: 'Ivan',
    isActive: true,
    age: 40
  },
];

function getUsers(arr) {
  const names = [];
  for (let i = 0; i < arr.length; i++) {
    names.push(arr[i].name);
  }
  return names;
}

const getUsersByForEach = (arr) => {
  const names = [];
  arr.forEach((item) => {
    names.push(item.name);
  });
   return names;
}

const getUsersByMap = (arr) => arr.map((user) => user.name);

const getActiveUsers = (arr) => {
  const activeUsers = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].isActive) {
      activeUsers.push(arr[i].name);
    }
  }
  return activeUsers;
};

const getActiveUsersByFilter = (arr) => arr.filter((item) => item.isActive).map((element)=>element.name);

const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age).map((item)=>item.name);

const isNameExist = (arr, name) =>arr.some((user) => user.name === name);

console.log(isNameExist(users, 'Ivan') ? 'There is a user whith such name' : 'No user whith such name');


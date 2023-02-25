const users = [
  {
    id: 1,
    userName: "Thanh Nhan",
    gender: "male",
    email: "thanhnhan@gmail.com",
  },
  {
    id: 2,
    userName: "Thanh Nghia",
    gender: "male",
    email: "thanhnghia@gmail.com",
  },
  {
    id: 3,
    userName: "Duc Huy",
    gender: "male",
    email: "duchuy@gmail.com",
  },
];

const carts = [
  {
    id: 1,
    userID: 1,
    totalPrice: 200,
  },
  {
    id: 2,
    userID: 2,
    totalPrice: 150,
  },
  {
    id: 3,
    userID: 1,
    totalPrice: 300,
  },
];

const getCart = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(carts);
    }, 1000);
  });
};

const getUserByIDs = function (userIDs) {
  return new Promise(function (resolve) {
    const filteredUser = users.filter(function (user) {
      return userIDs.includes(user.id);
    });

    setTimeout(function () {
      resolve(filteredUser);
    }, 1000);
  });
};

getCart()
  .then(function (carts) {
    const userIDs = carts.map(function (cart) {
      return cart.userID;
    });

    return getUserByIDs(userIDs).then(function (users) {
      return { users: users, carts: carts };
    });
  })
  .then(function (data) {
    let html = `<table border='1'>
      <tr>
      <th>Card ID</th>
      <th>User Name</th>
      <th>User Email</th>
      <th>Total Price</th>
      </tr>`;

    data.carts.forEach((cart) => {
      const user = data.users.find(function (user) {
        return user.id === cart.userID;
      });

      html += `<tr>
      <td>${cart.id}</td>
      <td>${user.userName}</td>
      <td>${user.email}</td>
      <td>${cart.totalPrice}</td>
      </tr>`;
    });

    document.getElementById("root").innerHTML = html;
  });

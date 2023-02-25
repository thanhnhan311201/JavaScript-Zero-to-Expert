const userrAPI = "https://jsonplaceholder.typicode.com/users";

fetch(userrAPI)
  .then((respone) => {
    return respone.json();
  })
  .then((users) => {
    const htmls = users.map((user) => {
      return `<tr>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      </tr>`;
    });

    const html =
      `<table border='1'>
      <tr>
      <th>Name</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Phone</th>
      </tr>` + htmls.join("");

    document.getElementById("user-table").innerHTML = html;
  })
  .catch(function (err) {
    console.log(err);
  });

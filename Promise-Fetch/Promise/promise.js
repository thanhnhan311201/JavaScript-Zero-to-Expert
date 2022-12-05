// - Promise là phương pháp để xử lý những thao tác bất đồng bộ, trước khi có promise thì chúng ta sử dụng callback để xử lý,
// tuy nhiên khi chúng ta code những thao tác tuần tự và ràng buộc với nhau thì rất dễ gặp callback hell, dẫn đến code bị lồng
// vào nhau, khó nhìn và khó hiểu.
// - Do đó Promise được sinh ra ở JavaScript ES6 để giải quyết callback hell.
// - Callback hell là trường hợp khi chúng ta code một function và lồng vào quá nhiều callback ở bên trong, trường hợp dễ
// thấy nhất với callback hell là khi chúng ta code những tác vụ thực thi tuần tự ràng buộc lẫn nhau, các tác vụ con phải phụ
// thuộc và chờ các tác vụ cha thực thi xong thì mới thực thi, chúng lồng vào nhau trong một function và không thể thực thi
// riêng lẻ, đồng thời các tác vụ đều phải gọi callback.
// - Ví dụ callback hell
setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
      setTimeout(function () {
        console.log(4);
      });
    });
  });
});
// - Cách khởi tạo Promise: dùng từ khóa new để khởi tạo Promise, tham số truyền vào một hàm thực thi (executor function)
const promise = new Promise(
  // Executor function
  function (resolve, reject) {
    // Logic:
    // statement...

    // Gọi resolve khi thao tác xử lý logic thành công.
    // Tham số truyền vào là dữ liệu trả về cho phương thức then()
    resolve();

    // Gọi reject khi thao tác xử lý logic thất bại.
    // Tham số truyền vào là dữ liệu trả về cho phương thức catch()
    reject();
  }
);
// - Promise có 3 trạng thái: pending (là trạng thái đang chờ resolve hoặc reject), fulfilled (là trạng thái khi promise thực
// thi thành công và gọi resolve), reject (là trạng thái khi promise thực thi thất bại và gọi reject)
// - Các phương thức của Promise khi khởi tạo xong: then(), catch() và finally(); cả 3 phương thức đều nhận tham số là một
// callback function
promise
  .then(function () {
    // Phương thức then được thực thi khi đối tượng Promise resolve, tham số truyền vào là giá trị được resolve trả về
    // statement...
  })
  .catch(function () {
    // Phương thức catch được thực thi khi đối tượng Promise reject, tham số truyền vào là giá trị được reject trả về
    // statement...
  })
  .finally(function () {
    // Phương thức finally sẽ được thực thi kể cả khi đối tượng Promise resolve hoặc reject.
    // statement...
  });
// - Ví dụ thực tế khi chúng ta đang cần lấy dữ liệu từ phía server, thì trong thời gian mà chúng ta đợi dữ liệu trả về thì
// chúng ta sẽ hiển thị loader, khi mà phía server phản hồi cho chúng ta rồi thì chúng ta sẽ sử dụng phương thức finally() để
// ẩn loader.
// - Khi server xử lý thành công và trả về dữ liệu, thì dữ liệu sẽ được trả về thông qua resolve(-data-), rồi chúng ta sẽ
// sử dụng phương thức then(-data-) để render dữ liệu mà server trả về.
// - Trong trường hợp server xử lý không thành công (không tìm thấy dữ liệu yêu cầu,...) thì server sẽ trả về dữ liệu
// (error message,...) thông qua reject(-error message-), sau đó chúng ta sẽ sử dụng .catch(-error message-) để hiển thị trên
// browser.
// - Một điều lưu ý quan trọng khi sử dụng Promise đó là lúc nào cũng phải có phương thức catch, bởi vì trong môi trường thực
// tế chúng ta không thể nào đảm bảo promise được sử lý thành công, đôi lúc sẽ có lỗi, nên chúng ta phải handle bug bằng
// phương thức catch() để xử lý cho phù hợp.

// - Những phương thức của Promise có thể được viết thành chuỗi, và giá trị được return ở phương thức trước sẽ được trả về
// cho phương thức sau.
// - Ví dụ:
const promise1 = new Promise(function (resolve) {
  resolve("Đây");
});

promise1
  .then((data) => `${data} được`)
  .then((data) => `${data} gọi`)
  .then((data) => `${data} là`)
  .then((data) => `${data} Promise Chain`)
  .then((data) => {
    console.log(data); // "Đây được gọi là Promise Chain"
  });
// - Promise chain cũng sẽ áp dụng tương tự cho phương thức catch.
// - Với Promise chúng ta có thể viết lồng vào nhau những phương thức cần thực thi tuần tự và ràng buộc với nhau, đồng thời
// cách trình bày của promise chain cũng sẽ hiểu và tường minh hơn so với callback hell.
// - Một điều lưu ý là khi chúng ta return ở phương thức trước đó là một Promise, thì phương thức tiếp theo sẽ thực thi dựa
// trên Promise mới được sinh ra ở phương thức trước.
const promise2 = new Promise(function (resolve) {
  resolve("Đây là Promise 1");
});

promise2
  .then(function (data) {
    console.log(data); // "Đây là Promise 1"
    return new Promise(function (resolve) {
      resolve("Đây là Promise 2");
    });
  })
  .then(function (data) {
    console.log(data); // "Đây là Promise 2"
  });

// Ví dụ: tạo bộ đếm 1 đến 3, cứ 1s đếm 1 lần và không sử dụng setInterval
const sleep = (ms) =>
  new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });

sleep(1000)
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(2);
    return sleep(1000);
  })
  .then(() => {
    console.log(3);
    return sleep(1000);
  });

// - Ngoài việc tạo ra một Promise thông thường (xử lý logic ở bên trong, rồi tùy vào từng trường hợp gọi resolve hoặc reject),
// chúng ta có thể tạo ra các promise đặc biệt như sau:
// 1. Promise.resolve: tạo một promise luôn trả về resolve
const resolvedPromise = Promise.resolve("Success!");
resolvedPromise.then((data) => {
  console.log(data);
});
// 2. Promise.reject: tạo một promise luôn trả về reject
const rejectedPromise = Promise.reject("Error!");
rejectedPromise.catch((errorMsg) => {
  console.log(errorMsg);
});
// 3. Promise.all: được sử dụng khi chúng ta cần kết hợp và sử dụng dữ liệu của các promise, mà các promise lại không ràng
// buộc lẫn nhau, do đó thay vì phải chạy tuần tự các promise, chúng ta sẽ sử dụng Promise.all để chạy song song các promise,
// một điều lưu ý phương thức then() của promise all chỉ được thực thi khi các promise truyền vào phải được resolve, khi có
// 1 promise bị reject thì phương thức then() sẽ không được thực thi, mà sẽ thực thi phương thức catch().
const promise3 = Promise.resolve([1]);
const promise4 = Promise.resolve([2, 3]);
Promise.all([promise3, promise4]).then(function (result) {
  const [result1, result2] = result;

  console.log(result1.concat(result2));
});

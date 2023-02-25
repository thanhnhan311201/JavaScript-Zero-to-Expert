// - Async function trả về một promise, những giá trị được return sẽ đều được bỏ vô một promise và revolve - tương tự như cách
// viết một function bình thường xong rồi return một promise.
// - await cho phép chúng ta rút gọn lại cú pháp nhiều lần then.
// - Chúng ta thường sử dụng await trước mỗi promise, và nó sẽ đợi cho đến khi nào promise resolve trả về dữ liệu.
// - Với cách viết của await sẽ dễ hiểu hơn, vì cách trình bày sẽ tương tự như cách viết code thông thường.
// - Lưu ý với await chỉ được sử dụng trong async function
// - Ví dụ:
const promise = new Promise((resolve) => resolve("Hello World!"));
const executeAsync = async () => {
  const response = await promise;
  console.log(response);
};

executeAsync();
// - Khi mà chúng ta cần sử dụng nhiều promise có tính chất phụ thuộc nhau, thì từ khóa await sẽ giúp chúng ta code ngắn gọn
// hơn.
// - Ví dụ:
const sleep = (ms) =>
  new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });

// promise thuần
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

// async, await
(async () => {
  await sleep(1000);
  console.log(1);
  await sleep(1000);
  console.log(2);
  await sleep(1000);
  console.log(3);
})();
// - Để bắt lỗi trong async/await, thì chúng sẽ sử dụng try/catch
const promise1 = new Promise((resolve, reject) => {
  // resolve("Hello World!");
  reject("Good bye!");
});
const executeAsync1 = async () => {
  try {
    const response = await promise1;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

executeAsync1();

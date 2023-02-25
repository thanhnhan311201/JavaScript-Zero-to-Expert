##### Table of content

- [Asynchronous JavaScript: Promises, Async/Await, and AJAX](#asynchronous-javascript-promises-asyncawait-and-ajax)
  - [Asynchronous JavaScript, AJAX and APIs](#asynchronous-javascript-ajax-and-apis)
    - [Asynchronous JavaScript](#asynchronous-javascript)
    - [AJAX](#ajax)
    - [APIs](#apis)
  - [Promise](#promise)
    - [Định nghĩa](#định-nghĩa)
    - [Promise Life](#promise-life)

# Asynchronous JavaScript: Promises, Async/Await, and AJAX

## Asynchronous JavaScript, AJAX and APIs

### Asynchronous JavaScript

- JavaScript là ngôn ngữ đơn luồng (single-thread), cách thức hoạt động của JavaScript là thực thi các đoạn lệnh đồng bộ từ trên xuống, lệnh nào code trước sẽ được chạy trước.

```
console.log(1);
console.log(2);

Output:
1
2
```

- Do tất cả các đoạn lệnh đều được thực thi từ trên xuống dưới, do đó những đoạn lệnh sau sẽ chờ các đoạn lệnh trước kết thúc thực thi.
- Tuy nhiên điều này sẽ sinh ra một vấn đề là khi một đoạn lệnh tốn nhiều thời gian để thực thi, dẫn đến các đoạn lệnh sau sẽ block và phải chờ đợi đoạn lệnh đó.

```
const p = document.querySelector('.p')
p.textContent = 'My name is Jonas'
alert('Text set!')
p.style.color = 'red'
```

Như đoạn code trên, khi đoạn lệnh alert thực thi thì ở trên browser sẽ hiển thị một cửa sổ, lúc này chương trình của chúng ta sẽ bị dừng, các đoạn code ở phía sau alert sẽ bị block, và chương trình sẽ tiếp tục thực thi khi nào người dùng bấm nào nút "OK" trên browser.

- Do đó để khắc phục vấn đề đó, chúng ta sẽ sử dụng "asynchronous code".
- "Asynchronous code" là cách lập trình theo kiểu bất đồng bộ, có nghĩa khi chương trình được thực thi, những đoạn lệnh bất đồng bộ sẽ chuyển sang một khu vực riêng để thực thi task của nó (nhất nút OK của phương thức alert, chờ thời gian của setTimeout,...).
- Do đó nó sẽ không ảnh hưởng tới luồng thực thi chính của chương trình. Điều đó đảm bảo các chương trình thực được thực thi liên tục, các đoạn code đồng bộ sẽ không bị block và không phải chờ đợi các đoạn code bất đồng bộ.
- Sau khi các đoạn code bất đồng bộ thực thi các task của nó xong, thì nó sẽ chuyển vô một hàng chờ (callback queue), thì lúc này sẽ có một đối tượng là event loop, nó sẽ kiểm tra lúc này luồng thực thi chính của chương trình (thread of execution - callstack) có task nào đang chạy hay không, nếu không có thì event loop sẽ đẩy từng phương thức bất đồng bộ vào luồng thực thi chính để thực thi, còn nếu luồng thực thi chính còn task thì những thằng trong callback queue sẽ phải chờ cho đến khi callstack rỗng.
- Một số ví dụ bất đồng bộ mà chúng ta thường bắt gặp như là: load một tấm ảnh, chạy bộ đếm thời gian, fetch API, AJAX,...
- Trong JavaScript lại có những phương pháp bất đồng bộ như: [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout), [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [XMLHttpRequest()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), [FileReader()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader), [requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame),.... Điều đó dẫn tới những đoạn lệnh không còn được chạy đồng bộ từ trên xuống như ban đầu.

```
setTimeOut(function() {
  console.log(1);
}, 1000);

console.log(2);

Output:
2
1
```

Nếu đúng như trong tư duy đồng bộ, thì khi JavaScript gặp đoạn code `setTimeOut()` ở trên, thì chương trình sẽ _sleep_ 1s rồi sau đó in ra số 1 trước rồi mới in ra số 2 sau, tuy nhiên do `setTimeOut()` là phương pháp bất đồng bộ nên đoạn lệnh in số 2 lại được thực thi trước sau đó mới tới lệnh in số 1.

### AJAX

- AJAX được viết tắt bởi **A**synchronous **J**avaScript **A**nd **X**ML.
- AJAX cho phép chúng ta giao tiếp với remote server theo cách bất đồng bộ.
- Chúng ta sẽ thực hiện các lệnh gọi AJAX để yêu cầu lấy dữ liệu từ server một cách linh hoạt mà không cần phải reload lại trang web.

### APIs

- API được viết tắt bởi **A**pplication **P**rogramming **I**nterface.
- API đơn giản là một ứng dụng được xây dựng để các ứng dụng sử dụng với mục đích giao tiếp, truyền tải dữ liệu giữa các ứng dụng.
- Có rất nhiều API khác nhau trong lập trình web, ví dụ như: **DOM API**, **Geolocation API**,...
- Chúng ta có thể tạo một API từ một object, trong đó cung cấp các method để có ứng dụng khác có thể tương tác sử dụng. Chúng ta gọi đó là **Own Class API**.
- **"Online" API** (Web API/API) là một API được xây dựng và chạy trên một remote server, API có chức năng cho phép client và server tương tác với nhau thông qua giao thức HTTP. Khi client gửi một request lấy dữ liệu thì API này sẽ có nhiệm vụ tiếp nhận request, tìm kiếm dữ liệu trong cơ sở dữ liệu và sau đó gửi data về cho client thong qua respone.
- Ngoài việc lấy dữ liệu thì chúng ta có thể sử dụng **"Online" API** cho nhiều task khác.

## Promise

### Định nghĩa

- Giả sử chúng cần xử lý những task bất đồng bộ có liên quan với nhau và có tính tuần tự, thì chúng ta bắt buộc vào lồng các callback function với nhau để xử lý, ví dụ:

```
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
```

- Tuy nhiên điều này dễ dẫn tới callback hell, thay vào đó chúng ta nên sử dụng một tính năng mới trong ES6 để xủ lý là **Promise**.

![](../Screenshots/Asynchronous-JavaScript/promise.jpeg)

- Về cơ bản Promise là một object được sử dụng như một vùng chứa các giá trị không đồng bộ.
- Với việc sử dụng Promise sẽ giải quyết được vấn đề callback hell, thao tác các task có tính chất tuần tự dễ dàng hơn, code trong đẹp hơn và cũng như giúp chúng ta dễ dàng xử lý các thao tác bất đồng bộ hơn (ví dụ như AJAX call thì không cần phải sử dụng event "load").
- Cách khởi tạo Promise: dùng từ khóa new để khởi tạo Promise, tham số truyền vào một hàm thực thi (executor function).

```
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
```

### Promise Lifecycle

![](../Screenshots/Asynchronous-JavaScript/promise-lifecycle.png)

- Promise có 3 trạng thái: pending (là trạng thái đang chờ resolve hoặc reject), fulfilled (là trạng thái khi promise thực thi thành công và gọi resolve), reject (là trạng thái khi promise thực thi thất bại và gọi reject).

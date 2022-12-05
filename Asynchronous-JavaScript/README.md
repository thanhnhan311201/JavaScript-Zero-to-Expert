##### Table of content

- [Asynchronous JavaScript: Promises, Async/Await, and AJAX](#asynchronous-javascript-promises-asyncawait-and-ajax)
  - [Asynchronous JavaScript, AJAX and APIs](#asynchronous-javascript-ajax-and-apis)
    - [Asynchronous JavaScript](#asynchronous-javascript)
    - [AJAX](#ajax)

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

- AJAX là viết tắt bởi của **A**synchronous **J**avaScript **A**nd **X**ML.
- AJAX cho phép chúng ta giao tiếp với remote server theo cách không đồng bộ.
- Chúng ta sẽ thực hiện các lệnh gọi AJAX để yêu cầu lấy dữ liệu từ server một cách linh hoạt mà không cần phải reload lại trang web.

# JavaScript-Zero-to-Expert

## Những lý thuyết quan trọng trong JavaScript

- Cơ chế về xử lý bất đồng bộ.
- Cơ chế Event Loop
- Cơ chế Message Queue

## Cơ chế xử lý bất đồng bộ

### Promise

#### Sync, Async

- JavaScript là ngôn ngữ đơn luồng (single-thread), cách thức hoạt động của JavaScript là thực thi các đoạn lệnh đồng bộ từ trên xuống, lệnh nào code trước sẽ được chạy trước.

```
console.log(1);
console.log(2);

Output:
1
2
```

- Tuy nhiên trong JavaScript lại có những phương pháp bất đồng bộ như: [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout), [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [XMLHttpRequest()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), [FileReader()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader), [requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame),.... Điều đó dẫn tới những đoạn lệnh không còn được chạy đồng bộ từ trên xuống như ban đầu.

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

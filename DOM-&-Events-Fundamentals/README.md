##### Table of content

- [JavaScript in the Browser: DOM and Events Fundamentals](#javascript-in-the-browser-dom-and-events-fundamentals)
  - [1. Dom là gì?](#1-dom-là-gì)
  - [2. Thao tác phần tử HTML với class, id](#2-thao-tác-phần-tử-html-với-class-id)
  - [3. Event Listener](#3-event-listener)
  - [4. Thao tác với CSS](#4-thao-tác-với-css)
  - [5. Thao tác với class](#5-thao-tác-với-class)
  - [6. Ý nghĩa của việc thao tác với class](#6-ý-nghĩa-của-việc-thao-tác-với-class)
  - [7. Event Object](#7-event-object)
  - [8. Handling a Keypress Event](#8-handling-a-keypress-event)

# JavaScript in the Browser: DOM and Events Fundamentals

## 1. Dom là gì?

- DOM (Document Object Model) là một biểu diễn có cấu trúc của các tài liệu HTML.
- DOM cho phép chúng ta sử dụng JavaScript để truy cập vào các phần tử và style (CSS) để thao tác với chúng. Ví dụ chúng ta có thể sử dụng JavaSript để truy cập vào thẻ p sau đó chúng ta có thể style thuộc tính color để thay đổi màu chữ có trong thẻ p.
- Nói các khác, DOM là một điểm kết nối giữa tài liệu HTML và code JavaScript.
- DOM được trình duyệt tạo ngay sau khi tải trang HTML và được lưu trữ trong một cấu trúc cây.

![](/Screenshots/DOM-Events/dom_tree_1.png)

- Trong cây DOM, mỗi phần tử HTML là một object hay còn gọi là một node, và chúng ta có thể truy cập và tương tác với từng node bằng JavaScript.
- Cây DOM luôn bắt đầu với đối tượng _document_, và nó cũng là node đầu tiên trong cây DOM. Đối tượng _document_ là một đối tượng đặc biệt trong cây DOM, đối tượng này đóng vai trò như một điểm bắt đầu (entry point) vào cây DOM, bởi vì bắt đầu từ đối tượng _document_ chúng ta mới có thể truy cập được các phần tử con khác có trong cây.
- Node con đầu tiên của đối tượng Document là đối tượng _html_, vì nó là phần tử gốc trong tài liệu html. Tiếp theo đối tượng _html_ có 2 đối tượng con là _head_ và _body_, bởi vì 2 đối tượng này là node liền kề (cùng bậc) nên 2 đối tượng là anh em với nhau. Và cứ như vậy khi chúng ta đi sâu xuống bên dưới cấu trúc html lồng nhau, chúng ta sẽ có thêm nhiều các node con khác.

![](/Screenshots/DOM-Events/dom_tree_2.png)

- DOM không phải một là phương thức của ngôn ngữ lập trình JavaScript, mà Dom là Web APIs của trình duyệt web. Web APIs giống như là một thư viện mà trình duyệt triển khai sẵn và chúng ta có thể sử dụng thông qua JavaScript. Ngoài DOM ra chúng ta còn có rất nhiều các Web APIs khác cũng được trình duyệt web triển khai sẵn như _Timers_, _fetch_,...

## 2. Thao tác phần tử HTML với class, id

- Như ở phần trên đã giới thiệu, DOM sẽ giúp chúng ta truy cập vào các phần tử có trong HTML, cụ thể chúng ta sẽ sử dụng đối tượng _document_ để truy cập các phần tử còn lại.
- Chúng ta sẽ sử dụng phương thức `document.querySelector()`, tham số truyền vào của phương thức có thể là tên của một class. tên của một id hoặc có thể là một thẻ cụ thể nào đó trong tài liệu html. Ví dụ:

  - Truy cập phần tử với class:

  ```
  document.querySelector('.content')
  ```

  - Truy cập phần tử với id:

  ```
  document.querySelector('#main-header')
  ```

  - Truy cập phần tử với thẻ body:

  ```
  document.querySelector('body')
  ```

- Ngoài ra DOM cũng cung cấp cho chúng ta một phương thức khác chỉ được dùng để truy cập phần tử với id, đó là phương thức `document.getElementById()`.

```
document.getElementById('main-header')
```

- Chúng ta sẽ sử dụng 1 trong 2 phương thức trên để truy cập phần tử với id hoặc class, sau đó chúng ta sẽ sử dụng các thuộc tính hoặc phương thức tương ứng để thao tác. Để có thể hiểu rõ hơn thì hãy cùng nhìn vào ví dụ bên dưới:

Chúng ta có một file html như thế này:

![](/Screenshots/DOM-Events/html_example.png)

Và đây là giao diện tương ứng:

![](/Screenshots/DOM-Events/html_example_browser.png)

Để có thể truy cập và lấy được giá trị của thẻ p có tên class là **message** chúng ta sẽ làm như sau:

```
console.log(document.querySelector('.message').textContent);

// Start guessing...
```

Kết quả chúng ta nhận được chính giá trị "Start guessing" của thẻ p (.message). Ngoài việc chúng ta có thể lấy được giá trị, chúng ta có thể thay đổi được giá trị của thẻ đó.

```
document.querySelector('.message').textContent = "Correct Number!"
console.log(document.querySelector('.message').textContent);

// Correct Number!
```

Tương tự như vậy, với thuộc tính _textContent_ chúng ta có thể thao tác giá trị với phần tử khác như: div (.number), p (.between),... Tuy nhiên đối với thẻ input (.guess) thì chúng ta sẽ sử dụng thuộc tính value để thao tác giá trị.

```
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 3112;
console.log(document.querySelector('.guess').value);

// ''   chuỗi rỗng bởi vì thẻ input lúc này chưa có giá trị
// 3112 thẻ input lúc này có giá trị là 3112 vì chúng ta đã gán giá trị cho thẻ input
```

- Một điều lưu ý là phương thức `document.querySelector()` và `document.getElementByID()` sẽ trả về phần tử đầu tiên có class tương ứng.
- Để lấy tất cả các phần tử có class tương ứng chúng ta sẽ dùng phương thức `document.querySelectorAll()`, phương thức đó sẽ trả về một NodeList (hoạt động như một JavaScript Array) bao gồm các phần tử có class tương ứng.
- Ngoài ra còn có rất nhiều các phương thức khác cũng như các thuộc tính khác, vui lòng tham khảo thêm tại [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) và [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).
- Để tránh gây nhầm lẫn, trong phần sau của bài viết này, chúng ta chỉ đề cập tới phương thức `document.querySelector()`.

## 3. Event Listener

- Một sự kiện là một chuyện gì đó xảy ra trên trang web, nó có thể là một cú click chuột, di chuột, nhấn phím,... Do đó để chúng ta có thể chờ và bắt một sự kiện, sau đó tương tác với nó chúng ta sẽ sử dụng phương thức `addEventListener()`.
- Để chúng ta có thể lắng nghe một sự kiện, chúng ta phải truy cập một phần tử nơi xảy ra sự kiện để lắng nghe.
- Để có thể sử dụng được phương thức `addEventListener()` chúng ta cần truyền vào đối số đầu tiên là loại sự kiện mà chúng ta muốn bắt, đối với ví dụ ở dưới là _click_. Tiếp theo chúng ta cần truyền đối số thứ hai là một biểu thức hàm (function expression), hàm đó sẽ chứa toàn lệnh mà chúng ta muốn thực hiện khi bắt được sự kiện, hàm đó được gọi là _event handler_, khi chúng ta bắt được sử kiện JavaScript sẽ tự đọng gọi hàm và thực thi các đoạn lệnh có bên trong hàm đó.
- Ví dụ chúng ta muốn lắng nghe sự kiện là một cú click chuột ở phần tử button (.check), chúng ta sẽ thao tác như sau:

```
document.querySelector('.check').addEventListener('click', () => {
  console.log(document.querySelector('.guess').value);
});

// 31
```

![](/Screenshots/DOM-Events/browser_clickEvent_example.png)

Ở trên browser khi chúng ta điền vào số 31 vào input, chúng ta nhấn nút check, thì lúc này ở màn hình console sẽ in ra kết quả là 31.

- Ngoài sự kiện _click_ ra, DOM còn cung cấp thêm cho chúng ta rất nhiều các sự kiện khác, có thể tham khảo thêm [tại đây](https://developer.mozilla.org/en-US/docs/Web/Events).

## 4. Thao tác với CSS

- DOM cho phép chúng ta truy cập một phần tử trong html và style CSS phần tử đó bằng phương thức `document.querySelector().style`, sau đó chúng ta sẽ chọn thuộc tính tương ứng để style.
- Về các thuộc tính cũng sẽ tương tự các thuộc tính trong CSS, nhưng có một điều lưu ý là tên các thuộc tính phải được viết theo camelCase (_background-color_ sẽ được viết thành _backgroundColor_). Và giá trị của thuộc tính phải được viết thành chuỗi, cho dù đó có là một số.
- Các thuộc tính được style bằng DOM sẽ được style theo kiểu **inline**, do đó sẽ không bị ảnh hưởng tới các tài liệu CSS. Và khi chúng ta reload lại trang thì các thuộc tính đó sẽ biến mất.
- Ở đây chúng ta có ví dụ như sau:

![](/Screenshots/DOM-Events/style_css_with_DOM_1.png)

Khi chúng ta nhập đúng số tương ứng với con số trong ô 'Guess My Number!' thì chúng ta muốn thuộc tính _background-color_ của thẻ body đổi thành màu '#60b347', đồng thời thuộc tính _width_ của ô đó cũng rộng ra. Chúng ta sẽ thao tác như sau:

```
document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem';
```

Kết quả nhận được:

![](/Screenshots/DOM-Events/style_css_with_DOM_2.png)

## 5. Thao tác với class

- Trong DOM, việc thao tác với class là vô vùng quan trọng, vì chúng ta có thể thao tác để thêm hoặc xóa class, ngoài ra còn một số phương thức khác.
- Để có thể lấy được các _className_ của một phần tử, chúng ta sẽ sử dụng phương thức `document.querySelector().classList`.

Chúng ta có một file html như thế này:

![](/Screenshots/DOM-Events/modal_window_html.png)

Và đây là giao diện tương ứng:

![](/Screenshots/DOM-Events/modal_window_browser.png)

Giả sử chúng ta muốn lấy tất cả các _className_ của thẻ div(.modal .hidden) và thẻ button(.close-modal), chúng ta sẽ làm như sau:

```
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');

console.log(modal.classList);
console.log(btnCloseModal.classList);

// DOMTokenList(2) ['modal', 'hidden', value: 'modal hidden']
// DOMTokenList ['close-modal', value: 'close-modal']
```

- Phương thức `document.querySelector().classList` cũng cung cấp cho chúng ta một số phương thức để thao tác với class như: **add()** để thêm class, **remove()** để xóa class, **replace()** để thay thế class, **toggle()** để thêm class nếu chưa có và ngược lại, **contains()** trả về true nếu class đó không có trong classList và ngược lại,... Ngoài ra còn có các phương thức khác, có thể tham khảo thêm [tại đây](https://www.w3schools.com/jsref/prop_element_classlist.asp).

Như trong ví dụ trên chúng ta đã thấy thẻ div(.modal .hidden) có 2 class là modal và hidden, bây giờ chúng ta muốn khi nhấn vào nút "Show modal 1" thì xóa class hidden để thẻ div(.modal .hidden) được hiển thị trên giao diện. Chúng ta sẽ làm như sau:

```
const btnOpenModal = document.querySelectorAll('.show-modal')[0];
const modal = document.querySelector('.modal');

console.log(modal.classList);

btnOpenModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
  console.log(modal.classList);
});

// DOMTokenList(2) ['modal', 'hidden', value: 'modal hidden']
// DOMTokenList(1) ['modal', value: 'modal']
```

Và đây là kết quả trên giao diện:

![](/Screenshots/DOM-Events/classList_remove.png)

Giả sử chúng ta muốn thêm class hidden khi nhấn nút "x", thì ngược lại ở ví dụ trên, thay vì sử dụng phương thức **remove()**, chúng ta sẽ sử dụng phương thức **add()**:

```
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');

console.log(modal.classList);

btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  console.log(modal.classList);
});

// DOMTokenList(1) ['modal', value: 'modal']
// DOMTokenList(2) ['modal', 'hidden', value: 'modal hidden']
```

Ngoài ra chúng ta có thể sử dụng phương thức **toggle()** thay cho phương thức **remove()** và **add()**; vì phương thức **toggle()** sẽ tự động thêm vào class nếu class đó chưa có và ngược lại.

## 6. Ý nghĩa của việc thao tác với class

- Mục đính chính khi chúng ta thao tác với class (thêm class, xóa class,..) để thay đổi giao diện trên trang web của chúng ta, ở đây chính là việc chúng ta style nhiều thuộc tính CSS cùng lúc.
- Chúng ta có thể sử dụng style từng thuộc tính CSS bằng phương thức `document.querySelector().style`, tuy nhiên khi chúng ta muốn style nhiều thuộc tính thì việc style từng thuộc tính sẽ rất không "hợp lý". Do đó chúng ta sẽ "cài đặt" tất cả các thuộc tính mà chúng ta style vào một class, rồi chúng ta sẽ sử dụng phương thức `document.querySelector().classList` cùng với các phương thức tương ứng (**add**, **remove()**, **toggle()**,...) để thay đổi giao diện theo ý muốn của chúng ta.

## 7. Event Object

- Khi bất kỳ một sự kiện nào xảy ra (click, change, keydown,..), JavaScript sẽ tạo ra một object chứa tất cả những thông tin về sự kiện đó, chúng ta có thể truy cập và sử dụng object đó như một đối số trong _event handler function_.

## 8. Handling a Keypress Event

- Ngoài việc bắt sự kiện của một phần tử cụ thể trong tài liệu html, chúng ta có thể bắt sự kiện của bàn phím.
- Khác với các sự kiện của một phần tử cụ thể trong tài liệu html, sự kiện của bàn phím là một sự kiện toàn cục (global event), bởi vì nó không xảy ra trên một phần tử cụ thể nào. Do đó để bắt sự kiện của bàn phím, chúng ta sẽ "listen" trên đối tượng _document_ mà không cần phải sử dụng phương thức **querySelector()**.
- Đối với sự kiện bàn phím, chúng ta sẽ có 3 loại sự kiện:
  - keyup: _event handler function_ sẽ thực hiện khi chúng ta nhấc ngón tay ra khỏi bàn phím (có thể hiểu là nhả phím không nhấn phím nữa).
  - keypress: _event handler function_ sẽ thực hiện khi chúng ta nhấn giữ phím.
  - keydown: _event handle functionr_ sẽ thực hiện khi chúng ta nhấn phím rồi thả ra ngay lập tức (sự kiện này được sử dụng nhiều nhất).
- Khi chúng ta nhấn một phím trên bàn phím, thông tin về phím nào được nhấn sẽ được lưu lại trong _event object_ ngay lập tức khi bất kỳ phím nào được nhấn.
- Giả sử khi chúng ta muốn bắt sự kiện khi nhấn nút "Escape", chúng ta sẽ làm như sau:

```
document.addEventListener('keydown', e => {
  console.log(e);
  console.log(e.key);
});

// KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …}
// Escape
```

Ở trong ví dụ trên **e** là một _event object_ chứa các thông tin của một sự kiện, cụ thể trong ví dụ là sự kiện _keydown_ bao gồm các thuộc tính tương ứng của sự kiện đó. Và **e** được sử làm đối số của _event handler function_, chúng ta có thể sử dụng đối số **e** để thực hiện các câu lệnh mà chúng ta muốn.

Giả sử chúng ta muốn thêm class hidden vào thẻ div(.modal) để đóng modal trên giao diện khi nhấn nút "Escape", chúng ta sẽ làm như sau:

```
const modal = document.querySelector('.modal');

console.log(modal.classList);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    console.log(modal.classList);
  }
});

// DOMTokenList(1) ['modal', value: 'modal']
// DOMTokenList(2) ['modal', 'hidden', value: 'modal hidden']
```

##### Table of content

- [Lý thuyết nền tảng về JavaScript - Part 2](#lý-thuyết-nền-tảng-về-javascript---part-2)
  - [1. Strict mode](#1-strict-mode)
  - [2. Function](#2-function)
  - [3. Các loại Function trong JavaScript](#3-các-loại-function-trong-javascript)
    - [Function Declarations](#function-declarations)
    - [Function Expressions](#function-expressions)
    - [Sự khác biệt giữa Function Declarations và Function Expressions](#sự-khác-biệt-giữa-function-declarations-và-function-expressions)
    - [Arrow Functions](#arrow-functions)

# Lý thuyết nền tảng về JavaScript - Part 2

## 1. Strict mode

- _Strict Mode_ là chế độ "nghiêm ngặt" mà chúng ta có thể kích hoạt trong JavaScript để chúng ta có thể viết code JavaScript một cách an toàn hơn, hạn chế xảy ra bug hơn.
- Để kích hoạt _Strict Mode_ chúng ta cần thêm dòng lệnh `"use strict";`, tùy thuộc vàhàm của o vị trí mà chúng ta có thể kích hoạt phạm vi hoạt động của _Strict Mode_. Giả sử chúng ta thêm `"use strict";` vào đầu file thì phạm vi của _Strict Mode_ là toàn bộ file đó, còn nếu chúng ta thêm vào phần thân của một _function_ thì _Strict Mode_ chỉ áp dụng cho chỉ mình _function_ đó.
- _Strict Mode_ có rất nhiều tác dụng hữu ích, nhưng trong đó có 2 tác dụng chính mà chúng ta thường hay gặp trong quá trình viết mã JavaScript:
  - _Thứ nhất_, _Strict Mode_ sẽ nghiêm cấm chúng ta làm một số việc nhất định như là **sử dụng các từ khóa được "giữ chỗ" cho các tính năng riêng trong JavaScript (implements, interface, let, package, private, protected, public, static, yield) để đặt tên biến**,...
  - _Thứ hai_, _Strict Mode_ sẽ giúp chúng ta phát hiện một số _bug_ nếu có trong quá trình viết mã. Nếu như không có _Strict Mode_ thì chúng ta sẽ không nhận biết được cái _bug_ phát sinh trong quá trình viết mã vì JavaSript sẽ "im lặng", điều đó dẫn đến đoạn mã chúng ta vừa viết sẽ không hoạt động theo logic ban đầu và chúng ta sẽ không biết được nguyên nhân xảy ra lỗi ở đâu.
- Để hiểu rõ hơn về tác dụng của _Strict Mode_, ở đây chúng ta sẽ được thấy hai ví dụ:

  - Ở trong ví dụ đầu tiên, chúng ta sẽ thấy được tác dụng của _Strict Mode_ khi chúng ta sử dụng các từ khóa đã được "giữ chỗ" của JavaScript để đặt tên biến:

    - Trong ví dụ này, chúng ta sẽ khai báo biến với tên của từ khóa đã được "giữ chỗ".
    - Khi chưa kích hoạt _Strict Mode_:

    ```
    let interface = "Audio";
    console.log(interface);
    ```

    ![](/Screenshots/JS_Fun_Part2/notActivateStrictMode.png)

    - Khi đã kích hoạt _Strict Mode_:

    ```
    "use strict";
    let interface = "Audio";
    console.log(interface);
    ```

    ![](/Screenshots/JS_Fun_Part2/ActivateStrictMode.png)

    - Có thể thấy khi chúng ta chưa kích hoạt _Strict Mode_ thì đoạn mã JavaScript vẫn chạy bình thường, điều đó dẫn đến sau này khi chúng ta cần sử dụng từ khóa _interface_ để thực hiện những tính năng mà chúng ta cần thì có thể phát sinh những _bug_ mà chúng ta không hề mong muốn, và với việc không kích hoạt _Strict Mode_ thì chúng ta khó để mà nhận biết _bug_ nằm ở đâu. Tuy nhiên, khi chúng ta kích hoạt _Strict Mode_ thì ngay lập tức màn hình _console_ sẽ xuất hiện lỗi "Unexpected strict mode reserved word", dòng lỗi đó thông báo chúng ta không được phép sử dụng từ khóa đó để đặt tên biến trong _Strict Mode_, và nó yêu cầu chúng ta phải sử dụng một tên khác để đặt tên biến.

  - Ở trong ví dụ thứ hai, chúng ta sẽ thấy được tác dụng cực kỳ có ích của _Strict Mode_ khi chúng ta vô tình tạo ra _bug_ trong quá trình viết mã JavaScript:

    - Trong ví dụ này, chúng ta sẽ vô tình tạo _bug_ khi chúng ta thao tác với tên biến bị sai.
    - Khi chưa kích hoạt _Strict Mode_:

    ```
    let hasDriversLicense = false;
    const passTest = true;

    if (passTest) hasDriverLicense = true;
    if (hasDriversLicense) console.log("I can drive :D");

    ```

    ![](/Screenshots/JS_Fun_Part2/StrictMode_notVisibleError.png)

    - Khi đã kích hoạt _Strict Mode_:

    ```
    let hasDriversLicense = false;
    const passTest = true;

    if (passTest) hasDriverLicense = true;
    if (hasDriversLicense) console.log("I can drive :D");
    ```

    ![](/Screenshots/JS_Fun_Part2/StrictMode_VisibleError.png)

    - Có thể thấy khi chúng ta chưa kích hoạt _Strict Mode_ thì chúng ta không được thông báo lỗi về việc thao tác sai tên biến, dẫn đến câu lệnh in ra màn hình _console_ không được thực hiện, và chúng ta không hề biết lỗi nằm ở đâu. Còn khi chúng ta đã kích hoạt _Strict Mode_ thì ở màn hình _console_ xuất hiện một dòng thông báo lỗi là "hasDriversLicense is not defined", do đó chúng ta có thể biết được nguyên nhân phát sinh ra _bug_ và việc chúng ta cần làm là kiểm tra lại tên biến.
    - _Fix bug_:

    ```
    let hasDriversLicense = false;
    const passTest = true;

    if (passTest) hasDriversLicense = true;
    if (hasDriversLicense) console.log("I can drive :D");
    ```

    ![](/Screenshots/JS_Fun_Part2/StrictMode_1.png)

  - Từ hai tác dụng trên ngoài ra còn các tác dụng khác bạn có thể tham khảo thêm [tại đây](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), chúng ta có thể thấy được tầm quan trọng khi sử dụng _Strict Mode_, do đó chúng ta nên kích hoạt _Strict Mode_ trong quá trình viết mã JavaScript.

## 2. Function

- Không chỉ riêng JavaScript, trong tất cả các ngôn ngữ khác, _function_ là một trong những thành phần vô cùng quan trọng và được sử dụng cực kỳ nhiều trong quá trình lập trình.
- Cũng tương tự như khái niệm "biến" trong ngôn ngữ lập trình, khi cần lưu trữ và tái sử dụng nhiều lần một giá trị nào đó thì chúng ta sẽ lưu trữ vào trong một biến để thuận lợi cho việc thao tác với giá trị trong tương lai.
- Khái niệm "funtion" cũng giống vậy, khi chúng ta viết những đoạn mã mà có tính giống nhau và có thể được tái sử dụng nhiều lần trong tương lai thì chúng ta nên "đóng gói" những đoạn code đó trong một _function_, điều đó sẽ giúp chúng ta tránh việc viết lặp lại đoạn mã đó nhiều lần trong một file JavaScript, đồng thời chúng ta có thể dễ dàng thay đổi trong tương lai.
- _Function_ có rất nhiều cách để sử dụng, chúng ta có thể viết một function có một hoặc nhiều tham số truyền vào (tham số được hiểu và đầu vào của _function_), thậm chí không có tham số nào, ngoài ra một _function_ có thể trả về giá trị hoặc không trả về giá trị. Do đó, tùy vào mục đích sử dụng mà chúng ta có thể viết những _function_ khác nhau.
- Cách khai báo _function_:

```
function functionName(parameter1, parameter2) {
  //may or may not have parameters
  statements;

  return value; // may or may not return value
}
```

- Sau khi chúng ta viết xong một _function_, chúng ta có thể chạy hoặc gọi _function_ đó bằng cách viết lại tên của _function_ và truyền tham số nếu có.

```
fuctionName(argument1, argument2);
```

- Ví dụ:

```
function greeting(lastName, birthYear) {
  currentAge = 2022 - birthYear;
  console.log(`Good morning, my name is ${lastName}`, and I'm ${currentAge} years old.);
}

const myName = "Nhan";
const birthYear = 2001;
greeting(myName, birthYear);
```

![](/Screenshots/JS_Fun_Part2/function_example.png)

- Một điều cần lưu ý là tên của tham số đầu vào của _function_ không cần thiết phải giống với tên biến truyền vào, và những tham số đầu vào của _function_ đó được gọi là biến cục bộ (local variable) của _function_, tức là phạm vi hoạt động của những biến đó chỉ nằm trong function mà nó nhận làm tham số tham số truyền vào. Điều này cũng tương tự các biến mà được khai báo trong _function_ thì nó sẽ trở thành biến cục bộ và chỉ được truy xuất bên trong _function_ mà nó được khai báo.

```
function greeting(lastName, birthYear) {
  const currentAge = 2022 - birthYear;
  console.log(
    `Good morning, my name is ${lastName}, and I'm ${currentAge} years old.`
  );
}

const myName = "Nhan";
const birthYear = 2001;
greeting(myName, birthYear);

console.log(currentAge);
```

![](/Screenshots/JS_Fun_Part2/localVariableInFunction.png)

- Như ví dụ bên trên, biến **currentAge** được khai báo trong hàm **greeting**, khi chúng ta thực hiện việc truy xuất biến **currentAge** bên ngoài hàm **greeting** thì chương trình sẽ thông báo lỗi là biến **currentAge** chưa được khai báo. Ngoài ra tham số truyền vào **lastName** và **birthYear** cũng được coi là biến cục bộ của hàm **greeting**.
- Ngoài ra, khi chúng ta thực hiện việc gọi hàm mà hàm đó có trả về một giá trị nào đó, thì chúng ta có thể lưu trữ giá trị trả về của hàm đó vào trong một biến như sau:

```
function calcAge(birthYear) {
  return 2022 - birthYear;
}

const birthYear = 2001;
const currentAge = calcAge(birthYear);
console.log(`I'm ${currentAge} years old`)
```

![](/Screenshots/JS_Fun_Part2/function_returnValue.png)

- Trong JavaScript, ngoài các _function_ mà chúng ta tự viết ra, chúng ta đã sử dụng các function khác như: _console.log()_ là _function_ để in ra màn hình _console_, Number('23') là _function_ để ép kiểu dữ liệu số,... Những _function_ đó được gọi là _built-in funciton_, chúng là những _function_ đã được viết sẵn trong JavaScript, chúng ta chỉ cần gọi để sử dụng thay vì phải viết lại.

## 3. Các loại Function trong JavaScript

### Function Declarations

- _Function Declarations_ là những gì chúng ta đã được biết về định nghĩa khái niệm _function_ trong JavaScript, chúng ta sẽ khai báo một _function_ bằng cách sử dụng từ khóa **function**.

```
function calcAge(birthYear) {
  return 2022 - birthYear;
}

const currentAge = calcAge(2001);
console.log(currentAge)
```

![](/Screenshots/JS_Fun_Part2/functionDeclarations.png)

### Function Expressions

- _Function Expressions_ là cách chúng ta khai báo hàm nhưng không đặt tên, chúng ta gọi đó là hàm ẩn danh (anonymous function), và hàm đó được coi là một biểu thức hàm (function expression). Trong JavaScript, một biểu thức là một giá trị, do đó chúng ta có thể lưu trữ biểu thức hàm trong một biến. Biến đó được coi là một _function_.

```
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const currentAge = calcAge(2001);
console.log(currentAge);
```

![](/Screenshots/JS_Fun_Part2/functionDeclarations.png)

### Sự khác biệt giữa Function Declarations và Function Expressions

- Sự khác biệt giữa 2 loại _function_ trên chúng ta có thể gọi (thực thi) _Function Declarations_ trước khi khai báo, còn _Function Expression_ thì không.
- Ví dụ:

Function Declarations

```
const currentAge = calcAge(2001);

function calcAge(birthYear) {
  return 2022 - birthYear;
}

console.log(currentAge)
```

![](/Screenshots/JS_Fun_Part2/functionDeclarations.png)

Function Expressions

```
const currentAge = calcAge(2001);

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

console.log(currentAge);
```

![](/Screenshots/JS_Fun_Part2/functionExpressions_hoisting.png)

- Nguyên nhân của sự khác biệt này là do quá trình được gọi là **_hoisting_**.

### Arrow Functions

- _Arrow Functions_ là phiên bản _Function Expressions_ viết một cách ngắn gọn bằng cách không sử dụng từ khóa **function**.
- _Arrow Functions_ cực kỳ tiện dụng khi chúng ta cần viết hàm chỉ truyền một tham số và chỉ một dòng lệnh. Ví dụ:

```
const calcAge = birthYear => 2022 - birthYear;

const currentAge = calcAge(2001);
console.log(currentAge)
```

![](/Screenshots/JS_Fun_Part2/functionDeclarations.png)

- Khi chúng ta viết _Arrow Functions_ chỉ một dòng code như ví dụ trên thì chúng ta không cần phải sử dụng **return**, vì mặc định _Arrow Functions_ sẽ tự động trả về giá trị, đồng thời chúng ta cũng không cần dấu ngoặc kép {}.
- Ngoài ra, khi chúng ta cần truyền nhiều hơn tham số hơn và cần nhiều dòng code hơn, thì chúng ta có thể viết _Arrow Functions_ như sau:

```
const yearsUntilRetirement = (birthYear, lastName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;

  return `${lastName} retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(2001, "Nhan"));
```

![](/Screenshots/JS_Fun_Part2/arrowFunctions.png)

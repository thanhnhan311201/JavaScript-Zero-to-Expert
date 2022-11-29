##### Table of content

- [Lý thuyết nền tảng về JavaScript - Part 2](#lý-thuyết-nền-tảng-về-javascript---part-2)
  - [1. Strict mode](#1-strict-mode)
  - [2. Function](#2-function)
  - [3. Các loại Function trong JavaScript](#3-các-loại-function-trong-javascript)
    - [Function Declarations](#function-declarations)
    - [Function Expressions](#function-expressions)
    - [Sự khác biệt giữa Function Declarations và Function Expressions](#sự-khác-biệt-giữa-function-declarations-và-function-expressions)
    - [Arrow Functions](#arrow-functions)
  - [4. Array](#4-array)
    - [Khai báo Array](#khai-báo-array)
    - [Truy xuất các phần tử trong Array](#truy-xuất-các-phần-tử-trong-array)
    - [Các kiểu dữ liệu có thể sử dụng trong Array](#các-kiểu-dữ-liệu-có-thể-sử-dụng-trong-array)
    - [Các phương thức cơ bản của Array](#các-phương-thức-cơ-bản-của-array)
      - [push(), unshift()](#push-unshift)
      - [pop(), shift()](#pop-shift)
      - [indexOf(), includes()](#indexof-includes)
  - [5. Object](#5-object)
    - [Khái niệm Object và cách khai báo](#khái-niệm-object-và-cách-khai-báo)
    - [Cách truy xuất giá trị trong Object](#cách-truy-xuất-giá-trị-trong-object)
    - [Cách thêm thuộc tính mới trong Object](#cách-thêm-thuộc-tính-mới-trong-object)
    - [Object Methods](#object-methods)
  - [6. Iteration](#6-iteration)
    - [The for Loop](#the-for-loop)
      - [Khái niệm và cách sử dụng](#khái-niệm-và-cách-sử-dụng)
      - [Vòng lặp for trong Array](#vòng-lặp-for-trong-array)
      - [Continue và Break](#continue-và-break)
      - [Loops in Loops](#loops-in-loops)
    - [The while Loop](#the-while-loop)

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

## 4. Array

### Khai báo Array

- Trong JavaScript, có 2 cách để khai báo một Array.

**Cách 1: Literal Syntax**

```
const array = ["Nhan Phan", 21, "male"]
```

**Cách 2: Sử dụng từ khóa new**

```
const array = new Array("Nhan Phan", 21, "male")
```

### Truy xuất các phần tử trong Array

- Để truy xuất các phần tử trong Array, chúng ta sẽ dùng dấu ngoặc vuông [], trong dấu ngoặc vuông chúng ta sẽ điền một số tuong ứng với vị trí của phần tử mà chúng ta muốn truy xuất.
- Một điều lưu ý, vị trí _(index)_ của _array_ được đánh số từ 0 tới n-1.

```
const array = ["Nhan Phan", 21, "male"]
console.log(array[0])
console.log(array[1])
console.log(array[2])

// Nhan Phan
// 21
// male
```

- Chúng ta có thể truy xuất phần tử cuối cùng trong mảng bằng phương thức `array.length`, phương thức đó sẽ trả về số phần tử có trong mảng.

```
const array = ["Nhan Phan", 21, "male"]
console.log(array[array.length -1])

Output:
// male
```

- Ngoài việc truy xuất và lấy giá trị của phần tử trong array, chúng ta có thể sử dụng dấu ngoặc vuông để thay đổi giá trị của phần tử mà chúng ta muốn.

```
const array = ["Nhan Phan", 21, "male"]
console.log(array)
array[1] = 22
console.log(array)

// ['Nhan Phan', 21, 'male']
// ['Nhan Phan', 22, 'male']
```

- Một điều lưu ý, khi chúng ta khai báo một array bằng từ khóa const thì chúng ta vẫn có thể thay đổi giá trị của các phần tử có trong array, tuy nhiên chúng ta không thể nào thay đổi nguyên một array.

```
const array = ["Nhan Phan", 21, "male"]
array = ["Nhan Phan", 21]
console.log(array)

// Uncaught TypeError: Assignment to constant variable.
```

### Các kiểu dữ liệu có thể sử dụng trong Array

- Ngoài việc chứa các kiểu dữ liệu như _string_, _number_; array trong JavaScript có thể chứa các kiểu dữ liệu khác như _null_, _undefined_, _boolean_,... Ngoài ra có thể chứa một biến, một biểu thức hoặc thậm chí là một array khác.

```
const friends = ["Bao Phan", "Duc Huy"]
const _name = "Nhan Phan"

const infors = [_name, 2022 - 2001, "male", friends]

console.log(infors)
console.log(infors[3][0])

// ['Nhan Phan', 21, 'male', ['Bao Phan', 'Duc Huy']]
// Bao Phan
```

### Các phương thức cơ bản của Array

#### push(), unshift()

- `push()` là phương thức cho phép chúng ta thêm một phần tử vào cuối của array.

```
const array = ["Nhan Phan", 21, "male"]
array.push("Ho Chi Minh city")
console.log(array)

// ['Nhan Phan', 21, 'male', 'Ho Chi Minh city']
```

- Ngược lại với `push()`, `unshift()` là phương thức cho phép chúng ta thêm một phần tử vào đầu của array.

```
const array = ["Nhan Phan", 21, "male"]
array.unshift("Ho Chi Minh city")
console.log(array)

// ['Ho Chi Minh city', 'Nhan Phan', 21, 'male']
```

- Cả phương thức `push()` và `unshift()` đều trả về kích thước mới của array.

```
const array = ["Nhan Phan", 21]
console.log(array.push("Ho Chi Minh city"))
console.log(array)
console.log(array.unshift("male"))
console.log(array)

// 3
// ['Nhan Phan', 21, 'Ho Chi Minh city']
// 4
// ['male', 'Nhan Phan', 21, 'Ho Chi Minh city']
```

#### pop(), shift()

- Tương tự như 2 phương thức `push()` và `unshift()`, phương thức `pop()` được sử dụng để xóa phần tử cuối cùng của array, còn phương thức `shift()` được sử dụng để xóa phần tử đầu tiên của array.
- Và cả 2 phương thức trên đều trả về phần tử bị xóa.

```
const array = ["Ho Chi Minh city", "Nhan Phan", 21, "male"]
const lastElement = array.pop()
const firstElement = array.shift()

console.log(array)
console.log(lastElement)
console.log(firstElement)

// ['Nhan Phan', 21]
// male
// Ho Chi Minh city
```

#### indexOf(), includes()

- Phương thức `indexOf()` được sử dụng để lấy vị trí của phần tử mà chúng ta mong muốn, nếu phần tử có trong mảng thì phương thức sẽ trả về vị trí tương ứng, ngược lại sẽ trả về -1.

```
const array = ["Ho Chi Minh city", "Nhan Phan", 21, "male"]
console.log(array.indexOf("Bao Phan"))
console.log(array.indexOf("male"))

// -1
// 3
```

- Phương thức `includes()` sẽ tương tự như phương thức `indexOf()`, trả về _true_ nếu phần tử có trong array, _fale_ nếu phần tử không có trong array.

```
const array = ["Ho Chi Minh city", "Nhan Phan", 21, "male"]
console.log(array.includes("Bao Phan"))
console.log(array.includes("male"))

// false
// true
```

## 5. Object

### Khái niệm Object và cách khai báo

- Đối với kiểu dữ liệu Array, mỗi giá trị của từng phần tử trong Array đều "định danh" thông qua vị trí của từng phần tử đó, nên chúng ta chỉ có thể truy xuất từng phần tử bằng vị trí.
- Trong JavaScript có một kiểu dữ liệu cho phép chúng ta đặt tên từng giá trị ở bên trong, và chúng ta có thể truy xuất các giá trị đó thông qua tên của từng phần tử đấy. Đó là kiểu dữ liệu Object.
- Từng phần tử trong Object sẽ được biểu diễn theo từng cặp name-value (key-value), khác với Array các phần tử sẽ được chứa trong dấu ngoặc vuông [], đối với Object sẽ là dấu ngoặc nhọn {}.
- Cú pháp khai báo:

```
const newObject = {
  key: value,
  key: value,
  ...
}
```

- Ví dụ:

```
const student = {
  firstName: "Phan",
  lastName: "Nhan",
  age: 21,
  gender: "male"
}

console.log(student)

// {firstName: "Phan", lastName: "Nhan", age: 21, gender: "male"}
```

- Giá trị của một thuộc tính ngoài các kiểu dữ liệu nguyên thủy như: _number_, _string_, _boolean_,... thì object có thể chứa các giá trị khác như _array_, _object_, hoặc thậm chí là một function. Như đã được nhắc trong phần [Function Expressions](#function-expressions), function là một dạng giá trị nên object vẫn có thể chứa nó.

### Cách truy xuất giá trị trong Object

- Đối với Array, thứ tự các phần tử trong Array cực kỳ quan trọng. Vì chúng ta truy xuất các phần tử trong Array bằng vị trí tương ứng của các phần tử.
- Ngược lại với Array, thứ tự các phần tử trong Object không quan trọng, bởi vì chúng ta sẽ giá trị của các phần tử thông qua key (tên của thuộc tính).
- Có 2 cách để lấy giá trị từ một thuộc tính trong Object:

  - **Dot Notation**

    - Cách đầu tiên là sử dụng **dấu chấm '.'** . Chúng ta sẽ truy xuất giá trị của một thuộc tính bằng cách sử dụng dấu chấm phía sau Object, sau đó là tên của thuộc tính. - Ví dụ:

    ```
    const student = {
      firstName: "Phan",
      lastName: "Nhan",
      age: 21,
      gender: "male"
    }

    console.log(student.lastName)

    // "Nhan"
    ```

    - Đối với cách sử dụng dấu chấm, thì chúng ta phải truyền vào thuộc tính hoàn chỉnh cuối cùng, như ví dụ ở trên là "lastName", không được truyền vào một biến hay một biểu thức.

  - **Bracket Notation**

    - Cách thứ hai là sử dụng **dấu ngoặc vuông []**. Khác với cách trên, chúng ta sẽ sử dụng dấu ngoặc vuông để truy xuất giá trị của một thuộc tính.
    - Đầu vào truyền vô là tên của một thuộc tính được viết dưới dạng chuỗi, ngoài ra chúng ta có thể truyền vô một biến hoặc một biểu thức.
    - Ví dụ:

    ```
    const student = {
      firstName: "Phan",
      lastName: "Nhan",
      age: 21,
      gender: "male"
    }

    const nameKey = 'Name';
    console.log(student[`last${nameKey}`])
    console.log(student['age'])

    // "Nhan"
    // 21
    ```

- Trong JavaScript, khi chúng ta truy xuất một giá trị của thuộc tính chưa được khai báo, thì kết quả được trả về _undefined_.

```
const student = {
  firstName: "Phan",
  lastName: "Nhan",
  age: 21,
  gender: "male"
}

console.log(student.city)

// undefined
```

### Cách thêm thuộc tính mới trong Object

- Để thêm thuộc tính mới trong Object, chúng ta sử dụng **dot notation** hoặc **bracket notation** để tạo thuộc tính mới, sau đó gán giá trị mới cho chúng.
- Ví dụ:

```
const student = {
  firstName: "Phan",
  lastName: "Nhan",
  age: 21,
};

student.gender = "male";
student['city'] = "Ho Chi Minh city";
console.log(student);

// {firstName: "Phan", lastName: "Nhan", age: 21, gender: "male", city: "Ho Chi Minh city"}
```

### Object Methods

- Như đã được nhắn trong phần định nghĩa khái niệm của Object, chúng ta có thể khai báo một biểu thức hàm như giá trị của một thuộc tính trong object. Và khi một hàm được gắn vào một object thì sẽ được coi là phương thức của object đó.
- Ví dụ:

```
const student = {
  firstName: "Phan",
  lastName: "Nhan",
  birthYear: 2001,
  gender: "male",

  calcAge: function (birthYear) {
    return 2022 - birthYear;
  }
}

console.log(student.calcAge(2001))

// 21
```

- Ở ví dụ trên là chúng ta đang truyền vào tham số **birthYear** từ bên ngoài vào phương thức **calcAge()**, để có thể sử dụng được thuộc tính **birthYear** trực tiếp bên của đối tượng **student**, chúng ta sẽ sử dụng một biến đặc biệt mà JavaScript đã cung cấp, đó là từ khóa **this**.
- Từ khóa **this** đại diện cho object phương thức này gọi, nói cách khác từ khóa **this** sẽ bằng đối tượng gọi phương thức.
- Ví dụ:

```
const student = {
  firstName: "Phan",
  lastName: "Nhan",
  birthYear: 2001,
  gender: "male",

  calcAge: function () {
    console.log(this)
  }
}

console.log(student.calcAge())

// {firstName: 'Phan', lastName: 'Nhan', birthYear: 2001, gender: 'male', calcAge: ƒ}
```

- Như ví dụ trên có thể thay khi chúng ta log từ khóa **this** ra thì kết quả chúng ta nhận được là đối tượng **student**. Vì lúc này đối tượng đang gọi phương thức **calcAge()** là **student**, nên từ khóa **this** sẽ bằng đối tượng **student**.

```
const student = {
  firstName: "Phan",
  lastName: "Nhan",
  birthYear: 2001,
  gender: "male",

  calcAge: function (currentYear) {
    this.age = currentYear - this.birthYear;
    return this.age;
  },
};

console.log(student.calcAge(2022));
console.log(student.age);

// 21
// 21
```

```
const student = {
  firstName: "Phan",
  lastName: "Nhan",
  birthYear: 2001,
  job: "Software Engineer",
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSumnary: function () {
    return `${this.lastName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${
      this.hasDriversLicense === true ? "a" : "no"
    } driver's license`;
  },
};

console.log(student.getSumnary());

// Nhan is a 21-years old Software Engineer, and he has driver's license
```

## 6. Iteration

- Vòng lặp cho phép chúng ta lặp đi lặp lại những câu lệnh giống hệt nhau.
- Ở trong JavaScript có 2 dạng vòng lặp: for loop và while loop.

### The for Loop

#### Khái niệm và cách sử dụng

- Cấu trúc của vòng lặp for:

```
for (init counter, condition, increase or decrease counter) {
  statement;
}
```

- Cách của vòng lặp for thực thi là ban đầu vòng lặp sẽ tạo một biến counter, sau đó kiểm tra điều kiện của biến counter đó, nếu điều kiện trả về true thì sẽ thực thi các câu lệnh trong block, sau đó thực hiện việc tăng hoặc giảm biến counter. Sau 1 vòng lặp sẽ tiếp tục kiểm tra lại điều kiện, nếu đúng thì sẽ lặp lại như thế, nếu sai thì kết thúc (không thực thi các câu lệnh trong block nữa).
- Cứ mỗi lần thực hiện lệnh trong block xong thì vòng lặp for sẽ tăng hoặc giảm counter.
- Để hiểu hơn, chúng ta sẽ tạo một bộ đếm số tự nhiên từ 1 đến 10:

Chúng ta sẽ lặp cho đến khi counter nhỏ hơn 11

```
for (let number = 1; number < 11; number++) {
  console.log(number);
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

#### Vòng lặp for trong Array

- Để có truy xuất tất cả các phần tử có trong Array, thay vì chúng ta phải viết từng câu lệnh truy xuất, chúng ta có thể sử dụng vòng lặp for.
- Ví dụ:

```
const student = ["Nhan", 21, "male"];

console.log(student[0]);
console.log(student[1]);
console.log(student[2]);

// Index starts at 0,
// because the index of the first element of the array is 0
for (let index = 0; index < student.length; index++) {
  console.log(student[index]);
}

// Nhan
// 21
// male
// Nhan
// 21
// male
```

#### Continue và Break

- Continue và Break là 2 câu lệnh quan trọng trong vòng lặp for.
- Continue là câu lệnh tiếp tục vòng lặp tiếp theo, nó sẽ bỏ qua những câu lệnh ở sau nó.

```
const student = ["Nhan", 2001, 21, "male"];

for (let i = 0; i < student.length; i++) {
  if (typeof student[i] === "number") {
    continue;
  }
  console.log(student[i]);
}

// "Nhan"
// "male"
```

Ở ví dụ trên vòng lặp chỉ in ra các giá trị nào không phải là _number_, do đó khi câu lệnh kiểm tra điều kiện phần tử nào là number thì tiếp tục vòng lặp tiếp theo và bỏ qua câu lệnh log ở bên dưới.

- Break là câu lệnh kết thúc vòng lặp ngay lập tức.

```
for (let i = 1; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// 1
// 2
// 3
// 4
```

Ở ví dụ trên chúng ta đang đếm số từ 1 tới 9, tuy nhiên khi đếm tới số 5 do có câu lệnh break, nên nguyên vòng lặp for của chúng ta bị kết thúc, nên các số sau đó như 6 7 8 9 không được log ra.

#### Loops in Loops

- Chúng ta có thể tích hợp nhiều vòng lặp for lồng vào nhau.
- Về cơ chế khi vòng lặp bên ngoài bắt đầu vòng lặp đầu tiên, thì vòng lặp bên trong sẽ lặp qua hết tất cả các vòng lặp của nó, sau đó vòng lặp bên ngoài sẽ tiếp tục vòng lặp tiếp theo.
- Để hiểu rõ hơn, quan sát ví dụ sau:

```
const dates = ["Monday", "Tuesday", "Wednesday"];
const weeks = ["first week", "second week"];

for (let week = 0; week <= weeks.length; week++) {
  for (let date = 0; date < dates.length; date++) {
    console.log(`Today is ${dates[date]} of the ${weeks[week]}`);
  }
}

// Today is Monday of the first week
// Today is Tuesday of the first week
// Today is Wednesday of the first week
// Today is Monday of the second week
// Today is Tuesday of the second week
// Today is Wednesday of the second week
// Today is Monday of the undefined
// Today is Tuesday of the undefined
// Today is Wednesday of the undefined
```

Như ở ví dụ trên, khi vòng lặp weeks bắt đầu lặp vòng lặp đầu tiên, thì vòng lặp dates sẽ log ra tất các date có trong mảng dates, sau đó vòng lặp weeks mới lặp vòng lặp tiếp theo.

### The while Loop

- Khác với vòng lặp for, chúng ta chỉ sử dụng vòng lặp for khi chúng biết trước giới hạn của vòng lặp là bao nhiêu lần. Còn đối với vòng lặp while được sử dụng khi chúng ta không biết trước vòng lặp này sẽ chạy bao nhiêu lần, do đó vòng lặp while không cần biến counter và cũng như phải tăng hoặc giảm biến counter. Và đó là ý nghĩa cũng như sự khác biệt của vòng lặp while so với vòng lặp for.
- Tuy nhiên vòng lặp while sẽ được sử dụng "linh động" hơn so với vòng lặp for, chúng ta có thể sử dụng vòng lặp while với biến counter như vòng lặp for.
- Cấu trúc vòng lặp while:

```
while (condition) {
  statement;
}
```

- Mỗi lần lặp, vòng lặp while sẽ kiểm tra điều kiện trước, nếu true thì sẽ thực thi các câu lệnh trong block sau đó tiếp tục vòng lặp, nếu false thì sẽ kết thúc vòng lặp.
- Ví dụ:

Chúng ta sẽ lắc con xúc xắc ngẫu nhiên, nếu con số của xúc xắc không phải là số 6 thì in ra màn hình và tiếp tục lắc xúc xắc, nếu là số 6 thì kết thúc

```
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);

  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log(`Your last dice is ${dice}. Loop is about to end...`);
  }
}

// You rolled a 4
// You rolled a 5
// You rolled a 1
// Your last dice is 6. Loop is about to end...
```

##### Table of content

- [Lý thuyết nền tảng về JavaScript](#lý-thuyết-nền-tảng-về-javascript)
  - [1. JavaScript là gì?](#1-javascript-là-gì)
  - [2. Các quy ước khai báo biến trong JavaScript](#2-các-quy-ước-khai-báo-biến-trong-javascript)
  - [3. Các loại dữ liệu trong JavaScript](#3-các-loại-dữ-liệu-trong-javascript)
    - [Kiểu dữ liệu Primitive (dữ liệu nguyên thủy)](#kiểu-dữ-liệu-primitive-dữ-liệu-nguyên-thủy)
      - [a. Number](#a-number)
      - [b. String](#b-string)
      - [c. Boolean](#c-boolean)
      - [d. Undefined](#d-undefined)
      - [e. Null](#e-null)
      - [f. Symbol (ES2015)](#f-symbol-es2015)
      - [g. BigInt (ES2020)](#g-bigint-es2020)
    - [Dynamic Typing](#dynamic-typing)
    - [Typeof](#typeof)
  - [4. Các cách khai báo biến trong JavaScript](#4-các-cách-khai-báo-biến-trong-javascript)
    - [let](#let)
    - [const](#const)
    - [var](#var)
  - [5. Các toán tử cơ bản trong JavaScript](#5-các-toán-tử-cơ-bản-trong-javascript)
    - [Toán tử toán học](#toán-tử-toán-học)
    - [Toán tử gán](#toán-tử-gán)
    - [Toán tử so sánh](#toán-tử-so-sánh)
    - [Toán tử luận lý](#toán-tử-luận-lý)
  - [6. Thứ tự ưu tiên các toán tử trong JavaScript](#6-thứ-tự-ưu-tiên-các-toán-tử-trong-javascript)
  - [7. Template Literals](#7-template-literals)
  - [8. Biểu thức điều kiện (If / Else Statements)](#8-biểu-thức-điều-kiện-if--else-statements)

# Lý thuyết nền tảng về JavaScript

## 1. JavaScript là gì?

- Theo Jonas Schmedtmann:"JavaScript is a high-level, object-oriented, multi-paradigm programming language".
- JavaScript là ngôn ngữ lập trình thông dịch với khả năng hướng đối tượng. Được phát triển bởi Brendan Eich vào năm 1995, là một trong những ngôn ngữ chính để lập trình web và vô vùng phổ biến với các web developer.
- JavaScript được tạo ra cho phát triển các trang web động. Một chương trình JS được gọi là script, nó có thể được đính kèm vời bất kỳ trang web HTML nào. Các script sẽ tự động chạy khi trang được tải.

## 2. Các quy ước khai báo biến trong JavaScript

- Trong JavaScript, chúng ta nên đặt tên các biến theo quy chuẩn camelCase.
- Theo quy tắc camelCase nếu chúng ta đặt tên biến chỉ có 1 từ thì chúng ta lên viết thường.

```
let first = "Nhan";
```

- Còn nếu có nhiều hơn một từ thì chúng ta nên viết thường chữ cái đầu còn các chữ cái sau nên viết hoa.

```
let firstName = "Nhan";
let firstPersonName = "Nhan";
```

- Ngoài ra có một cách đặt tên ít phổ biến hơn thay vì viết hoa thường chữ cái đầu, chúng ta có thể viết chèn dấu "\_" giữa các chữ.

```
let first_name = "Nhan"
let first_person_name = "Nhan"
```

- Tên biến trong JavaScript chỉ chứa các ký tự bao gồm: chữ số, chữ cái, "\_", "$".
- Một điều lưu ý khi đặt tên trong JavaScript là không được đặt tên bắt đầu bắt chữ số.

Cách đặt tên biến sai:

```
let 3years = 3;
```

Cách đặt tên biến đúng:

```
let threeYears = 3;
```

- Ngoài ra chúng ta không nên đặt tên biến trùng với từ khóa riêng của JavaScript, muốn đặt tên trùng với từ khóa đó chúng ta nên thêm dấu "\_" hoặc "$" trước tên biến.

Cách đặt tên biến sai:

```
let new = "shoes";
let function = "change the number";
```

Cách đặt tên biến đúng:

```
let _new = "shoes";
let $function = "change the number";
```

- Có một trường hợp đặt biệt là từ khóa riêng _name_, tuy là một từ khóa riêng của JavaScript nhưng chúng ta vẫn có thể sử dụng để đặt tên biến được. Tuy nhiên trong một số trường hợp chương trình sẽ báo lỗi, do đó chúng ta nên thêm dấu "\_" hoặc "$".
- Một quy ước khác là chúng ta không nên đặt tên biến bắt đầu bằng chữ cái viết hoa, bởi vì chúng ta chỉ nên áp dụng cách đặt tên đó trong khi chúng ta lập trình hướng đối tượng.
- Nếu chúng ta muốn đặt biến là một hằng số, thì chúng ta nên viết hoa cho tất cả các chữ cái.

```
let PI = 3.1415;
```

- Một lưu ý cuối cùng là chúng ta phải đặt tên biến phải thật sự có ý nghĩa, nó phải có liên quan tới giá trị mà nó lưu giữ, không nên đặt tên biến lan man.

Cách đặt tên biến sai:

```
let job1 = "Programmer";
let job2 = "Teacher";
```

Cách đặt tên biến đúng:

```
let firstJob = "Programmer";
let currentJob = "Teacher";
```

## 3. Các loại dữ liệu trong JavaScript

Trong JavaScript có 2 kiểu dữ liệu chính: _object_ và _primitive_.

### Kiểu dữ liệu Primitive (dữ liệu nguyên thủy)

**Primitive Value** hay còn được gọi là dữ liệu nguyên thủy bao gồm 7 kiểu dữ liệu: _number_, _string_, _boolean_, _undefined_, _null_, _symbol_, _bigint_.

#### a. Number

- Trong JavaScript number là kiểu dữ liệu số và nó áp dụng được cho cả số thập phân và số nguyên.
- Khi khai báo kiểu dữ liệu number, số thập phân và số nguyên đều được khai báo như nhau, do đó số thập phân sẽ được hiểu như số nguyên.
- Cách khai báo:

```
let age = 21;
```

#### b. String

- String là kiểu dữ liệu dùng để chứa một chuỗi các kí tự, được sử dụng cho các câu hoặc văn bản.
- Giá trị của của kiểu dữ liệu _string_ sẽ được đặt trong dấu ngoặc đơn **'** hoặc dấu ngoặc kép **"**.
- Cách khai báo:

```
let firstName = 'Nhan';
```

#### c. Boolean

- Boolean là kiểu dữ liệu logic có thể nhận một trong hai giá trị là _true_ hoặc _false_.
- Boolean được sử dụng để đưa ra quyết định.
- Cách khai báo"

```
let fullAge = true;
```

#### d. Undefined

- Khi một biến được khai báo mà không được gán bất kỳ giá trị nào, thì biến đó sẽ được gán trị là _undefined_, và biến đó được gọi là biến chưa xác định.
- Về mặt cơ bản chúng ta có thể hiểu _undefined_ là giá trị rỗng (emty value).
- Cách khai báo:

```
let children;
```

#### e. Null

- Null cũng được hiểu là giá trị rỗng (emty value), tuy nhiên _null_ được sử dụng trong các trường hợp khác nhau.

#### f. Symbol (ES2015)

- Symbol được sử dụng để khai báo một giá trị là duy nhất và không thể thay đổi.

#### g. BigInt (ES2020)

- _BigInt_ cũng là kiểu dữ liệu số tương tự như _number_, tuy nhiên có một chút khác biệt là _bigInt_ dùng để biểu diễn các số nguyên có giá trị quá lớn mà kiểu dữ liệu _number_ không thể biểu diễn.

### Dynamic Typing

- Trong JavaScript, khi khởi tạo một biến chúng ta không cần khai báo thủ công kiểu dữ liệu của giá trị mà biến đó chứa. Bởi vì JavaScript sẽ tự động xác định kiểu dữ liệu của giá trị khi được lưu trữ trong một biến.
- Do đó trong JavaScript khi chúng ta nói về kiểu dữ liệu là đang nói về kiểu dữ liệu của giá trị mà biến đó lưu trữ, chứ không phải nói về kiêu dữ liệu của biến đó.
- Ngoài ra, với _Dynamic Typing_ chúng ta có thể thoải mái gán giá trị mới với kiểu dữ liệu khác cho một biến đã được khai báo từ trước. Ví dụ một biến x ban đầu được khai báo với kiểu dữ liệu là _number_, tuy nhiên sau đó nó có thể được gán với bất kỳ kiểu dữ liệu khác như _string_.

### Typeof

- Trong JavaScript để kiểm tra kiểu dữ liệu của giá trị mà biến đang lưu trữ, chúng ta sẽ sử dụng _typeof_.
- _Typeof_ sẽ trả kết quả là là kiểu dữ liệu của giá trị mà biến đó đang lưu trữ, mà kết quả sẽ được biểu diễn dưới dạng string.
- Cách sử dụng:

```
let firstName = 'Nhan';
console.log(firstName);
console.log(typeof firstName);
```

- Output:

![](/Screenshots/typeof_output.png)

## 4. Các cách khai báo biến trong JavaScript

Trong JavaScript có 3 kiểu để khai báo biến: let, var và const.

### let

- Trong JavaScript khi chúng ta cần khai báo một biến mà biến đó trong tương lai có thể sẽ được thay đổi giá trị, thì chúng ta nên sử dụng từ khóa _let_ để khai báo biến đó.
- Những biến được khai báo bằng _let_ có thể thay đổi được giá trị trong tương lai, và ngoài ra dựa vào đặc tính của _let_ mà chúng ta thường dùng để khai báo các biến rỗng (emty variable).

```
let firstName = 'Nhan';
let children;
```

### const

- Ngược lại với _let_, từ khóa _const_ được sử dụng để khai báo các biến không thay đổi được trong tương lai.
- Chúng ta thường dùng _const_ để khai báo các biến hằng số, hoặc các biến mà họ không muốn thay đổi giá trị (biến bất biến).

```
const PI = 3.14
```

- Trong thực tế, khi cần khai báo một biến chúng ta thường sử dụng _const_ để khai báo.
- Còn _let_ chỉ nên dùng khi chúng ta biết chắc chắn biến đó sẽ có thay đổi trong tương lai, mục đích là để hạn chế việc thay đổi giá trị của biến để tránh gây các lỗi (bug) không mong muốn trong quá trình lập trình.

### var

- Về mặt cơ bản _var_ cũng tương tự như _let_, cũng được dùng để khai báo biến mà có thể thay đổi được trong tương lai.
- Tuy nhiên có một chút khác biệt, _var_ là **function-scope** trong khi đó _let_ là **block-scope**.
- Trong thực tế chúng ta chỉ nên sử dụng _let_ và _const_, hạn chế sử dụng _var_ để khái báo biến.

```
var age = 31;
```

## 5. Các toán tử cơ bản trong JavaScript

Toán tử là phương thức để chúng ta thay đổi giá trị hoặc thay đổi các giá trị nhằm thực hiện cho một tác vụ nào đó.

### Toán tử toán học

- Toán tử cộng các số:

```
let x = 5;
let y = 4;
let z = x + y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/add_number_output.png)

- Toán tử cộng các chuỗi và số:

```
let age = 21;
console.log("I am " + age + " years old");
```

![](/Screenshots/JS_Fun_Part1/add_string_number_output.png)

- Toán tử trừ

```
let x = 5;
let y = 4;
let z = x - y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/subtract_number_output.png)

- Toán tử nhân

```
let x = 5;
let y = 4;
let z = x * y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/multiply_number_output.png)

- Toán tử lũy thừa

```
let x = 5;
let y = 4;
let z = x ** y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/exponentiation.png)

- Toán tử chia

```
let x = 20;
let y = 4;
let z = x / y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/division.png)

- Toán tử chia lấy dư

```
let x = 21;
let y = 4;
let z = x % y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/module.png)

- Toán tử tăng 1 đơn vị

```
let x = 20;
x++;
console.log(x);
```

![](/Screenshots/JS_Fun_Part1/increment.png)

- Toán tử giảm 1 đơn vị

```
let x = 20;
x--;
console.log(x);
```

![](/Screenshots/JS_Fun_Part1/decrement.png)

### Toán tử gán

- x = y

```
x = y;
```

- x = x + y

```
x += y;
```

- x = x - y

```
x -= y;
```

- x = x \* y

```
x *= y;
```

- x = x / y

```
x /= y;
```

- x = x % y

```
x %= y;
```

- x = x \*\* y

```
x **= y;
```

### Toán tử so sánh

- Toán tử so sánh bằng

```
let x = 20;
let y = 21;
let z = x == y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/equal_to.png)

- Toán tử so sánh bằng "nghiêm ngặt"

```
let x = 20;
let y = "20";
let z = x == y;
let j = x === y;
console.log(z);
console.log(j);
```

![](/Screenshots/JS_Fun_Part1/equal_value_type.png)

Toán tử "==" trả về đúng vì chuỗi "20" được chuyển thành số 20 trước khi việc so sánh được thực hiện. Trong khi "===" cho thấy rằng đây là 2 kiểu dữ liệu khác nhau nên trả về sai.

- Toán tử so sánh không bằng

```
let x = 20;
let y = 21;
let z = x != y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/not_equal_to.png)

- Toán tử so sánh không bằng "nghiêm ngặt" (not equal value or not equal type)

```
let x = 20;
let y = "20";
let z = x != y;
let j = x !== y;
console.log(z);
console.log(j);
```

![](/Screenshots/JS_Fun_Part1/not_equal_value_type.png)

Toán tử "!=" trả về sai vì chuỗi "20" được chuyển thành số 20 trước khi việc so sánh được thực hiện. Trong khi "!==" cho thấy rằng đây là 2 số bằng nhau tuy nhiên khác kiểu dữ liệu nên trả về đúng.

- Toán tử so sánh lớn hơn

```
let x = 20;
let y = 19;
let z = x > y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/greater_than.png)

- Toán tử so sánh bé hơn

```
let x = 20;
let y = 19;
let z = x < y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/less_than.png)

- Toán tử so sánh lớn hơn hoặc bằng

```
let x = 20;
let y = 20;
let z = x >= y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/greater_equal.png)

- Toán tử so sánh bé hơn hoặc bằng

```
let x = 20;
let y = 20;
let z = x <= y;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/greater_equal.png)

- Toán tử ba ngôi

```
let x = 20;
let z = x > 19 ? true : false;
console.log(z);
```

![](/Screenshots/JS_Fun_Part1/ternary.png)

### Toán tử luận lý

- Toán tử "and"

```
console.log(20 == 20 && "abc" == "acb");
```

![](/Screenshots/JS_Fun_Part1/and.png)

- Toán tử "or"

```
console.log(20 == 20 || "abc" == "acb");
```

![](/Screenshots/JS_Fun_Part1/or.png)

- Toán tử "not"

```
console.log(! true);
```

![](/Screenshots/JS_Fun_Part1/not.png)

## 6. Thứ tự ưu tiên các toán tử trong JavaScript

![](/Screenshots/JS_Fun_Part1/operator_precedence.png)

- Trong JavaScript khi thực hiện một dòng lệnh, nó sẽ tìm kiếm các phép toán tử có trong dòng lệnh đó sau đó dựa vào thứ tự ưu tiên của các phép toán tử (hình trên) để quyết định xem nên thực hiện phép toán tử nào trước.

```
console.log(10 - 5 > 10 - 2);
```

![](/Screenshots/JS_Fun_Part1/not.png)

Trong câu lệnh trên có 2 phép toán tử là trừ và so sánh lớn hơn, dựa vào bảng thứ tự ưu tiên thấy được phép trừ có thứ tự ưu tiên cao hơn (tham khảo hình trên) nên đã được thực hiện trước phép toán tử so sánh lớn hơn. Do đó kết quả của câu lệnh trên là **false**.

## 7. Template Literals

- Trong JavaScript, khi chúng ta muốn nối các chuỗi với nhau hoặc nối các chuỗi với số thì chúng ta sẽ sử dụng toán tử cộng, tuy nhiên để giúp cho dòng lệnh được gọn gàng hơn thì chúng ta có thể sử dụng _template literals_ (string template) bằng cách sử dụng cặp dấu **``**.

```
const name = "Nhan";
const age = 21;
const job = "Sofware Developer";

console.log("I'm " + name + ", a " + age + " years old " + job);
console.log(`I'm ${name}, a ${age} years old ${job}`);
```

![](/Screenshots/JS_Fun_Part1/template_literals_1.png)

- Ngoài ra chúng ta có thể sử dụng cặp dấu **``** để thay thể cho dấu ngoặc đơn và ngoặc kép khi muốn biểu diễn string.

```
const introduction = `I'm Nhan, a 21 years old Sofware Developer`;
console.log(introduction);
```

![](/Screenshots/JS_Fun_Part1/template_literals_2.png)

- Khi chúng ta muốn biểu diễn một chuỗi câu nhiều dòng, ngoài cách sử dụng lệnh xuống dòng chúng tả cũng có thể sử dụng _template literals_ để thực hiện điều đó.

```
console.log("I'm Nhan,\n\
a 21 years old\n\
Sofware Developer");
console.log(`I'm Nhan,
a 21 years old
Sofware Developer`);
```

![](/Screenshots/JS_Fun_Part1/template_literals_3.png)

- Bên cạnh đó _template literals_ rất hữu dụng khi chúng ta muốn tạo các mẫu html để thêm vào trang web.

## 8. Biểu thức điều kiện (If / Else Statements)

- Cấu trúc:

```
if (condition) {
  statements...
} else if (condition) {
  statements...
} else {
  statements...
}
```

- Khi các điều kiện của các biểu thức _if_ và _else if_ là **true** thì các câu lệnh nằm trong các block tương ứng với biểu thức đúng sẽ được thực hiện, nếu có một biểu thức là **false** thì JavaScript sẽ skip biểu thức đó và chuyển sang xét biểu thức tiếp theo, nếu tất cả các biểu thức đều sai thì biểu thức _else_ sẽ được thực hiện.
- Một điều lưu ý biểu thức _else if_ và _else_ có thể có hoặc có thể không.
- Ví dụ:

```
const age = 18;

if (age >= 18) {
  console.log("You can start driving license.");
} else {
  const yearLeft = 18 - age;
  console.log(`You is too young. Wait another ${yearLeft} years.`);
}
```

![](/Screenshots/JS_Fun_Part1/if_else_output.png)

# Lý thuyết nền tảng về JavaScript

## 1. JavaScript là gì?

- Theo Jonas Schmedtmann:"JavaScript is a high-level, object-oriented, multi-paradigm programming language."
- JavaScript là ngôn ngữ lập trình thông dịch với khả năng hướng đối tượng. Được phát triển bởi Brendan Eich vào năm 1995, là một trong những ngôn ngữ chính để lập trình web và vô vùng phổ biến với các web developer.
- JavaScript được tạo ra cho phát triển các trang web động. Một chương trình JS được gọi là script, nó có thể được đính kèm vời bất kỳ trang web HTML nào. Các script sẽ tự động chạy khi trang được tải.

## 2. Các quy ước khai báo biến trong JavaScript.

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

Cách đặt tên sai:

```
let 3years = 3;
```

Thay vào đó:

```
let threeYears = 3;
```

- Ngoài ra chúng ta không nên đặt tên biến trùng với từ khóa riêng của JavaScript, muốn đặt tên trùng với từ khóa đó chúng ta nên thêm dấu "\_" hoặc "$" trước tên biến.

Cách đặt tên sai:

```
let new = "shoes";
let function = "change the number";
```

Thay vào đó:

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

Đặt tên biến sai:

```
let job1 = "Programmer";
let job2 = "Teacher";
```

Đặt tên biến đúng:

```
let firstJob = "Programmer";
let currentJob = "Teacher";
```

// Exercise-1 In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả.
const calcMultipliers = num => {
  for (let i = 1; i < 11; i++) {
    console.log (num * i)
    }
}

//Exercise-2 Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6
const getEvenNumber = num => {
  if (1 <= num && num <= 30) return;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0)
    console.log(i)
  }
}

//Exercise-3 Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21
const calcTotal = num => {
  if (1 <= num && num <= 30) return;
  
  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
  console.log(total)
}

//Exercise-4 Hàm nhận tham số là n (số nguyên dương),  1 <= n <= 30 In ra n! (giai thừa của n)
const calcMuptiplier = num => {
  if (1 <= num && num <= 30) return;
    
  let productMultiplier = 1
  for (let i = 1; i <= num; i++) {
    productMultiplier *= i
  }
  console.log(productMultiplier)
}

// bài 5: Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn
const getEven = arr => {
  let count = 0
  arr.forEach(num => {
    if (num % 2 === 0) {
      count++
    }
  })
  console.log(count)
}

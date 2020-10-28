// Exercise 1
// Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp

// vd: đầu vào ('ahihi', 3)

// Thì Kết quả là:

// ['ahihi', 'ahihi', 'ahihi']
// Yêu cầu, viết ít nhất 2 cách khác nhau
// Method 1:
const getArr = (string, lengthArr) => {
  const arr = []
  for (let i = 0; i < lengthArr; i++) {
    arr.push(string)
  }
  return arr
}

// Method 2:
const getArray = (string, lengthArr) => {
  let i = 0
  const arr = []
  do {
    arr.push(string)
    i++
  } while (i < lengthArr)
  return arr
}

// Exercise 2 Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()
const revArr = arr => {
  const newArr = []
  for (let i = 0; i < arr.length - 1; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

// Exercise 3 Xóa đi các giá trị được xem là sai

// Exercise 4 Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
// const data = [['a', 1], ['b', 2]]
// { a: 1, b: 2 } */
const createObj = dataArr => {
  const obj = {}
  dataArr.forEach(arr => {
    obj[arr[0]] = arr[1]
  })
  return obj
}

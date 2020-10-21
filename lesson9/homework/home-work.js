// Exer 1
const myMoney = (money) => {
    if (money >= 15000000) {
        console.log ("Thuế thu nhập : ", money*30/100);
        console.log ("Lương ròng : ", money*70/100);
    } else if (money < 15000000 && money > 7000000) {
        console.log ("Thuế thu nhập : ", money*20/100);
        console.log ("Lương ròng : ", money*80/100);
    } else if (money < 7000000 && money > 1) {
        console.log ("Thuế thu nhập : ", money*10/100);
        console.log ("Lương ròng :",money*90/100)
    }
}
// Exer 2
const myStudent = (age) => {
    if (typeof(age === 'Number') && (age >= 16 )) {
        console.log ('Học sinh đủ điều kiện vào lớp 10')
    } else console.log ('Học sinh không đủ điều kiến vào lớp 10')
}
// Exer 3
const myNumber = (number) => {
    if (typeof(number === 'number') && (number > 100 )) {
        console.log (number, " > 100")
    } else if (typeof(number === 'number') && (number < 100 )) {
        console.log (number, " < 100")
    } else if (typeof(number === 'number') && (number = 100 )) {
        console.log (number, " = 100")
    }
}
// Exer 4
const randomNumber = (a,b,c) => {
    var max = a;
    if (b > max) max = b;
    if (c > max) max = c;
        console.log (max)
}
// Exer 5
const markNumber = (a,b,c) => {
    const mark = (a+b+c)/3
    if (typeof(a,b,c === 'number') && mark >= 9 ) {
        console.log ("Đạt hạng A")
    } else if (typeof(a,b,c === 'number') && mark < 9 && mark >= 7 ) {
        console.log ("Đạt hạng B")
    } else if (typeof(a,b,c === 'number') && mark < 7 && mark >= 5 ) {
        console.log ("Đạt hạng C")
    } else if (typeof(a,b,c === 'number') && mark < 5 ) {
        console.log ("Đạt hạng F")
    }
}
// Exer 6
const equation = (a,b,c) => {
    const delta = b*b-4*a*c
    if ( a == 0 && b == 0) {
        console.log ("Phương trình vô nghiệm")
    } else if ( a==0 && b !==0) {
        console.log ("Phuowng trình có nghiệm :", (-c/b))
    } else if ( delta < 0 ) {
        console.log ("Phương trình vô nghiệm")
    } else if (delta == 0) {
        console.log ("Phương trình có nghiệm kép:",-b/(2*a))
    } else if (delta > 0) {
    console.log ("Phương trình có 2 nghiệm :", (-b+Math.sqrt(delta)/(2*a)),"va",(-b-Math.sqrt(delta)/(2*a)))
    }
}
// Exer 7
const myTotalsale = (thuong) => {
    if (thuong > 300000000) {
        console.log ("Hoa hồng : ", thuong*20/100)
    } else if (thuong < 300000000 && thuong > 100000000) {
        console.log ("Hoa hồng : ", thuong*10/100)
    } else if (thuong < 100000000 && thuong > 1) {
        console.log ("Hoa hồng : ", thuong*5/100)
    }
}
// Exer 8
const phoneCharges = (time) => {
    let money = 25000
    if (time <= 50) {
        console.log ("Tiền điện thoại = ", money = money + time*600)
    } else if (time <= 200 && time > 50) {
        console.log ("Tiền điện thoại = ", money = money + 50*600 + (time - 50)*400)
    } else if (time > 200) {
        console.log ("Tiền điện thoại = ", money = money + 50*600 + 200*400 + (time - 200)*200)
    }
}
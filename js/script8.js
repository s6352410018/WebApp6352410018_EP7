// function การทำงานหนึ่งๆ **********
// function จะไม่ทำงานหากเราไม่เรียกใช้ "Call function"


// 1 ไม่ส่งค่ากลับ ไม่มีพารามิเตอร์
function funcNa() {
    console.log('Na na na....')

}





// 2 ไม่ส่งค่ากลับ มีพารามิเตอร์
function funcNi(x, y) { // x, y เรียกพารามิเตอร์
    let a = x + y
    console.log('a มีค่า ' + a)
}
// 3 ส่งค่ากลับ ไม่มีพารามิเตอร์
function funcWow() {

    return 999 + 1;
}
// 4 ส่งค่ากลับ มีพารามิเตอร์
function funcWee(x, y, z) {
    let sum = x + y + z

    return 555 + sum;

}

funcNa()
funcNi(10, 20) //10, 20 เรียกว่า อากิวเมนต์
console.log(funcWow())

// let total = funcWee(10, 20, 30)
// alert(total)

// --------------------------------------



// default parameter
function funcA(x, y = 20) {
    console.log(x + y)
}

funcA(10, 100)

funcA(50)

// --------------------------------------

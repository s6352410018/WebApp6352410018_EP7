//สร้างตัวแปร
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancel = document.getElementById('btnCancel');
let result = document.getElementById('result');

//ลองทดสอบตัวแปรที่สร้างไว้ข้างต้นว่าอ้างไปยัง Content ในเอกสาร HTML Or Not

btnCal.addEventListener('click', () => {
    if (money.value.trim().length == 0) {
        alert('ป้อนเงินด้วย')
    } else if (person.value.trim().length == 0) {
        alert('ป้อนคนด้วย')
    } else {
        //พร้อมคำนวณ
        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)
    }
})

// btnCancel.addEventListener('click', () => {
//     money.value = ''
//     person.value = ''
//     result.innerHTML = '0.00'
// })
btnCancel.addEventListener('click', clearScreen)

    function clearScreen() {
    money.value = ''
    person.value = ''
    result.innerHTML = '0.00'
}
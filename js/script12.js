let weight = document.querySelector('#weight')
let height = document.getElementById('height')
let calBMI = document.getElementById('calBMI')
let bmiValue = document.getElementById('bmiValue')
let bmiResult = document.getElementById('bmiResult')

function calculateBMI() {
    if (weight.value.trim().length == 0) {
        alert('ป้อนน้ำหนัก')
    } else if (height.value.trim().length == 0) {
        alert('ป้อนส่วนสูง')
    } else {
        let bmiValueShow = Number(weight.value) / (Number(height.value) / 100) ** 2

        bmiValue.innerHTML = bmiValueShow.toFixed(2)

        if (bmiValueShow < 18.50) {
            bmiResult.innerHTML = 'น้ำหนักน้อย / ผอม'
        } else if (bmiValueShow <= 22.90) {
            bmiResult.innerHTML = 'น้ำหนักน้อย / ผอม'
        } else if (bmiValueShow <= 24.90) {
            bmiResult.innerHTML = 'อ้วน / โรคอ้วนระดับ 1'
        } else if (bmiValueShow <= 29.90) {
            bmiResult.innerHTML = 'อ้วน / โรคอ้วนระดับ 2'
        } else {
            bmiResult.innerHTML = 'อ้วนมาก / โรคอ้วนระดับ 3'
        }
    }
}

calBMI.addEventListener('click', calculateBMI)

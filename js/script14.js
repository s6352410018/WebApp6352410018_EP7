let yr_name = document.getElementById('yrname')
let show_name = document.getElementById('showname')

function showNameAlert() {
    alert(yr_name.value)
}

function showName() {
    show_name.innerHTML = yr_name.value
}

function notShowname() {
    show_name.innerHTML = '???'
}

// ------------------------------------------------------------------

let yr_byear = document.getElementById('yrbyear')
let click_B = document.getElementById('clickB')
let show_age = document.getElementById('showage')

function alertAge() {
    let age = new Date().getFullYear() - Number(yr_byear.value)
    // show_age.innerHTML = age
    console.log(age);
}


click_B.addEventListener('click', () => {
    // new Date().getFullYear() Build-in function ได้ค่าปี ค.ศ.
    let age = new Date().getFullYear() - Number(yr_byear.value)
    show_age.innerHTML = age
})

click_B.addEventListener('mouseover', alertAge)

let yr_sexm = document.getElementById("yrsexm")
let yr_sexf = document.getElementById("yrsexf")
let showSex = document.getElementById("showsex")
let click_C = document.getElementById("clickC")

click_C.onmouseover = () => {
    // alert
    if (yr_sexm.checked == true) {
        console.log('คุณเป็นคนเพศชาย');
    }
    if (yr_sexf.checked == true) {
        console.log('คุณเป็นคนเพศหญิง');
    }
}

function showPerson() {
    if (yr_sexm.checked == true) {
        showSex.innerHTML = 'ชาย'
    }
    if (yr_sexf.checked == true) {
        showSex.innerHTML = 'หญิง'
    }
}


click_C.onclick = showPerson


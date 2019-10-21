/////////////// 初階版 /////////////////
const rgbRed = document.querySelector('#rgb-red')
const rgbGreen = document.querySelector('#rgb-green')
const rgbBlue = document.querySelector('#rgb-blue')
const rgbInput = document.querySelector('#rgb-input')
const hexOutput = document.querySelector('#hex-output')
let hexRed = ''
let hexGreen = ''
let hexBlue = ''
let hexCode = ''

// rgb轉成16進位，並組合成HEX代碼
function rgbToHEX() {
	hexRed = Number(rgbRed.children[1].value).toString(16)
	hexGreen = Number(rgbGreen.children[1].value).toString(16)
	hexBlue = Number(rgbBlue.children[1].value).toString(16)

	if (hexRed === '0') {
		hexRed = '00'
	} 
	if (hexGreen === '0'){
		hexGreen = '00'
	}
	if (hexBlue === '0') {
		hexBlue = '00'
	}
	hexCode = '#' + hexRed + hexGreen + hexBlue
}

// RGB的值即時轉成顏色，顯示在畫面左側
function updateRGBHTML(event) {
	let colorValue = event.target.value
	let rgbColor = event.target.parentElement
	if (rgbColor.id === 'rgb-red') {
		rgbColor.children[2].style.backgroundColor  ='rgb(' + colorValue + ',0,0)'
	} else if(rgbColor.id === 'rgb-green') {
		rgbColor.children[2].style.backgroundColor  ='rgb(0,' + colorValue + ',0)'
	} else if(rgbColor.id === 'rgb-blue') {
		rgbColor.children[2].style.backgroundColor  ='rgb(0,0,' + colorValue + ')'
	}
}

// HEX的值轉成顏色，顯示在畫面右側
function updateHEXHTML() {
	hexOutput.children[1].textContent = hexCode
	hexOutput.children[1].classList.add('border')
	hexOutput.children[2].style.backgroundColor = hexCode
	console.log(hexCode)
}

let checkValue = ''
// RGB輸入檢查:為空值或非0-255間
function checkRGBInput() {
	// 檢查前先清空之前警示過的文字
	rgbRed.children[3].innerHTML = ''
	rgbGreen.children[3].innerHTML = ''
	rgbBlue.children[3].innerHTML = ''
	checkValue = ''

	if (rgbRed.children[1].value === '') {
		rgbRed.children[3].innerHTML = '還未輸入紅色色碼'
		checkValue = 'True'
	}
	if (rgbGreen.children[1].value === '') {
		rgbGreen.children[3].innerHTML = '還未輸入綠色色碼'	
		checkValue = 'True'
	}
	if (rgbBlue.children[1].value === '') {
		rgbBlue.children[3].innerHTML = '還未輸入藍色色碼'
		checkValue = 'True'
	}
	if (rgbRed.children[1].value > 255 || rgbRed.children[1].value < 0) {
		rgbRed.children[3].innerHTML = '請輸入0-255間的數字'
		checkValue = 'True'
	}
	if (rgbGreen.children[1].value > 255 || rgbGreen.children[1].value < 0) {
		rgbGreen.children[3].innerHTML = '請輸入0-255間的數字'	
		checkValue = 'True'
	}
	if (rgbBlue.children[1].value > 255 || rgbBlue.children[1].value < 0) {
		rgbBlue.children[3].innerHTML = '請輸入0-255間的數字'	
		checkValue = 'True'
	}
}

// 監聽convert按鈕
rgbInput.addEventListener('submit', function(){
	event.preventDefault()
	checkRGBInput()
	if (checkValue !== 'True') {
		rgbToHEX()
		updateHEXHTML()
	}
})

// 監聽RBG各個輸入的值
rgbInput.addEventListener('input', function(){
	updateRGBHTML(event)			
})


/////////////// 進階版 /////////////////
const newRGBRed = document.querySelector('#new-rgb-red')
const newRGBGreen = document.querySelector('#new-rgb-green')
const newRGBBlue = document.querySelector('#new-rgb-blue')
const newRGBInput = document.querySelector('#new-rgb-input')
let newHEXRed = ''
let newHEXGreen = ''
let newHEXBlue = ''
let newHEXCode = ''

// 讓RGB色碼數字在一開始顯示0
newRGBRed.children[2].textContent = 0
newRGBGreen.children[2].textContent = 0
newRGBBlue.children[2].textContent = 0

// 把RGB色碼顯示在RGB區塊
function newUpdateRGBHTML(event) {
	let newColorValue = event.target.value
	let newRGBColor = event.target.parentElement
	newRGBColor.children[2].textContent = newColorValue 
}
// 把RGB轉成HEX
function newRGBToHEX() {
	newHEXRed = Number(newRGBRed.children[1].value).toString(16)
	newHEXGreen = Number(newRGBGreen.children[1].value).toString(16)
	newHEXBlue = Number(newRGBBlue.children[1].value).toString(16)
	if (newHEXRed === '0') {
		newHEXRed = '00'
	} 
	if (newHEXGreen === '0'){
		newHEXGreen = '00'
	}
	if (newHEXBlue === '0') {
		newHEXBlue = '00'
	}
	newHEXCode = '#' + newHEXRed + newHEXGreen + newHEXBlue
}

// 顯示到背景色跟HEX色碼
function newUpdateHEXHTML() {
	newRGBInput.parentElement.style.backgroundColor = newHEXCode
	newRGBInput.children[3].children[0].children[0].textContent = newHEXCode
}

// 監聽range的值
newRGBInput.addEventListener('change', function() {
	newUpdateRGBHTML(event)
	newRGBToHEX()
	newUpdateHEXHTML()

})

newRGBInput.addEventListener('input', function() {
	newUpdateRGBHTML(event)
	newRGBToHEX()
	newUpdateHEXHTML()

})
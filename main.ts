input.onButtonPressed(Button.A, function () {
    dummy = SuperBitV2_Digital.Ultrasonic(SuperBitV2_Digital.mwDigitalNum.P4P6)
    basic.showNumber(dummy)
})
let dummy = 0
basic.showIcon(IconNames.Heart)
basic.clearScreen()
dummy = SuperBitV2_Digital.Ultrasonic(SuperBitV2_Digital.mwDigitalNum.P4P6)
basic.pause(500)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})

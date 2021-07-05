radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Silly)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
input.onGesture(Gesture.Shake, function () {
    Dice = randint(1, 6)
    basic.showNumber(Dice)
    radio.sendNumber(Dice)
})
let Dice = 0
radio.setGroup(123)
basic.forever(function () {
	
})

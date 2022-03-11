let random = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onGesture(Gesture.Shake, function () {
    random = randint(0, 2)
    if (random == 0) {
        basic.showIcon(IconNames.Scissors)
    }
    if (random == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (random == 2) {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallSquare)
})
basic.forever(function () {
	
})

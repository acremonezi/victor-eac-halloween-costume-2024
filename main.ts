input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString(" HAPPY HALLOWEEN VICTOR")
    pins.digitalWritePin(DigitalPin.P13, 0)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})

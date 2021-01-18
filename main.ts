radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString("A")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("B")
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
led.setBrightness(20)
radio.setGroup(1)
basic.forever(function () {
	
})

function changeColor() {
    var buttonHartGame = document.querySelector('#buttonHartGame')
    var buttonEaseGame = document.querySelector('#buttonEaseGame')
    var gridHardGame = document.querySelector('.grid-hardGame')
    var lableColorRGB = document.querySelector('#colorRGB')
    var buttonChangeColor = document.querySelector('#buttonChangeColor')
    var lableCorrectNotifi = document.querySelector('#notifiCorrect span')
    var buttonPlayAgain = document.querySelector('#buttonPlayAgain')

    // random color

    function randomColor() {
        var a = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        var c = Math.floor(Math.random() * 256)

        var stringRGB = `rgb(${a}, ${b}, ${c})`
        return stringRGB
    }

    randomColor()
    var changeColorBox = document.querySelectorAll('.box')

    function randomButtonColor6() {
        for (var i = 0; i < changeColorBox.length; i++) {

            changeColorBox[i].style = `background-color : ${randomColor()}`
        }

        var random6 = Math.floor(Math.random() * 7)

        lableColorRGB.innerHTML = changeColorBox[random6].style.backgroundColor
    }

    randomButtonColor6()


    // button hart game

    buttonHartGame.onclick = function () {
        console.log(gridHardGame)
        gridHardGame.removeAttribute("id")
    }

    // color button 3 item

    var changeColorBox3 = document.querySelectorAll('.grid .box')

    function randomButtonColor3() {
        for (var i = 0; i < changeColorBox3.length; i++) {

            changeColorBox3[i].style = `background-color : ${randomColor()}`
        }
        var random3 = Math.floor(Math.random() * 4)

        lableColorRGB.innerHTML = changeColorBox[random3].style.backgroundColor
    }

    // button ease game

    buttonEaseGame.onclick = function () {
        gridHardGame.setAttribute("id", "easeGame")
        randomButtonColor3()
        checkColorButton3()
    }

    // button changeColor
    buttonChangeColor.onclick = function () {
        changeColor()
    }

    buttonPlayAgain.onclick = function () {
        location.reload();
    }



    // check string
    function checkColorButton() {
        var correctColor = lableColorRGB.innerText
        for (var i = 0; i < changeColorBox.length; i++) {

            changeColorBox[i].onclick = function () {

                const styles = getComputedStyle(this).backgroundColor

                if (styles !== correctColor) {
                    this.style = "display:none"

                } else {
                   
                    lableCorrectNotifi.innerHTML = "CORRECT !!!!!!! BẠN LÀ BẬC THẦY MÀU SẮC"
                    buttonHartGame.disabled = true
                    buttonEaseGame.disabled = true
                    buttonChangeColor.disabled = true

                }
            }
        }
    }


    function checkColorButton3() {
        var correctColor = lableColorRGB.innerText
        for (var i = 0; i < changeColorBox3.length; i++) {

            changeColorBox3[i].onclick = function () {
                const styles = getComputedStyle(this).backgroundColor

                if (styles !== correctColor) {
                    this.style = "display:none"

                } else {
                    lableCorrectNotifi.innerHTML = "CORRECT !!!!!!! BẠN LÀ BẬC THẦY MÀU SẮC"
                    buttonHartGame.disabled = true
                    buttonEaseGame.disabled = true
                    buttonChangeColor.disabled = true

                }
            }
        }
    }

    checkColorButton()
}

changeColor()



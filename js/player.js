class Player {
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement('img')
        this.element.src = imgSrc

        this.element.style.position = 'absolute'
        this.element.style.height = `${this. height}px`
        this.element.style.width = `${this. width}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.gameScreen.appendChild(this.element)
    }

    move(){
        this.left += this.directionX
        this.top += this.directionY

        //handle left border
        if(this.left < 10){
            this.left = 10
        }

        //handle right border
        if(this.left > this.gameScreen.width - this.width - 10){
            this.left = this.gameScreen.width - this.width - 10
        }

        //handle top
        if(this.top < 10){
            this.top = 10
        }

        //handle bottom
        if(this.top > this.gameScreen.height - this.height - 10){
            this.top = this.gameScreen.height - this.height - 10
        }

        this.updatePosition()
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    didCollide(obstacle){

    }
}
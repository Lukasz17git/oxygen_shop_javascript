
/*
 I added an optional second argument to set the timing for auto-slide, if its 0
 then it wont auto-slide, and also to be able to set the names of the different
 classes, being able to apply any style outside the class, i think it makes it more reusable.

 Also i had to wrap the slider into a wrapper, because i wanted to give it a nice
 slide animation, and without this wrapper, the buttons (left, right and dots)
 wouldnt be able to stay in the same place because of the offsetX.
*/

class Slider {
    autoSlideIntervalIdentifier

    constructor(sliderID, {
        autoSlideMiliseconds = 4000,
        autoSlideBackwards = false,
        imagesContainerId = 'slider-images-container',
        leftButtonClass = 'slider__left',
        rightButtonClass = 'slider__right',
        dotsClass = 'slider__dots',
        dotClass = 'slider__dot',
        selectedDotClass = 'slider__dot--selected'
    } = {}) {
        this.id = sliderID
        this.autoSlideMiliseconds = autoSlideMiliseconds
        this.autoSlideBackwards = autoSlideBackwards
        this.imagesContainerId = imagesContainerId
        this.leftButtonClass = leftButtonClass
        this.rightButtonClass = rightButtonClass
        this.dotsClass = dotsClass
        this.dotClass = dotClass
        this.selectedDotClass = selectedDotClass
        this.selectedIndex = 0

        const fragment = document.createDocumentFragment()
        const sliderDomElement = document.getElementById(sliderID)
        this.imagesNumber = sliderDomElement.childElementCount

        //create dots
        const dots = document.createElement("div")
        dots.classList.toggle(this.dotsClass)
        for (let i = 0; i < this.imagesNumber; i++) {
            const dot = document.createElement("button")
            dot.classList.toggle(this.dotClass)
            dot.ariaLabel = 'slider-dot'
            if (i === 0) dot.classList.toggle(this.selectedDotClass)
            dot.addEventListener("click", () => this.selectImage(i))
            dots.appendChild(dot)
        }
        //create left button
        const left = document.createElement("button")
        left.classList.toggle(this.leftButtonClass)
        left.addEventListener('click', () => this.selectPreviousImage())
        //create right button
        const right = document.createElement("button")
        right.classList.toggle(this.rightButtonClass)
        right.addEventListener('click', () => this.selectNextImage())
        //adding position absolute to my utils
        left.style.position = "absolute"
        right.style.position = "absolute"
        dots.style.position = "absolute"
        //adding created elements to fragment
        fragment.appendChild(left)
        fragment.appendChild(right)
        fragment.appendChild(dots)
        //adding styles to the slider
        sliderDomElement.id = imagesContainerId
        sliderDomElement.style.width = "100%"
        sliderDomElement.style.height = "100%"
        sliderDomElement.style.overflow = "hidden"
        sliderDomElement.style.display = "grid"
        sliderDomElement.style.gridTemplateColumns = `repeat(${this.imagesNumber},calc(100% + 2px))` //adding 1px to sides 
        sliderDomElement.style.gridTemplateRows = '100%'
        sliderDomElement.style.alignItems = "center"
        sliderDomElement.style.justifyItems = "center"
        sliderDomElement.style.scrollBehavior = "smooth"
        sliderDomElement.scrollLeft = 1 //adding 1px to center initial image
        //create a wrapper for the slider and its utils
        const sliderWrapper = document.createElement('div')
        sliderWrapper.id = this.id
        sliderWrapper.style.position = "relative"
        sliderWrapper.style.overflow = "hidden"
        //move the slider and the fragment into the wrapper
        sliderDomElement.insertAdjacentElement('afterend', sliderWrapper)
        sliderWrapper.appendChild(sliderDomElement)
        sliderWrapper.appendChild(fragment)
        //start autoslide
        this.autoSlide()
    }

    selectImage(index) {
        const sliderDomElement = document.getElementById(this.imagesContainerId)
        const dotsDomElement = document.querySelector(`#${this.id} .${this.dotsClass}`)
        dotsDomElement.children[this.selectedIndex].classList.toggle(this.selectedDotClass)
        this.selectedIndex = index
        dotsDomElement.children[this.selectedIndex].classList.toggle(this.selectedDotClass)
        sliderDomElement.scrollLeft = this.selectedIndex * (sliderDomElement.clientWidth + 2) + 1 //added pixels and the initial offset
        this.autoSlide()
    }

    selectNextImage() {
        this.selectImage((this.selectedIndex + 1) % this.imagesNumber)
    }

    selectPreviousImage() {
        this.selectImage((this.selectedIndex - 1 + this.imagesNumber) % this.imagesNumber)
    }

    autoSlide() {
        if (!this.autoSlideMiliseconds) return
        if (this.autoSlideIntervalIdentifier) clearInterval(this.autoSlideIntervalIdentifier)

        this.autoSlideIntervalIdentifier = setInterval(() => {
            this.autoSlideBackwards ? this.selectPreviousImage() : this.selectNextImage()
        }, this.autoSlideMiliseconds)
    }

}

export default Slider
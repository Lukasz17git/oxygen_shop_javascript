/*
FOR BUNDLING AND MINIFICATION OF CSS
*/
import './css/App.css'
import './css/Burger.css'
import './css/About.css'
import './css/Button.css'
import './css/Checkbox.css'
import './css/Description.css'
import './css/Faq.css'
import './css/Footer.css'
import './css/Hero.css'
import './css/Input.css'
import './css/Modal.css'
import './css/Navbar.css'
import './css/PercentageScroll.css'
import './css/Pricing.css'
import './css/Select.css'
import './css/Slider.css'
import './css/ToTop.css'

/*
SCRIPTS
*/
import { addBurgerFunctionality, addLinksFunctionality } from './Utils/navbar'
import { addPercentageScrollBar } from './Utils/percentageScroll'
import { addDelayedScroll } from './Utils/delayedScroll'
import { onSubmitFetch } from './Utils/form'
import { showModal } from './Utils/modal'
import { getPricesAndAddToSelect } from './Utils/getCurrency'
import { addListenerToSelectCurrency } from './Utils/selectCurrency'
import Slider from './Utils/Slider'

addBurgerFunctionality()
addLinksFunctionality()
addPercentageScrollBar()
addDelayedScroll()
addDelayedScroll('navbar-logo')
onSubmitFetch()
setTimeout(() => showModal(), 5000)
getPricesAndAddToSelect()
addListenerToSelectCurrency()
new Slider('slider')
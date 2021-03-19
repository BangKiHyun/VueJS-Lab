import View from "./View.js";

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

FormView.onKeyup = function (e) {
    // enter 키는 key 값이 13으로 정의되어 있음
    const enter = 13
    this.showResetBtn(this.inputEl.value.length)
    if (e.keyCode !== enter) return
    this.emit('@submit', { input: this.inputEl.value })
}

export default FormView
class Button {

    constructor( count = 0) {
        this.count = count
    }

    mount(rootElement) {
        this.root = rootElement
        this.render()
    }

    render() {
        this.root.innerHTML = `<button>${this.count}</button>`

        this.root.firstElementChild.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {
        this.count++;
        this.render()
    }
}
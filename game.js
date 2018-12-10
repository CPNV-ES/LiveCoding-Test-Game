/**
 * Game main class
 *
 * @class
 * @author Bastien Nicoud
 */
class Game {

  /**
   * @param {Element} el
   * @param {Object} options
   */
  constructor (el, options) {
    this.el = el
    this.options = options
    this.shapes = []

    // Create the SVG
    this.mountSVG()
  }

  /**
   * Create the svg
   */
  mountSVG () {
    this.svg = this.createSVG()
    this.el.appendChild(this.svg)
  }

  /**
   * Create SVG
   */
  createSVG () {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.width = this.el.width
    svg.height = this.el.height
    svg.style = 'background-color: #a5b1c2;'
    return svg
  }

}

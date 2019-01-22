/**
 * Game main class
 *
 * @class
 * @author Bastien Nicoud
 */
export class Game {

  /**
   * @param {Element} el
   */
  constructor (el) {
    this.el = el
    this.shapes = []

    // Create the SVG
    this.mountSVG()
  }

  /**
   * Create the svg
   */
  mountSVG () {
    this.svg = this.createSVG()
    this.circle = this.createCircle()
    this.el.appendChild(this.svg)
    this.svg.appendChild(this.circle)
  }

  /**
   * Create SVG
   */
  createSVG () {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width', this.el.offsetWidth)
    svg.setAttribute('height', this.el.offsetHeight)
    svg.style = 'background-color: #ff7979;'
    return svg
  }

  /**
   * Create the circle on the svg
   */
  createCircle () {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    this.x = this.el.offsetWidth/2
    this.y = this.el.offsetHeight/2
    circle.setAttribute('r', 50)
    circle.setAttribute('cx', this.x)
    circle.setAttribute('cy', this.y)
    circle.style = 'background-color: #4834d4;'
    return circle
  }

  /**
   * Move the circle on X axis
   */
  moveX (x) {
    this.circle.setAttribute('cx', this.x + x)
  }

  /**
   * Move the circle on Y axis
   */
  moveY (y) {
    this.circle.setAttribute('cy', this.y + y)
  }

  /**
   * Move the circle on XY axis
   */
  moveXY (x, y) {
    this.moveX(x)
    this.moveY(y)
  }
}

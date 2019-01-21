/**
 * Game main class
 *
 * @class
 * @author Bastien Nicoud
 */

console.log('tutu')

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
    svg.width = this.el.width
    svg.height = this.el.height
    svg.style = 'background-color: #a5b1c2;'
    return svg
  }

  /**
   * Create the circle on the svg
   */
  createCircle () {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.width = 50
    circle.height = 50
    circle.x = this.el.width/2
    circle.y = this.el.height/2
    circle.style = 'background-color: #509595;'
    return circle
  }

  /**
   * Move the circle on X axis
   */
  moveX (x) {
    this.circle.x = this.circle.x += x
  }

  /**
   * Move the circle on Y axis
   */
  moveX (y) {
    this.circle.y = this.circle.y += y
  }

  /**
   * Move the circle on XY axis
   */
  moveXY (x, y) {
    this.circle.x = this.circle.x += x
    this.circle.y = this.circle.y += y
  }
}

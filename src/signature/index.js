import React, { Component, Fragment } from 'react'
export default class Signature extends Component {
  drawing
  context
  lastX
  lastY
  state = {
    mouseDown: false
  }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.drawing)
    // let offsetLeft = this.drawing.offsetLeft
    // let offsetTop = this.drawing.offsetTop

    this.context = this.drawing.getContext('2d')
    // this.context.beginPath()
    // this.context.arc(50, 50, 1, 0, 2 * Math.PI, false)
    // this.context.fillStyle = 'red'
    // this.context.fill()
    // context.stroke()
  }
  drawCircular = (x, y) => {
    if (this.state.mouseDown) {
      let offsetLeft = this.drawing.offsetLeft
      let offsetTop = this.drawing.offsetTop
      this.context = this.drawing.getContext('2d')
      this.context.beginPath()
      this.context.arc(x - offsetLeft, y - offsetTop, 1, 0, 2 * Math.PI, false)
      this.context.fillStyle = 'red'
      this.context.strokeStyle = 'red'
      this.context.fill()
      // this.context.stroke()

      this.context.beginPath()
      this.context.moveTo(this.lastX, this.lastY)
      this.context.lineTo(x - offsetLeft, y - offsetTop)
      this.context.strokeStyle = 'red'
      this.context.lineWidth = 2
      this.context.lineCap = 'round'
      this.context.stroke()

      this.lastX = x - offsetLeft
      this.lastY = y - offsetTop
    }
  }
  clear = () => {
    this.context = this.drawing.getContext('2d')
    this.context.clearRect(0, 0, 500, 500)
  }

  render() {
    return (
      <Fragment>
        <div>
          <canvas
            onMouseDown={e => {
              let offsetLeft = this.drawing.offsetLeft
              let offsetTop = this.drawing.offsetTop
              this.lastX = e.pageX - offsetLeft
              this.lastY = e.pageY - offsetTop
              this.setState({
                mouseDown: true
              })
            }}
            onMouseUp={() => {
              this.setState({
                mouseDown: false
              })
            }}
            onMouseMove={event => {
              this.drawCircular(event.pageX, event.pageY)
            }}
            ref={ref => {
              this.drawing = ref
            }}
            width="500"
            height="500"
            style={{
              display: 'block',
              border: '1px solid red',
              margin: '0 auto'
            }}
          />
        </div>
        <button
          onClick={() => {
            this.clear()
          }}
        >
          clear
        </button>
        <button
          onClick={() => {
            const url = this.drawing.toDataURL('image/png')
            console.log(url)
          }}
        >
          export
        </button>
      </Fragment>
    )
  }
}

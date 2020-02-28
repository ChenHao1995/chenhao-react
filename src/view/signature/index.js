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
  dataURLtoBlob = dataurl => {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
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
      // 画园
      let offsetLeft = this.drawing.offsetLeft
      let offsetTop = this.drawing.offsetTop
      this.context = this.drawing.getContext('2d')
      this.context.beginPath()
      this.context.arc(x - offsetLeft, y - offsetTop, 2, 0, 2 * Math.PI, false)
      this.context.fillStyle = 'red'
      this.context.strokeStyle = 'red'
      this.context.fill()
      // 连线
      this.context.beginPath()
      this.context.moveTo(this.lastX, this.lastY)
      this.context.lineTo(x - offsetLeft, y - offsetTop)
      this.context.strokeStyle = 'red'
      this.context.lineWidth = 4
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
            const blob = this.dataURLtoBlob(url)
            const file = new File([blob], 'pic.png')
            console.log(file)
            var reader = new FileReader()
            reader.onload = function() {
              const img = document.createElement('img')
              img.src = reader.result
              document.body.appendChild(img)
            }
            reader.readAsDataURL(file)
          }}
        >
          export
        </button>
      </Fragment>
    )
  }
}

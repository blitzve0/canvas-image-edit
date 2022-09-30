import React, { useRef } from 'react'
import { DispatchCursor, CURSOR_TEXT } from 'haspr-cursor'
/// Install Better-Comments from VSCode Marketplace for a better experience
/// Setup File @ .vscode/settings.json

//& Project - Canvas Image Editor
export default function CanvasStuff() {
  //$ Refs
  const canvasReference = useRef(null)
  const dispatch = DispatchCursor()

  //$ Functions
  //` Function to draw the image on the canvas
  const uploadImage = e => {
    let reader = new FileReader() //@ Create a new FileReader
    let ctx = canvasReference.current.getContext('2d') //@ Get the context of the canvas

    //? When the image is loaded on the reader
    reader.onload = function (event) {
      let img = new Image() //@ Create a new Image

      //? When the image is loaded, do this
      img.onload = function () {
        //` Set Canvas Width and Height
        const canvas = canvasReference.current
        canvas.style.cursor = 'move'
        canvas.width = window.innerWidth * 0.9
        canvas.height = window.innerHeight * 0.8

        //@ Helpful Variables
        const canvasWidth = canvas.width
        const canvasHeight = canvas.height
        const imageWidth = img.width
        const imageHeight = img.height
        const scale = Math.min(canvasWidth / imageWidth, canvasHeight / imageHeight)
        const imageWidthNormalized = (imageWidth / 2.5) * scale
        const imageHeightNormalized = (imageHeight / 2.5) * scale

        //` Calculate the Start Position and Draw the Image
        const x = canvasWidth / 2
        const y = canvasHeight / 2
        const centerOfImageX = x - imageWidthNormalized / 2
        const centerOfImageY = y - imageHeightNormalized / 2
        ctx.drawImage(img, centerOfImageX, centerOfImageY, imageWidthNormalized, imageHeightNormalized)

        //@ Tracking the Mouse and Drawing the Image on the Canvas aka drag and drop
        let isDown = false //? Is the mouse down?

        //? Mouse Event Listeners
        /// 1: Mouse Down
        canvas.addEventListener('mousedown', () => (isDown = true))
        /// 2: Mouse Up
        canvas.addEventListener('mouseup', () => (isDown = false))
        /// 3: Mouse Move, as in when dragging the image
        canvas.addEventListener('mousemove', e => {
          if (isDown) {
            let mouseX = e.offsetX
            let mouseY = e.offsetY
            let dx = mouseX
            let dy = mouseY
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, dx - imageWidthNormalized / 2, dy - imageHeightNormalized / 2, imageWidthNormalized, imageHeightNormalized)
          }
        })
      }
      // ` Set the image source to the reader result
      img.src = event.target.result
    }
    reader.readAsDataURL(e.target.files[0]) // ` Read the file as a data URL
  }

  //& Viewport
  return (
    <div className="layout">
      <h1>CANVAS IMAGE EDITOR</h1>
      <input type="file" alt="image upload" onChange={uploadImage} />
      <canvas onMouseEnter={() => CURSOR_TEXT(dispatch, 'drag image')} onMouseLeave={() => CURSOR_TEXT(dispatch, 'END')} ref={canvasReference} className="canvas" />
    </div>
  )
}

import React from 'react'
import Dialog from 'part:@sanity/components/dialogs/fullscreen'
import Button from 'part:@sanity/components/buttons/default'
import Webcam from 'react-webcam'
import styles from './MyTool.css'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
}

function WebcamSource (props) {
  const webcamRef = React.useRef(null)
  const [imageData, setImageData] = React.useState('')

  const handleCapture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot()
      setImageData(imageSrc)
    },
    [webcamRef]
  )

  const handleSelect = () => {
    props.onSelect([
      {
        kind: 'base64',
        value: imageData,
        options: {
          originalFilename: `webcam-${new Date().toISOString()}.jpg`,
          source: 'my-webcam'
        }
      }
    ])
  }

  return (
    <Dialog title="Take a photo!" onClose={props.onClose} isOpen>
      <Webcam
        audio={false}
        height={480}
        width={600}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <Button onClick={handleCapture}>Take a photo!</Button>
      {imageData && (
        <React.Fragment>
          <img src={imageData} alt="A webcam photo" />
          <Button onClick={handleSelect}>Use this photo!</Button>
        </React.Fragment>
      )}
    </Dialog>
  )
}

export default WebcamSource

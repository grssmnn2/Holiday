import React, { Component } from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import UploadDisplay from "../UploadDisplay"
class S3Uploader extends Component {
  handleFinishedUpload = info => {
    console.log("hello")
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)
  }

  render() {
    const uploadOptions = {
      server: 'http://localhost:3000',
      signingUrlQueryParams: {uploadType: 'avatar'},
    }
    const s3Url = 'https://holidayimage.s3.amazonaws.com'

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        // upload={uploadOptions}
      >
      <UploadDisplay></UploadDisplay>
      </DropzoneS3Uploader>
    )
  }
}

export default S3Uploader;

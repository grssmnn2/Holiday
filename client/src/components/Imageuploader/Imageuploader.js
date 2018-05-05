import React, { Component } from "react";
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { CIRCLE } from "@blueprintjs/icons/lib/esm/generated/iconNames";
import API from "../../utils/API"
class Imageuploader extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: []
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: true });
    firebase
      .storage()
      .ref(this.props.email)
      .child(filename)
      .getDownloadURL()
      .then(url =>{ 
        this.setState({ avatarURL:[...this.state.avatarURL,url] }
      )
      API.uploadImageLink(this.props.email,{link:url}).then(image=>{
      }).catch(err=>console.log(err))
    }
    );
    
    
  };
  

  render() {
    return (
      <div>
       

        <label >
          
          {/* {this.state.avatarURL && <img src={this.state.avatarURL} />} */}
          {this.state.avatarURL.map((url,i) =>{
            return (<img alt="" key={i} style={{width:100+'px', height:110+'px'}} src={url}/>)
          })}
          
          <FileUploader
            // hidden
            style={{marginTop:"20px"}}
            accept="image/*"
            name="avatar"
            multiple={true}
            randomizeFilename
            storageRef={firebase.storage().ref(this.props.email)}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          </label>
          {this.state.isUploading && <Progress  style={{display:"inline-block"}}  width={50} percent={this.state.progress} type={CIRCLE}></Progress>}
   
      </div>
    );
  }
}

export default Imageuploader;

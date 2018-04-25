import React, { Component } from "react";
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { CIRCLE } from "@blueprintjs/icons/lib/esm/generated/iconNames";
const config = {
  apiKey: "AIzaSyBu2cINM-nJKIbpBhhz4s0lN9-54kCsRqo",
  authDomain: "holiday-b82f4.firebaseapp.com",
  databaseURL: "https://holiday-b82f4.firebaseio.com",
  projectId: "holiday-b82f4",
  storageBucket: "holiday-b82f4.appspot.com",
  messagingSenderId: "47685239684"
};
firebase.initializeApp(config);
class Imageuploder extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: []
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
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
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL:[...this.state.avatarURL,url] }));
  };
  

  render() {
    return (
      <div>
        <form>
          
        <label style={{backgroundColor: 'steelblue', color: 'white', border: 'black', padding: 10, margin: 5, borderRadius: 4}}>
            Username:
          
          <input style={{color: 'black'}}
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
          />
          </label>
        <label style={{backgroundColor: 'steelblue', color: 'white', border: 'black', padding: 10, margin: 5, borderRadius: 4, pointer: 'cursor'}}>
            Avatar:
          {this.state.isUploading && <Progress width={50} percent={this.state.progress} type={CIRCLE}></Progress>}
          {/* {this.state.avatarURL && <img src={this.state.avatarURL} />} */}
          {this.state.avatarURL.map((url,i) =>{
            return (<img alt="" key={i} style={{width:100+'px', height:110+'px'}} src={url}/>)
          })}
          
          <FileUploader
            // hidden
            accept="image/*"
            name="avatar"
            multiple={true}
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          </label>
        </form>
      </div>
    );
  }
}

export default Imageuploder;

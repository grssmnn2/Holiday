import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
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
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
          />
          <label>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress} %</p>}
          {/* {this.state.avatarURL && <img src={this.state.avatarURL} />} */}
          {this.state.avatarURL.map((url,i) =>{
            return (<img alt="" key={i} style={{width:100+'px', height:110+'px'}} src={url}/>)
          })}
          <FileUploader
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
        </form>
      </div>
    );
  }
}

export default Imageuploder;

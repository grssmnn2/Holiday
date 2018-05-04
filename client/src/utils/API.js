import axios from "axios";

export default {
    storeMessage: (message) => axios.post("/api/message/",message),
    findhistoryMessage:(sender,receiver) => axios.get("/api/historymessage/"+sender+"/"+receiver),
    retrieveFriendList:(user) => axios.get("api/friendlist/"+user),
    addFriends:(name,friend) => axios.post("api/friendlist/"+name,friend),
    getResults:(city) => axios.get("/api/results/"+city),
    updateUserData:(email,data)=> axios.put("/api/userinfor/"+email,data),
    createUser:(data)=> axios.post("/api/newUser/",data),
    uploadImageLink:(email,data)=> axios.put("/api/image/"+email,data)
}
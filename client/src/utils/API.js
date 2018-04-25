import axios from "axios";

export default {
    storeMessage: (message) => axios.post("/api/message/",message),
    findhistoryMessage:(sender,receiver) => axios.get("/api/historymessage/"+sender+"/"+receiver),
    retrieveFriendList:(user) => axios.get("api/friendlist/"+user)
}
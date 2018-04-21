import axios from "aixos";

export default {
    storeMessage: (message,id) => axios.post("/api/message/"+id,message)
}
import axios from "axios";

export default {
    storeMessage: (message) => axios.post("/api/message/",message),
    findhistoryMessage:(sender,receiver) => axios.get("/api/historymessage/"+sender+"/"+receiver),
    retrieveFriendList:(user) => axios.get("/api/friendlist/"+user),
    addFriends:(name,friend) => axios.post("/api/friendlist/"+name,friend),
    getResults:(city) => axios.get("/api/results/"+city),
    updateUserData:(email,data)=> axios.put("/api/userinfor/"+email,data),
    createUser:(data)=> axios.post("/api/newUser/",data),
    uploadImageLink:(email,data)=> axios.put("/api/image/"+email,data),
    retrievePendingTrips:(user)=>axios.get("/api/pending/"+user),
    retreiveSwapRequests:(user)=>axios.get("/api/request/"+user),
    retrieveUpcomingTrips:(user)=>axios.get("/api/upcoming/"+user),
    retrieveCompleteTrips:(user)=>axios.get("/api/complete/"+user),
    createRequest:(data)=>axios.post("/api/newtrips",data),
    confirmTrip:(id)=>axios.put("/api/confirm/"+id),
    completeTrip:(id,data)=>axios.put("/api/completetrip/"+id,data),
    addReview:(user,review)=>axios.put("/api/addreview/"+user, {data : review}),
    updateRateStatus:(id,data)=>axios.put("/api/updatestatus/"+id,data),
    retrieveUserData:(email)=>axios.get("/api/userInfor/"+email)
}
import axios from "axios";

export  class API{
   static async apiFunc(){
       let response=await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=54330e58`,{
       })       
       return response.data
       }
   
}
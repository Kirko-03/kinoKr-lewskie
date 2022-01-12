import axios from "axios";

export  class API{
   static async apiFunc(){
       let response=await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`,{
       })       
       return response
       }
   
}
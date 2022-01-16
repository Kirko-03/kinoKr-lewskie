import axios from "axios";

export  class API{
   static async apiFunc(){
       let r1=await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=54330e58`)
       let r2=await axios.get(` http://www.omdbapi.com/?t=Game of Thrones&apikey=54330e58`)
       let r3=await axios.get(`http://www.omdbapi.com/?i=tt3892198&apikey=54330e58`)
       let resArray = []
       resArray.push(r1,r2,r3)
       return resArray
       }
   
}
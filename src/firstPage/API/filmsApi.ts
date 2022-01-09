import axios from "axios";

 
export  class filmsAPI{
    static async  fetchInfo(){
        let response=await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:10,
            _page:1
            }
        })
        return response
        }    
}

// ***********1***********

// import axios
import axios from "axios"





// 4. pass arguments

// 6. api call is asynchronous fn. so it contains some time delay. it is solved by using async and await

const commonAPI = async (httpMethod, url,reqBody)=>{
    // api call using axios

     // 1.create a config
    const reqConfig={
        // 5.pass keys in arguments
        method:httpMethod,
        url,
        data:reqBody
    }
   
    // 2.call using axios
    // 3.axios returns promise, so use then method and catch method.
    //    then return response , so return it. catch returns if there is any error

    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

   

}

export default commonAPI
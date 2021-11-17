import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [blogs, changeBlogs] = useState(null);
    const [error, setError] = useState(null);
// , {signal: AbortController.signal}
    useEffect(() => {
        setTimeout(() => {
        fetch(url)
            .then(response=>{
                if(!response.ok)
                {throw Error("Could not Fetch info");}
            return response.json()
        })
        .then((data)=>{console.log(data);
        changeBlogs(data)
        setError(null);
       // console.log("This is ", blogs)
        })
        .catch(err =>
            {changeBlogs(null);
            setError(err.message);
        })
        //return ()=> AbortController.abort();
    },2000)
    },[url])
    return ({blogs, changeBlogs,error,setError});
}

export default useFetch;
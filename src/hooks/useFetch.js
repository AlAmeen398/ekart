import { useEffect, useState } from "react"

const useFetch =(url)=>{
    const [data, setaData]= useState([]) 
    useEffect(()=>{
        fetch(url).then((res)=>{
            res.json().then(result=>{
                console.log("result");
                console.log(result);
                setaData(result)
                                
            })
        })
    },[])
    return data;
}
export default useFetch;
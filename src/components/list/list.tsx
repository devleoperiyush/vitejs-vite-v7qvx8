import { useEffect, useState } from "react"

export default function List()
{
    const [item,setItem] = useState(["A","B","C"]);
    useEffect(()=>{
        setItem(["A","B","C","D"]);
    },[])
    const list = item.map((value,i)=>{
        return <li key={i}>{value}</li>;
    });
    return (
        <ul>
            {list}
        </ul>
    )
}
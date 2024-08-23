import { useEffect, useState } from 'react';

interface intialData  {
    testName : string
    handleOnChange : any
}
export default function Form({testName, handleOnChange} : intialData){
    const [name, setName] = useState("");
    const onChnageHandle = (event : any) =>
    {
        setName(event.target.value);
        handleOnChange(event.target.value);
    }
    useEffect(()=>{
        setName(testName + Math.random());
    },[])

    return (
    <>
        <input className="card" type="text" id="html" name="fav_language" value={name} onChange = {onChnageHandle}/>
         <label>HTML</label>
    </>
    )
}
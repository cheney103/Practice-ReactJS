import React from 'react'

const InfoList = ({info,title}) =>{
    

    return(
        <div>
            <h1 class="text-center font-bold">{title}</h1>
        {info.map((myinfo) => (
            <div class="text-center pt-10 shadow sm:shadow-md"  key={info.id}>
                <h2 class="font-semibold">{myinfo.title}</h2>
                <p>{myinfo.body}</p>
            </div>
        ))}
        </div>
    );
}
export default InfoList
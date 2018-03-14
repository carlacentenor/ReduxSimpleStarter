import React from 'react';

const Section = ({info}) => (
   
  <div> 
     <img src={info.img} alt=""/>
     <p>{info.text}</p>
    <p>Mis Hobiees :</p>
    <ul>
         {             
            info.hobbies.map(hobbie =>{
                return <li key={hobbie}>{hobbie}</li>
            })
        } 

    </ul>
 
  </div>
  
)

export default Section

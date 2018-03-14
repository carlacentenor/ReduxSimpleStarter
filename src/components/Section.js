import React from 'react';

const Section = ({hobbies,img,text}) => (
   
  <div>
     <img src={img} alt={img}/>
     <p>{text}</p>
    <p>Mis Hobiees :</p>
    <ul>
        {             
            hobbies.map(hobbie =>{
                return <li key={hobbie}>{hobbie}</li>
            })
        }

    </ul>

  </div>
  
)

export default Section

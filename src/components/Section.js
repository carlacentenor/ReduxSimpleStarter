import React from 'react';

const Section = ({hobbies}) => (
   
  <div>
     
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

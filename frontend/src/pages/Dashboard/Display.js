import React from 'react';
import Monitor from './Monitor/Monitor';

export default function Display({ role, user_id }){
        const patients =[
        {
            name: "John Doe",
            age: 45,
            sex : "M",
            id : 60
        },

        {
            name: "Jane Doe",
            age: 23,
            sex: "F",
            id : Math.floor(Math.random()*100)
        },

        {
            name: "Peter Parker",
            age: 17,
            sex: "M",
            id : Math.floor(Math.random()*100)
        },

        {
            name: "May Parker",
            age: 60,
            sex: "F",
            id : Math.floor(Math.random()*100)
        }

    ];

    return (
                    //  <!-- Main section --> 
                     <div className="row">

                        {
                            patients.map(patient=>(
                                <Monitor 
                                    role = {role} 
                                    name={patient.name} 
                                    age={patient.age} 
                                    sex={patient.sex} 
                                    id={patient.id} 
                                    user_id={user_id}
                                />
                            ))
                        }

                     </div>
                //   <!-- End of Mian -->
    );
}
import React from 'react';
import Monitor from './Monitor';

export default function Display(){
        const patients =[
        {
            name: "John Doe",
            age: 45,
            sex : "M",
            id : Math.floor(Math.random()*100)
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
                     <div className="col-sm-11 col-lg-10 p-3">
                     <div className="row">

                        {
                            patients.map(patient=>(
                                <Monitor name={patient.name} age={patient.age} sex={patient.sex} id={patient.id}/>
                            ))
                        }

                     </div>
                  </div>
                //   <!-- End of Mian -->
    );
}
import React from 'react';
import Monitor from './Monitor';

export default function Display(){
    return (
                    //  <!-- Main section --> 
                     <div className="col-sm-11 col-lg-10 p-3">
                     <div className="row">
                         <Monitor />
                         <Monitor />
                         <Monitor />
                         <Monitor />

                     </div>
                  </div>
                //   <!-- End of Mian -->
    );
}
import React from 'react';
import Monitor from './Monitor';

export default function Display(){
    return (
                    //  <!-- Main section --> 
                     <div className="col-md-9 col-lg-10 p-3">
                     <div className="row">
                         <Monitor />
                         <Monitor />
                     </div>
                  </div>
                //   <!-- End of Mian -->
    );
}
import React from 'react';
import Analyse from './Analyse';
import Report from './Report';
import Treatment from './Treatment';
import Discharge from './Discharge';

export default function Controls({id, name, role}){
    return(
                    <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-sm btn-outline-primary me-1 my-1 text-truncate" data-bs-toggle ="modal" data-bs-target={`#report-modal-${id}`}>Report</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary me-1 my-1 text-truncate" data-bs-toggle ="modal" data-bs-target={`#treatment-modal-${id}`}>Treatment Plan</button>
                    <div className="hidden">
                        <button type="button" className="btn btn-sm btn-outline-secondary me-1 my-1 text-truncate" data-bs-toggle ="modal" data-bs-target={`#analyse-modal-${id}`}>Analyse Treatment</button>
                        <button type="button" className="btn btn-sm btn-outline-success me-1 my-1 text-truncate" data-bs-toggle ="modal" data-bs-target={`#discharge-modal-${id}`}>Discharge</button>
                    </div>
                   <div className="more dropdown">
                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle me-1 my-1" data-bs-toggle="dropdown">More..</button>
                        <div className="dropdown-menu">
                            <button type="button" className="dropdown-item btn btn-sm btn-outline-secondary me-1 my-1 text-truncate" data-bs-toggle ="modal" data-bs-target={`#analyse-modal-${id}`}>Analyse Treatment</button>
                            <button type="button" className="dropdown-item btn btn-sm btn-outline-success me-1 my-1 text-truncate" data-bs-toggle ="modal" data-bs-target={`#discharge-modal-${id}`}>Discharge</button>
                        </div>

                    </div>
                    <Report role={role} id={id} name={name}/>
                    <Discharge id={id} name={name} />
                    <Treatment role={role} id={id} name={name}/>
                    <Analyse id={id} name={name}/>
                </div>
    );
}
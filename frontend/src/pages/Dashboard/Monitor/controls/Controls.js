import React from 'react';
import Form from './Report/Form';
import Analyse from './Analyse';

export default function Controls({id}){
    return(
                    <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-sm btn-outline-primary me-1 my-1 text-truncate" data-bs-toggle ="modal" data-bs-target={`#nursing-modal-${id}`}>Report</button>
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
                    <Form 
                        id={id}
                        type="nursing" 
                    />

                    <Form 
                        id={id}
                        type="treatment" 
                    />

                    <Form 
                        id={id}
                        type="discharge" 
                    />

                    <Analyse id={id} />
                </div>
    );
}
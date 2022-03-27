import React from 'react'

export default function Treatment({id, name, role}){
    return (
        <div className="modal  fade" id={`treatment-modal-${id}`}>
            <div className="modal-lg modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-truncate">Treatment Plan for {name}</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                    {(role.toLowerCase() === "doctor") ? 
                    (<div>
                        <div className="mb-3">
                            <label className="form-label">Case History:</label>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Prescription:</label>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>
                    </div>) : 
                    <div className="h4">
                        You are a Nurse read the Treatment Plan
                    </div>
                    }

                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        {(role.toLowerCase() === "doctor") ? <button className="btn btn-outline-success">Save Report</button> :  ""}
                    </div>
                </div>
            </div>
        </div>
    );
}
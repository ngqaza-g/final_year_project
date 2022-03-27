import React from 'react'

export default function Discharge({id, name}){
    return (
        <div className="modal  fade" id={`discharge-modal-${id}`}>
            <div className="modal-lg modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-truncate">Discharge {name}</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Enter Discharge Plan:</label>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        <button className="btn btn-outline-success">Save and Print</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
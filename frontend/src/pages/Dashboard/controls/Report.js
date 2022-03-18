import React from 'react'

export default function Report({id, name}){
    return (
        <div className="modal  fade" id={`report-modal-${id}`}>
            <div className="modal-lg modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-truncate">Nursing Report for {name}</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                    <div className="mb-3">
                            <label className="form-label">Enter Blood Pressure Reading:</label>
                            <input className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Nursing Care Plan:</label>
                            <div className="form-text">
                                <h6>Documentation Guideline</h6>
                                <p>Patient Assesment</p>
                                <p>Nursing Diagnosis</p>
                                <p>Nursing Care Plan</p>
                                <p>Implementation & Evaluation</p>
                            </div>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Enter Report:</label>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        <button className="btn btn-outline-success">Save Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
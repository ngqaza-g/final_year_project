import React from 'react'

export default function Analyse({id, name}){
    return (
        <div className="modal  fade" id={`analyse-modal-${id}`}>
            <div className="modal-lg modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-truncate">Treatment Analysis Report for {name}</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div class="spinner-border d-flex justify-content-center" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
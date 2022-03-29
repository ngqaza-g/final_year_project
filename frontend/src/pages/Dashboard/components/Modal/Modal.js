import React from 'react';

export default function Modal({title ,body, id, save, view, toggleView, form_id, isDischarge}){
    return(
        <div className="modal  fade" id={id}>
        <div className="modal-lg modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-truncate">{title}</h5>
                    <button className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    {body}
                </div>
                <div className="modal-footer">
                    {save && !isDischarge ? <button className="btn btn-outline-primary" onClick={toggleView}>{!view ? "View Reports" : "Edit"}</button> : ""}
                    {(save && !view) ? <button type="submit" className="btn btn-outline-success" form={form_id}>Save</button> : ""}
                    <button className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    )
}
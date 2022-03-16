import React from 'react';

export default function ChangePassword(){

    return(
        <div className="modal fade" id="change-password">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 class="modal-title">Change Password</h5>
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <div classname="my-3">
                            <label className="form-label">Current Password:</label>
                            <input type="password" className="form-control" />
                        </div>

                        <div classname="my-3">
                            <label className="form-label">New Password:</label>
                            <input type="password" className="form-control" />
                        </div>

                        <div classname="my-3">
                            <label className="form-label">Repeat New Password:</label>
                            <input type="password" className="form-control" />
                        </div>
                    </div>
    
                    <div className="modal-footer">
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-success">Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
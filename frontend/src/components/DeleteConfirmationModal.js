import React from 'react';
import '../style/deleteConfirmationModal.css';

function DeleteConfirmationModal({isOpen, onCancel, onConfirm}) {
    return (
        <div className={`${isOpen ? 'modal--open' : 'modal--close'}`}>
            <p>Are you sure you want to delete this item ?</p>
            <div className="modal--actions">
                <button className="modal--cancel" onClick={onCancel} >Cancel</button>
                <button className="modal--delete" onClick={onConfirm} >Confirm Delete</button>
            </div>
        </div>
    )
}

export default DeleteConfirmationModal;
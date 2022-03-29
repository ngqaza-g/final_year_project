import React from 'react';

export default function AccordionItem({parent_id, item_id, title, body}){
    return(
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                    className="accordion-button collapsed" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#_${item_id}`}
                >
                    {title}
                </button>
            </h2>
            <div 
                id={`_${item_id}`} 
                className="accordion-collapse collapse" 
                data-bs-parent={`#_${parent_id}`}
            >
                <div className="accordion-body">
                    {body}
                </div>
            </div>
        </div>
    );
}
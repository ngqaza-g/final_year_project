import React from 'react';
import AccordionItem from './AccordionItem';

export default function Accordion({id, items}){
    console.log(items);
    return(
        <div className="accordion" id={`_${id}`}>
            {items.map(item =>(
                <AccordionItem
                    parent_id ={id}
                    item_id = {item.id}
                    title = {item.title}
                    body = {item.body}
                />
            ))
            }
        </div>
    );
}
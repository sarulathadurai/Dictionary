import React from 'react';

const Definition = ({meaning}) => {
    const def =meaning.map(item => 
           item.definitions.map(elem => 
        <div key={item.index}>
            <li className="list-group-item">
             <h5  className="text-info"><strong>Definition</strong></h5>
             {elem.definition}
             </li>
                 <li className="list-group-item">
                   <h5  className="text-info" ><strong>Example</strong></h5>
                   {elem.example}
                  </li>            
        </div>
     ) )
    return ( 
        <ul className=" list-group">
            {def}
        </ul>
     );
}
 
export default Definition;



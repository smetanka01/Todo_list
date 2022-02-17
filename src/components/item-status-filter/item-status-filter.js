import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onToggleFilter, filter}) => {
   return (
      <div className="btn-group">
         <button onClick={() => onToggleFilter('all')}
                 type="button"
                 className={filter === 'all' ? 'btn btn-info' : 'btn btn-outline-secondary'}>All
         </button>
         <button onClick={() => onToggleFilter('active')}
                 type="button"
                 className={filter === 'active' ? 'btn btn-info' : 'btn btn-outline-secondary'}>Active
         </button>
         <button onClick={() => onToggleFilter('done')}
                 type="button"
                 className={filter === 'done' ? 'btn btn-info' : 'btn btn-outline-secondary'}>Done
         </button>
      </div>
   );
};

export default ItemStatusFilter;

import React from 'react'
import Card from './Card';


function SearchList({ filteredBrokers }) {
    const filtered = filteredBrokers.map( broker =>  <Card key={broker.id} broker={broker} />); 
    return (
      <div>
        {filtered}
      </div>
    );
  }
  
  export default SearchList;

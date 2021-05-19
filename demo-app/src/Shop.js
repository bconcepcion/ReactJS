import React, {useState, useEffect} from 'react'

function Shop(){
  useE
  const fetchItems = () => {
    const data = await fetch('https://fakestoreapi.com/products');
    console.log(data)
    // .then(res=>JSON())
    // .then(json=>console.log(json))
  }
  return(
    <div className="App">
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop
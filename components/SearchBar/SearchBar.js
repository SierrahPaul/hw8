import React, { useState, useEffect } from 'react'
import './SearchBar.css'
import { get } from 'http'

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState("")
    const [products, setProducts] = useState([])

    useEffect(() => {
         const res = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(data=>setProducts(data)) 
    }, [])
        

    const handleInputChange = (event) =>{
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })



    const shouldClearButton = searchValue.length > 0

    return (
                <div id="search-bar">
                    <h3>The Search Bar</h3>
                    <input type="text" value={searchValue} onChange={handleInputChange} />
                    <p></p>
                    
                    {shouldClearButton && <button onClick={handleClearClick}>Clear</button>}
                
                    <h1>Products</h1>

                    <table id="products-table">
                        <tbody>
                            {filteredProducts.map((product) => (
                                <tr className="product-card" key={product.id}>
                                    <td><h3>{product.title}</h3>
                                        <img src={product.image} alt={product.title} width="50"/>
                                        <p>${product.price}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
    )
}

export default SearchBar
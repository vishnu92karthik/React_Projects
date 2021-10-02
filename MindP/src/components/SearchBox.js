import React, { useState } from 'react'

 const SearchBox = () => {
    const [input, setInput] = useState ("");
    
        return (
            <div>
                <input type= "text"  name="photo search" placeholder= "Search for Photos" className="searchBox"
                value= {input}
                onChange = {(e) => setInput(e.target.value)}></input>

            </div>
        )
    
}

export default SearchBox

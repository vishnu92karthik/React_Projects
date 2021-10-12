import React from 'react'
import { Button } from 'react-bootstrap'

function BookSearch(props) {
    return (
        <div className="search-area">
            <form onSubmit={props.searchB}>
                <input type="text" onChange ={props.handleSearch}></input>
                <Button type="submit">Search</Button>
            </form>
        </div>
    )
}

export default BookSearch


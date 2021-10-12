import React from 'react'
import BookCard from './BookCard'

function BookList(props) {
    return (
        <div className="list">
            {
                props.books.map((book, i) =>{
                
                    return <BookCard 
                    key ={1}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    published={book.volumeInfo.publishedDate}
                    />
                })
            }
        </div>
    )
}

export default BookList

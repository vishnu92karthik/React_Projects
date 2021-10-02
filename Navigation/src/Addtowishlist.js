import React from 'react'
import {useCart} from "react-use-cart";
const Addtowishlist = ()=> {
    const {
        isEmpty,
        totalUniqueItems,
         items,
        removeItem,
        emptyCart
    
    } = useCart();
    if(isEmpty) return <h1 className="text-center">Your wishlist is empty</h1>
    return (
        <section className= "py-4 container">
            <div className= "row justify-content-center">
                <div className="col-12">
             <h5> Total  Items in wishlist: ({totalUniqueItems})</h5>
             <table className="table table-light table-hover m-0">
                 <tbody>
                     {items.map((item, index)=>{
                         return(
            <tr key={index}>
                <td>
                    <img src={item.img} style={{height:'6rem'}} alt="Card  cap"/>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
               
                <td>
                    
                    <buttton className="btn btn-danger ms-2" onClick={()=> removeItem(item.id)}>Remove Items</buttton>
                </td>
            </tr>
                         )
            })}
            </tbody>
             </table>
            </div>
           
            <div className="col-auto">
           <button className= "btn btn-danger m-2"
           onClick={()=> emptyCart()}
           >   Wishlist</button>
           <button className="btn btn-primary">Add to cart</button>
            </div>
 </div>
        </section>
    )
}

export default Addtowishlist 

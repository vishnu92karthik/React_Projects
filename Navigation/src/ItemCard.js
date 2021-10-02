
import React from 'react'
import {useCart} from 'react-use-cart';
import {  Nav } from 'react-bootstrap';
const ItemCard = (props) => {
    const {addItem} = useCart();
    const {wItem} = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div class="card p-0 overflow-hidden h-100 shadow">
  <img class="card-img-top img-fluid" src={props.img} alt="Card  cap" />
  <div class="card-body" style={{textAlign:"left"}}>
    <h5 class="card-title">{props.title}</h5>
    <h5 class="card-title">${props.price}</h5>
    <p class="card-text">{props.desc}</p>
    <button class="btn btn-primary" onClick={() => addItem(props.item)}>Add to cart</button>
 <Nav.Link style={{textAlign:"right", display: "inline-block"}} onClick={() => wItem(props.item)}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> </Nav.Link>
  </div>
</div> 
        </div>
    );
};

export default ItemCard


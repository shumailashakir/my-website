import React from 'react'

const Bags = () => {

 const bagsData = [
    { id: 1, name: "Leather", price: 12000, description: "Luxuary Bag", image: "/pic-4.avif" },
    { id: 2, name: "Leather", price: 8000, description: "Luxuary Bag", image: "/pic-2.jpg" },
    { id: 3, name: "Leather", price: 9000, description: "Luxuary Bag", image: "/pic-03.jpeg" },
    { id: 4, name: "Leather", price: 7000, description: "Luxuary Bag", image: "/pic-7.jpg "},
    { id: 5, name: "Leather", price: 5000, description: "Luxuary Bag", image: "/pic-5.jpg" },
    { id: 6, name: "Leather", price: 4000, description: "Luxuary Bag", image: "/pic-6.jpg" },
    { id: 7, name: "Leather", price: 6000, description: "Luxuary Bag", image: "/pic-4.avif" },
    { id: 8, name: "Leather", price: 15000, description: "Luxuary Bag", image: "/pic-13.jpg" },
    { id: 9, name: "Leather", price: 10000, description: "Luxuary Bag", image: "/pic-16.webp" },
    { id: 10, name: "Leather", price: 5000, description: "Luxuary Bag", image: "/pic-11.jpg" },
    { id: 11, name: "Leather", price: 7000, description: "Luxuary Bag", image: "/pic-08.jpg" },
    { id: 12, name: "Leather", price: 5000, description: "Luxuary Bag", image: "/pic-22.jpg" },
    { id: 13, name: "Leather", price: 9000, description: "Luxuary Bag", image: "/pic-14.jpg" },
    { id: 14, name: "Leather", price: 8000, description: "Luxuary Bag", image: "/pic-15.avif" },
    { id: 15, name: "Leather", price: 6000, description: "Luxuary Bag", image: "/pic-44.avif" }, 
    { id: 16, name: "Leather", price: 6000, description: "Luxuary Bag", image: "/pic-17.webp" }, 
    { id: 17, name: "Leather", price: 6000, description: "Luxuary Bag", image: "/pic-18.jpg" },
    { id: 18, name: "Leather", price: 6000, description: "Luxuary Bag", image: "/pic-55.jpg" }, 
     
 ]



  return (
    <div>
      <div className='bags'>
        {bagsData.map((bag) => (

       <div key={bag.id} className='bag-cart'>
        <img  src={bag.image} alt={bag.name}/>
        <h3>{bag.name}</h3>
        <p>{bag.description}</p>
        <div className='price'>${bag.price}</div>
        <button>Add to Cart</button>

       </div>

      
    ))}
    </div>
    </div>
  )
}

export default Bags

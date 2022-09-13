import React from 'react'
import Art from '../Images/Arts1.jpg'
import car from '../Images/car.png'
import house from '../Images/house2.png'
import more from '../Images/See more.png'

function Products() {
  return (
    <>
    <section className='Product'>
    <h2>Products</h2>
    <div>
    <img src={Art} alt='art'/>
    <h3>Arts</h3>
    </div>
    <div>
    <img src={car} alt='cars'/>
    <h3>Vehicles</h3>
    </div>

    <div>
    <img src={house} alt='house'/>
    <h3>Houses</h3>
    </div>
    <div>
    <img src={more} alt='more'/>
    <h3>Others</h3>
    </div>
    </section>
    </>
  )
}

export default Products

import React,{useState} from 'react'
import SignUp from './SignUp'

function Bidders() {
  const[reg, setReg]=useState(false)


  return (
    <>
    <section className='Bidders'>
    <div>
    <button className='butt' onClick={()=> setReg(true)}>Sign Up</button>
    <SignUp open={reg} close={()=> setReg(false)}/>
    <h2>Top Bidders</h2>
    <ul>
    <li></li>
    </ul>
    </div>
    <div className='Activities'>
    <h2>Activities</h2>
    <ul>
    <li></li>
    </ul>
    </div>
    </section>

    </>
  )
}

export default Bidders

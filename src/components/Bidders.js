import React,{useState, useEffect} from 'react'
import SignUp from './SignUp'
import {FaTimes  } from "react-icons/fa";


function Bidders() {
  const[reg, setReg]=useState(false)
  const [details, setDetails] = useState ([]);


    useEffect(() => {
      fetch("https://arts-bidders.herokuapp.com/bids")
      .then((res)=>res.json())
      .then((data)=>{
        setDetails(data)
        console.log(data)
      })
    }, [])

    const bidData = details;


  return (
    <>
    <section className='Bidders'>
    <div>
    <button className='butt' onClick={()=> setReg(true)}>Sign Up</button>
    <SignUp open={reg} close={()=> setReg(false)}/>
    <h2>Top Bidders</h2>
    {bidData.map((detail)=>(
      <div className='userInfo' key={detail.id}>
      <div>
       <h1>`${detail.name} $ ${detail.your_bid}`</h1>
      </div>

      <div className='deleteBid'>
      <FaTimes/>
      </div>
      </div>

    ))}

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

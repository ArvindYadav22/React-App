import React from 'react'

function Card({username}) {
    console.log(username);
    
  return (
    <div>
      <div className="w-40 flex flex-col rounded-xl bg-black min-h-[2rem] ">
        <div>
          <img
            src="https://w0.peakpx.com/wallpaper/794/29/HD-wallpaper-best-whatsapp-dp-boy-walking-alone-birds.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{username}</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

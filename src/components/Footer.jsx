import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl py-10 mx-auto flex gap-32'>
        <div className='basis-1/2'>
            <h1 className=' text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className='basis-1/2'>
        <div className='basis-1/2 flex gap-4'>
          <div className='basis-1/3'>
             <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
             {["instagram","twitter (x?)","LinkedIn"].map((item, index) => <a key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>) }
          </div>
          <div className='basis-1/3'>
             <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
             {["instagram","twitter (x?)","LinkedIn"].map((item, index) => <a key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>) }
          </div>
          <div className='basis-1/2 flex flex-col items-end'>
            <p className='text-right'>Rofokus is a pioneering digital agency driven by design and empowered by technology</p>
            <img className='mt-10 w-32' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
          </div>
            
        </div>
        
        </div>
    </div>
  )
}

export default Footer
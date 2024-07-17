import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    const products = [
        {title: "arqitel", description: "Arqu Executive and its employees continue to revceive orders for customers and customers that get orders that get orders for customers that", live: true, case: false},
        {title: "TTR", description: "Arqu Executive and its employees continue to revceive orders for customers and customers that get orders that get orders for customers that", live: true, case: false},
        {title: "YIR 2022", description: "Arqu Executive and its employees continue to revceive orders for customers and customers that get orders that get orders for customers that", live: true, case: true},
        {title: "yahoo!", description: "Arqu Executive and its employees continue to revceive orders for customers and customers that get orders that get orders for customers that", live: true, case: true},
        {title: "Rainfall", description: "Arqu Executive and its employees continue to revceive orders for customers and customers that get orders that get orders for customers that", live: true, case: false}
    ]

    const [pos, setPos] = useState(0);
    const mover = (val)=>{
      setPos(val*23);
    }

    
  return (
    <div className='mt-32 relative'>
        {products.map((elems, index) => {
            return <Product key={index} mover={mover} count={index} real={elems}/>
        })}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
          <motion.div 
          inital={{ y:pos, x: "-50%" }}
          animate={{ y:pos+`rem` }}
          transition={{ease: [0.76, 0, 0.24, 1], duration: .6}}
          className='window absolute w-[32rem] h-[23rem] bg-white  left-[44%] -translate-x-[50%] overflow-hidden'>
            <motion.div animate={{y: -pos+`rem`}}
            transition={{ease: [0.76, 0, 0.24, 1], duration: .8}}
            className=' w-full h-full bg-sky-100'>
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}}
            transition={{ease: [0.76, 0, 0.24, 1], duration: .8}}
            className=' w-full h-full bg-sky-400'>
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}}
            transition={{ease: [0.76, 0, 0.24, 1], duration: .8}}
            className=' w-full h-full bg-sky-600'>
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}}
            transition={{ease: [0.76, 0, 0.24, 1], duration: .8}}
            className=' w-full h-full bg-sky-700'>
            </motion.div>


          </motion.div>
        </div>
       
    </div>
  )
}

export default Products
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../redux/actions/products';
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { productsCard } from '../redux/actions/card';


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.product);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(productsActionDetail(id))
  }, [dispatch])

  const increment = (stock) => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const addCard = () => {
    dispatch(productsCard(id, count))
    dispatch({type:"DRAWER", payload: true})
  }

  return (
    <div className='w-full xl:flex lg:flex items-center space-x-5 mt-10 xl:p-24 lg:p-10 m-0 max-sm:mb-8'>
      <div className='flex-1 flex items-center justify-center xl:mb-0 lg:mb-0 md:mb-10'>
        <img className='w-[300px] max-sm:w-[200px]' src={product?.image} alt="" />
      </div>
      <div className='flex-1 space-y-5 p-4 max-sm:p-2'>
        <div className='font-bold text-xl'>{product?.title}</div>
        <div className='opacity-70 max-sm:text-sm'>{product?.description}</div>
        <div className='opacity-70 max-sm:text-sm'>Category: {product?.category}</div>
        <div className='opacity-70 max-sm:text-sm'>Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}</div>
        <div className='font-bold text-xl'>Price: {product?.price} $</div>

        <div className='flex items-center space-x-4'>
          <CgMathMinus onClick={decrement} className='cursor-pointer border rounded-full p-1' size={30} />
          <span className='text-2xl'>{count}</span>
          <CgMathPlus onClick={() => increment(product?.rating?.count)} className='cursor-pointer border rounded-full p-1' size={30} />
        </div>
        <button onClick={addCard} className='px-6 py-2 tracking-widest bg-indigo-600 text-center text-base rounded-lg text-white'>ADD BASKET</button>
        
      </div>
    </div>
  )
}

export default Detail
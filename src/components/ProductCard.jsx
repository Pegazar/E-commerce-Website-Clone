import React from 'react';
import { useDispatch } from 'react-redux';
import { productsCard } from '../redux/actions/card';

const ProductCard = ({ prd }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(productsCard(prd.id, 1));
    };

    return (
        <div className='hover:border-indigo-600 hover:scale-105 hover:duration-200 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full border rounded-lg m-2 flex flex-col items-center p-4 space-y-2'>
            <img onClick={() => (window.location = `detail/${prd.id}`)} className='h-32 w-32 object-contain cursor-pointer' src={prd?.image} alt='' />
            <div className='font-bold h-16 text-center mt-2'>{prd?.title.substring(0, 30)}</div>
            <div className='text-center opacity-70 text-sm'>{prd?.description.substring(0, 45)} ...</div>
            <div className='font-bold text-lg'>{prd?.price} $</div>
            <button onClick={addToCart} className='bg-indigo-600 w-full p-2 rounded-lg text-white'>ADD BASKET</button>
        </div>
    );
};

export default ProductCard;
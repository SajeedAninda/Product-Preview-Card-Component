import React from 'react';
import productImg from "../assets/productImg.jpg";
import iconCartSvg from "../assets/icon-cart.svg";

const Card = () => {
    return (
        <div className='bg-[#f2ebe3] flex justify-center items-center h-full lg:h-screen'>
            <div className='w-[90%] md:w-[70%] lg:w-[50%] rounded-2xl my-20 flex flex-col lg:flex-row h-full lg:h-[70vh]'>
                <div className="imgDiv w-full lg:w-[50%] h-full">
                    <img className='w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl' src={productImg} alt="" />
                </div>
                <div className="textDiv w-full lg:w-[50%] bg-white p-8 rounded-br-2xl rounded-bl-2xl lg:rounded-tr-2xl lg:rounded-br-2xl h-full flex flex-col justify-between space-y-6 lg:space-y-0">
                    <h3 className='text-[#6C7289] text-base font-montserrat tracking-widest'>PERFUME</h3>
                    <h1 className='text-[#1C232B] text-3xl font-bold font-fraunces'>Gabrielle <br /> Essence Eau <br /> De Parfum</h1>
                    <p className='text-[#6C7289] text-[14px] font-montserrat'>
                        A floral, solar and voluptuous interpretation composed by <br /> Olivier Polge, Perfumer-Creator for <br /> the House of CHANEL.
                    </p>
                    <div className='flex justify-between items-center w-[70%]'>
                        <p className='text-[#3C8067] text-3xl font-bold font-fraunces'>$149.99</p>
                        <p className='text-[#6C7289] text-base line-through font-montserrat'>$169.99</p>
                    </div>
                    <button className='w-full flex justify-center items-center gap-2 px-3 py-3 bg-[#3C8067] text-white hover:bg-[#265040] rounded-2xl font-semibold font-montserrat'>
                        <img src={iconCartSvg} alt="" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;

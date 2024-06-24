import React from 'react';
import productImg from "../assets/productImg.jpg"

const Card = () => {
    return (
        <div className='bg-[#f2ebe3] flex justify-center items-center'>
            <div className='w-[50%] rounded-2xl my-20 flex h-[70vh] justify-center items-center'>
                <div className="imgDiv w-[50%] h-full">
                    <img className='w-full object-cover rounded-tl-2xl rounded-bl-2xl h-full' src={productImg} alt="" />
                </div>


                <div className="textDiv w-[50%] bg-white p-8 rounded-tr-2xl rounded-br-2xl h-full flex flex-col justify-evenly">
                    <h3 className='text-[#6C7289] text-base'>PERFUME</h3>

                    <h1 className='text-[#1C232B] text-3xl font-bold'>Gabrielle <br /> Essence Eau <br /> De Parfum</h1>

                    <p className='text-[#6C7289] text-base'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                    </p>

                    <div className='flex justify-between items-center w-[70%]'>
                        <p className='text-[#3C8067] text-3xl font-bold'>$149.99</p>

                        <p className='text-[#6C7289] text-base line-through'>
                            $169.99
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;
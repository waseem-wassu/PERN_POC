import React from 'react'
import './Card.css'
import Image from '../Assets/shoeimg.png'

function Card() {
    return (
        // <div className='card_container'>
        //     <div className='card_item'>
        //         <div className='card_content'>
        //             <div className='card_img_container'>
        //                 <img className='card_img' src={Image} alt='img' ></img>
        //             </div>
        //             <div className='card_title'>
        //                 <h4>Garnier</h4>
        //             </div>
        //             <div className='p_ele'>
        //                 <p >Garnier pure Active Micellar Cleansing Water. 125 ml</p>
        //             </div>
        //             <div className='price_block'><h3 className='price'>$60</h3></div>
        //             <div class="rating">
        //                 <span class="star">&#9733;</span>
        //                 <span class="star">&#9733;</span>
        //                 <span class="star">&#9733;</span>
        //                 <span class="star">&#9733;</span>
        //                 <span class="star">&#9733;</span>
        //             </div>                
        //         </div>
        //         <div className='card_footer'> <p >ADD TO CART</p>
        //         </div>
        //     </div>
        // </div>

        <>
            <div className='card_container'>
                <div className='imag_container'>
                    <img src={Image} />
                </div>
                <div className='card_title'>
                    <h3 >Vintage Leather Bag</h3>
                </div>
                <div className='card_content'>
                    <p>handmade leather totes, women's leather accessories, handbag and pures,work...</p>
                </div>
                <div className='card_price'>
                    <h2>$299</h2>
                    <button>+</button>
                </div>
                <div className='card_btn'>
                <button>ADD TO CART </button>
                <button>BUY NOW</button>
                </div>
            </div>
        </>


    )
}

export default Card
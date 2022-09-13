import React from 'react';
import './Header.css'

import {HiSearch} from "react-icons/hi";


export default function Header (){
return(
<div className="Header">
    <nav>


    <button href="/"><img href="/" id="logo" src="https://cdn.shopify.com/s/files/1/0535/5107/1386/t/84/assets/CASTORE_NUFC_LANDSCAPE_300x.png?v=117929071967020549901660920043" alt="" /> 
    </button>
    <a href="/product">NEW ARRIVALS</a>
    <a id="kits" href="http://">KITS</a> 
    <div className="kit">
        
        <ul>
        <h4> Home Kit</h4>
        <p>Men's</p>
        <p>Women's</p>
        <p>Junior</p>
        <p>Infant</p>
        <p>Baby</p>
        <p>Away Kit</p>
        </ul>
    
        <ul>
        <h4> Away Kits</h4>
        <p>Men's</p>
        <p>Women's</p>
        <p>Junior</p>
        <p>Infant</p>
        <p>Baby</p>
        
        </ul>
        
        <ul>
        <h4>Alternate Kits</h4>
        <p>Men's</p>
        <p>Women's</p>
        <p>Junior</p>
        <p>Infant</p>
        <p>Baby</p>
        </ul>        

    </div>
    <a id="train" href="http://">TRAINING</a> 
    <div className="train-drop">
        <ul>
        <h4> 22/23 Training</h4>
        <p>Men's</p>
        <p>Women's</p>
        <p>Junior</p>
        </ul>
    </div>
    <a href="http://">TRAVEL</a> 
    <a href="http://">OUTERWEAR</a> 
    <a href="http://">ACCESSORIES</a>
    <a href="http://">LEISURE</a> 
    <a href="http://">CASTORE</a> 


    
    <HiSearch className='material-symbols-outlined'/>
    
    <span className="material-symbols-outlined">person</span>
    <div className="vl"></div>
    <a href="/cart"><span  className="material-symbols-outlined" >shopping_bag</span>
    </a>
    <div className="vl"></div>
    <span className="material-symbols-outlined">flag</span>
    

</nav>
<section className="sec01 ">
    <h5 className='py-1 text-center text-white'>Free shipping to Nigeria on all orders above ₦48,760</h5>
    {/* <img src="https://cdn.shopify.com/s/files/1/0535/5107/1386/collections/NUFCAwayDigitalStoreAssets_e9cf41d3-ec70-4466-8672-c3320ca1017e_1400x.jpg?v=1659084989" alt="" /> */}
</section>
</div>
)} 
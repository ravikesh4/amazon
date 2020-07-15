import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://www.neeo.es/wp-content/uploads/2018/03/amazon-prme.jpg" alt="" />

            <div className="home__row">
            <Product 
                id="1234" 
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                price={11.96} 
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
            />
            <Product 
                id="1235" 
                title="Stand Mixer (cake Mixer)" 
                price={11.96} 
                rating={4} 
                image="https://www.aajjo.com/ClientContent/Images/Large/20191108073043-7e05d7b8-2fee-4469-9eae-fec406ad8026.jpg" 
            />
            </div>

            <div className="home__row">
            <Product 
                id="1236" 
                title="Honor Watch Magic (Lava Black) 9.8mm Thickness & Lightweight Smart Watch, Personal Fitness Mentor, Watch " 
                price={30.96} 
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/81wWxtlyb6L._SX466_.jpg" 
            />
            <Product 
                id="1238" 
                title="Amazon Echo Dot 3rd Gen New And Improved Smart Speaker With Alexa Black" 
                price={20.96} 
                rating={5} 
                image="https://5.imimg.com/data5/XN/VF/KW/SELLER-12479946/amazon-echo-dot-3rd-gen-500x500.jpg" 
            />
            <Product 
                id="1239" 
                title="12.9-inch iPad Pro Wi‑Fi + Cellular 1TB - Space Gray" 
                price={11.96} 
                rating={5} 
                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553672276" 
            />
            </div>

            <div className="home__row">
            <Product 
                id="1244" 
                title="The big picture: LG, Samsung to unveil 105-inch Ultra HDTVs" 
                price={11.96} 
                rating={5} 
                image="https://media3.s-nbcnews.com/j/streams/2013/December/131219/2D10230317-lg-105ub9-1-580.social_share_1024x768_scale.jpg" 
            />
            </div>
        </div>
    )
}

export default Home

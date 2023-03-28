import React, { useState } from 'react'

const Header2 = ({ hamMenu }) => {
    

    // tThis is the list of the items in the second navigation bar it can be added to.
    const navigationList = ["All Categories", "HandCrafts", "Art", "FootWear", "Accessories", "Hair Zones", "Print Fabrics", "Food Stuff & Allied Agro Products", "Herbs/Spices & Spiritual", "Education", "General Services"]

  return (
    <div className={hamMenu ? 'header2 fade-in' : 'header2 fade-out'}>
        <div className='container'>
            <div className='header'>
                {/* MAPPING THROUGH THE NAVIGATION LIST ARRAY */}
                {
                    navigationList.map((item, index) => {
                       return <span key={index}>{item}</span>
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default Header2;

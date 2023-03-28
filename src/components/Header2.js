import React from 'react'

const Header2 = () => {

    // tThis is the list of the items in the second navigation bar it can be added to.
    const navigationList = ["All Categories", "HandCrafts", "Art", "FootWear", "Accessories", "Hair Zones", "Print Fabrics", "Food Stuff & Allied Agro Products", "Herbs/Spices & Spiritual", "Education", "General Services"]

  return (
    <div className='header2'>
        <div className='container'>
            <div className='header'>
                {/* MAPPING THROUGH THE NAVIGATION LIST ARRAY */}
                {
                    navigationList.map((item) => {
                       return <span>{item}</span>
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default Header2

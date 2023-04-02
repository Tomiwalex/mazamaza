import React from 'react'
import { useState } from 'react';
import navigationLists from '../json/navigationList.json'
import { AppContext } from '../App';
import { useContext } from 'react';



const Categorypop = () => {

    const [navigationList, setNavigationList] = useState(navigationLists);
    const { setShowOnHover, navigationSubPage, setNavigationSubPage, showNavigationSubPage, showOnHover } = useContext(AppContext)

    // setting the sublist
    const showSubList = (id) => {
        const sublists = navigationList.filter((item) => {
           return item.sublistTag == id 
        })

        setNavigationSubPage(sublists);
        console.log(sublists)
    }

  return (

    <div className={showNavigationSubPage ?  'categoryspopup fade-in' : 'fade-out categoryspopup '}
        id={ showOnHover && 'display'}
        onMouseOver={() => setShowOnHover(true)}
        onMouseLeave={() => setShowOnHover(false)}
    >
        <div className='container'>
            <div className='categorypopup'>
                <div className='navigationlist h-f-dm'>
                    {/* MAPPING THROUGH THE .NAVIGATION LIST ARRAY */}
                    {
                        navigationList.map((item, index) => {
                        return <span 
                        onClick={() => showSubList(item.sublistTag)} 
                        key={index}>{item.heading}

                        </span>
                        })
                    }
                </div>

                <div className='navigationlist-sub-section'>
                    {
                        navigationSubPage.map((list, index) => {
                            const createlist = list.sublist;
                            console.log(createlist)

                            return ( createlist.map((item, index) => {
                                 return (
                                 <span key={index}>{item}</span>
                                 )
                             }))
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categorypop

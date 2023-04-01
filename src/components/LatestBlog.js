import React from 'react'
import blogs from '../json/blog.json'
import blogimg from '../images/blogimg.png'

const LatestBlog = () => {
  return (
    <div className='Blogs'>
        <div className='container'>
            <div className='blog'>
                <h2>Latest Blogs</h2>

                <div className='blog-content f-jc-sb'>

                    {
                        blogs.map((blog, index) => {
                            return (
                                <div className='content'>
                                    <img src={blogimg}/>
                                    <p className='date'>
                                        Mazamaza  
                                        <span>{blog.date}</span>
                                    </p>

                                    <p className='blog'>
                                        {blog.blog}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default LatestBlog

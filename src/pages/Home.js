import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
        <div>Home Page</div>
        <Link to='/industrylist'>
            <div>START</div>
        </Link>
        </div>
    )
}

export default Home;
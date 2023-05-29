import React from 'react'
import { useNavigate } from 'react-router-dom'

function Blog() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div>
            <div>Blog Page</div>
            <button type="button" onClick={handleClick}>
                BackToHome
            </button>
        </div>
    )
}

export default Blog
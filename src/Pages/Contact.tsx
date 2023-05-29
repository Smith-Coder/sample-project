import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
    let { id } = useParams();
    return (
        <div>
            <h1>Contact us page {id}</h1>
        </div>
    )
}

export default Contact
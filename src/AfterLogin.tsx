import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import NoPage from './Pages/NoPage'
function AfterLogin() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blog />} />
                    <Route path="contact/:id" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AfterLogin
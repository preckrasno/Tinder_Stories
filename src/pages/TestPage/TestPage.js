import React from 'react';
import Header from '../../components/Header/Header';
import './TestPage.scss'

const TestPage = () => {
    return (
        <div>
            <Header></Header>
            <main className="gallery">
                <img src="https://placeimg.com/640/480/animals" alt="" />
                <img src="https://placeimg.com/640/480/arch" alt="" />
                <img src="https://placeimg.com/640/480/nature" alt="" />
                <img src="https://placeimg.com/640/480/people" alt="" />
                <img src="https://placeimg.com/640/480/tech" alt="" />
            </main>
        </div>
    )
}

export default TestPage;
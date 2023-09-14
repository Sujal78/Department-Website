import React from 'react'
import Navbar from './Navbar'

export default function SponsColab() {
    return (
        <>
            <Navbar/>
            {/* <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Sponsors and Collaborators</h2>
                </div>
            </div> */}
            <br></br><br></br><br></br><br></br>
            <img className="advanced-feature-img-right wow fadeInRight" src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/Sponsors.png'} alt=""/>
            <br></br><br></br><br></br>
        </>
    )
}

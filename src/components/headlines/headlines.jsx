import React from "react";
import './headlines.css'
const Headlines = () => {
    const Heading = () => {
        return (
            <>
                <hr />
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            </>
        )

    }
    const Podcasts = () => {
        return (
            <>
                <hr />
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            </>
        )
    }
    return (
        <>
            <div className="Headcon">
                <div className="headlines Headcom">
                    <h1>Feautured Interviews</h1>
                    <Heading />
                    <Heading />
                    <Heading />
                </div>
                <div className="podcast Headcom">
                    <h1>Podcasts</h1>
                    <Podcasts />
                    <Podcasts />
                    <Podcasts />
                </div>
            </div>
        </>
    )
}
export default Headlines
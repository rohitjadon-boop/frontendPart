import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
const Home=() => {
    
    useEffect(() => {
        document.title="Home || Pepcoding"
    })

    return (
        <div >
        <div className="text-center">
            <h1>LearnWith Team Pepcoding</h1>
            <p>This Is Developed By React Developer Team In Pepcoding</p>
            <NavLink to="about">
            <Button variant="outline-primary" onClick={() => toast.success("Completed!!")}>Welcome</Button>
            </NavLink>
            <hr />
        </div>
        </div>
    )
}

export default Home;
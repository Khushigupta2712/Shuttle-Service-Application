import React, { Component } from 'react';
import { GrAchievement } from "react-icons/gr";
import Navbar from './Components/shared/Navbar';

class Home extends Component {
    render() {
        return (
            <div className="">
                <Navbar/>
                <div className="container"><h1 className="text-center">Hello</h1></div>
                <GrAchievement style={{height:60}}/>
                <a href="/book-bus">Bus</a>
                
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import Hero from './hero';
import Features from './features';

class Landing extends Component {
    render() {
        return(
            <div>
                <Hero />
                <Features />
            </div>
        );
    }
}

export default Landing;
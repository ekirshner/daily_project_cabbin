import React, { Component } from 'react';
import Grid from './Grid';

class GridDisplay extends Component {
    render() {
        return (
            <div className="grid-display">
                <section>
                    <Grid x="1" y="5" />
                    <Grid x="1" y="4" />
                    <Grid x="1" y="3" />
                    <Grid x="1" y="2" />
                    <Grid x="1" y="1" />
                </section>
                <section>
                    <Grid x="2" y="5" />
                    <Grid x="2" y="4" />
                    <Grid x="2" y="3" />
                    <Grid x="2" y="2" />
                    <Grid x="2" y="1" />
                </section>
                <section>
                    <Grid x="3" y="5" />
                    <Grid x="3" y="4" />
                    <Grid x="3" y="3" />
                    <Grid x="3" y="2" />
                    <Grid x="3" y="1" />
                </section>
                <section>
                    <Grid x="4" y="5" />
                    <Grid x="4" y="4" />
                    <Grid x="4" y="3" />
                    <Grid x="4" y="2" />
                    <Grid x="4" y="1" />
                </section>
                <section>
                    <Grid x="5" y="5" />
                    <Grid x="5" y="4" />
                    <Grid x="5" y="3" />
                    <Grid x="5" y="2" />
                    <Grid x="5" y="1" />
                </section>
            </div>
        );
    }
}

export default GridDisplay;
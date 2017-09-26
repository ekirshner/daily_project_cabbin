import React, { Component } from 'react';

import { connect } from 'react-redux';
import { move } from '../actions';

class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: parseInt(this.props.x), 
            y: parseInt(this.props.y),
            visited: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.posx === this.state.x && nextProps.posy == this.state.y ) {
            this.setState ({
                visited: true,
            })
        }
    }


    render() {
   
        if(this.props.posx === this.state.x && this.props.posy === this.state.y) {
            return (
                <div className="cell-selected">
                </div>
            );
        } else if (this.state.visited) {
            return (
                <div className="visited-cell">
                </div>
            )
        }else {
            return (
                <div className="cell">
                </div>
            );
        }
    }
}


//Connect to Store

function state2props(state) {
    // returns an object containing new props that we want to exist
    // and where they get their data
    return {
        posx: state.x,
        posy: state.y,
    };
}

function dispatch2props(dispatch) {
    // returns an object containing new props that we want to exist
    // and what actions they dispatch
    return { };
}

export default connect(state2props, dispatch2props)(Grid);


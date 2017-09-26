import React, { Component } from 'react';

// Purpose: connecting redux store to react component
import { connect } from 'react-redux';
import { move } from '../actions';

class ControlPanel extends Component {

    render() {
        let upDisable = true;
        let downDisable = true;
        let leftDisable = true;
        let rightDisable = true;

        if(this.props.y < 5 && this.props.gas > 0) {
            upDisable = false;
        }
        if(this.props.y > 1 && this.props.gas > 0) {
            downDisable = false;
        } 
        if(this.props.x > 1 && this.props.gas > 0) {
            leftDisable = false;
        } 
        if(this.props.x < 5 && this.props.gas > 0) {
            rightDisable = false;
        }
  

        return (
            <div>
                <p>Gas: {this.props.gas}</p>
                <p>Score: {this.props.score}</p>
                <p>Position: ({this.props.x}, {this.props.y})</p>

                <section>
                    <div>
                        <button onClick={() => this.props.up()} disabled={upDisable} >Up</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.left()} disabled={leftDisable} >Left</button>
                        <button onClick={() => this.props.right()} disabled={rightDisable} >Right</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.down()} disabled={downDisable} >Down</button>
                    </div>
                </section>
                
            </div>
        );
    }
}

function state2props(state) {
    // returns an object containing new props that we want to exist
    // and where they get their data
    return {
        gas: state.gas,
        score: state.score,
        x: state.x,
        y: state.y,
    };
}

function dispatch2props(dispatch) {
    // returns an object containing new props that we want to exist
    // and what actions they dispatch
  
    return {
        up: () => dispatch(move(0, 1)),
        down: function () { // es5
            dispatch(move(0, -1));
        },
        left: () => dispatch(move(-1, 0)),
        right: () => dispatch(move(1, 0)),
    };
}

export default connect(state2props, dispatch2props)(ControlPanel);
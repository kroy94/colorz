import React from "react";
import { connect } from "react-redux";

import { setColorActionCreator } from "../store";

class Red extends React.Component {
    render() {
        return (
            <div className="color-picker" id="red">
                <p>"Red is the first color of spring. It's the real color of rebirth. Of beginning."</p>
                <input
                    type="range"
                    min="0"
                    max="255"
                    step="1"
                    onChange={e => this.props.setRed(e.target.value)}
                    value={this.props.currentRed}
                />
            </div>
        );
    }
}

export const ConnectedRed = connect(
    state => {
        return { currentRed: state.currentColor[0] };
    },
    dispatch => {
        return {
            setRed: (newRed) => {
                dispatch(setColorActionCreator("red", newRed));
            }
        }
    }
)(Red);

const Green = (props) => {
    return (
        <div className="color-picker" id="green">
            <p>"Green fingers are the extension of a verdant heart."</p>
            <input
                type="range"
                min="0"
                max="255"
                step="1"
                onChange={e => props.pickGreen(e.target.value)}
                value={props.theGreen}
            />
        </div>
    );
};

const greenConnector = connect(
    function (reduxState) {
        return {
            theGreen: reduxState.currentColor[1]
        };
    },
    function (dispatch) {
        return {
            pickGreen: (newGreenNumber) => {
                const updateGreenAction = setColorActionCreator("green", newGreenNumber);
                dispatch(updateGreenAction);
            }
        };
    }
);

export const ConnectedGreen = greenConnector(Green);


const blueMapState = (everythingFromRedux) => {
    return {
        bluey: everythingFromRedux.currentColor[2]
    };
};

const blueMapDispatch = (dispatch) => {
    const sendBlue = (newBlue) => {
        dispatch(setColorActionCreator("blue", newBlue));
    };
    return {
        setBlue: sendBlue
    };
};

export const ConnectedBlue = connect(blueMapState, blueMapDispatch)(
    class Blue extends React.Component {
        render() {
            return (
                <div className="color-picker" id="blue">
                    <p>"Blue thou art, intensely blue;</p>
                    <p>Flower, whence came thy dazzling hue?"</p>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                        onChange={e => this.props.setBlue(e.target.value)}
                        value={this.props.bluey}
                    />
                </div>
            );
        }
    }
);
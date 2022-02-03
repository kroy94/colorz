import React from "react";
import { connect } from "react-redux";

import { saveColorToServer } from "../store";

const ColorSquare = ({ colorArray }) => {
    return (
        <div className="saved-color-square" style={{ background: `rgb(${colorArray.join(",")})` }} />
    );
};

const colorIsWhite = (color) => {
    return color.every(channel => channel === "255");
};

class CaptureColor extends React.Component {
    render() {
        const { allSavedColors, currentColor } = this.props;
        /*
            Identical to:
        const allSavedColors = this.props.allSavedColors;
        const currentColor = this.props.currentColor;
        */
        return (
            <div id="save-color-panel">
                <div>
                    <p>Current color: {JSON.stringify(currentColor)}</p>
                    {!colorIsWhite(currentColor) && (
                        <button onClick={() => this.props.saveColor(currentColor)}>
                            Capture Color
                        </button>
                    )}
                </div>
                <div id="saved-list">
                    {allSavedColors.map(color => <ColorSquare colorArray={color} />)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (fullreduxState) => {
    return {
        currentColor: fullreduxState.currentColor,
        allSavedColors: fullreduxState.savedColors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveColor: (color) => {
            dispatch(saveColorToServer(color));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaptureColor);
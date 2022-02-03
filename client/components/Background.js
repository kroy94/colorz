import React from "react";
import { connect } from "react-redux";

class ColorBackground extends React.Component {
    render() {
        const c = this.props.fullColor;

        const styleColor = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
        const styleObj = {
            backgroundColor: styleColor
        };

        return (
            <div id="color-background" style={styleObj}>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        fullColor: reduxState.currentColor
    };
};

export default connect(mapStateToProps)(ColorBackground);
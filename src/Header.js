import React, { Component } from 'react';
import connect from './react-redux/connect';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            themeColor: ''
        }
    }

    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>Header</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(Header);
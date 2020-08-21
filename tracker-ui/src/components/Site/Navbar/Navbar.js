import React, { Component } from 'react';
import classes from './Navbar.module.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SidePanel from './SidePanel/SidePanel';
import { withRouter } from 'react-router';

class Navbar extends Component {
    state = {
        showSideDrawer: false,
    }

    toggleDrawer = (show) => {
        this.setState({ showSideDrawer: show });
    }

    routingHandler = (route) => {
        this.props.history.push(route);
    }

    render() {
        return (
            <div className={"navbar " + classes['navbar-shadow']}>
                <span className="">Vaccination Tracker</span>
                <span className="text-right">
                    <IconButton onClick={() => this.toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </span>
                <SidePanel showDrawer={this.state.showSideDrawer}
                    toggleDrawer={this.toggleDrawer}
                    routingHandler={this.routingHandler} />
            </div>
        )
    }
}

export default withRouter(Navbar);
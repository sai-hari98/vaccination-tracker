import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import classes from './SidePanel.module.css'

export default class SidePanel extends Component {
    render() {
        return (
            <SwipeableDrawer
                anchor='right'
                open={this.props.showDrawer}
                onClose={() => this.props.toggleDrawer(false)}
                onOpen={() => this.props.toggleDrawer(true)}>
                <div
                    className={classes['drawer-width']}
                    role="presentation"
                    onClick={() => this.props.toggleDrawer(false)}
                    onKeyDown={() => this.props.toggleDrawer(false)}
                >
                    <List>
                        <ListItem button onClick={() => this.props.routingHandler('/register')}>
                            Register Patient
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        )
    }
}
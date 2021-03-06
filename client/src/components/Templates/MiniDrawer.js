import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { SnackbarProvider } from 'notistack';
import { Route, Link } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import { mailFolderListItems, otherMailFolderListItems } from '../Organisms/tileData';

import UserPage from '../Pages/UserPage';
import RolePage from '../Pages/RolePage';
import SystemPage from '../Pages/SystemPage';
import ReportPage from '../Pages/ReportPage';
import Login from '../auth/Login';
import Secure from '../Pages/SecurePage';



const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: 1000,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    link: {
        textDecoration: 'none', 
        color: 'white',
    }
});

function onAuthRequired({ history }) {
    history.push('/login');
}

class MiniDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <Security
                issuer='https://dev-689245.oktapreview.com/oauth2/default'
                client_id='0oagkz02eecjzv4j90h7'
                redirect_uri={window.location.origin + '/implicit/callback'}
                onAuthRequired={onAuthRequired}
            >
                <div className={classes.root}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                <Link to="/" className={classes.link}>User Access Tracking</Link>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>{mailFolderListItems}</List>
                        <Divider />
                        <List>{otherMailFolderListItems}</List>
                    </Drawer>
                    <SnackbarProvider
                        maxSnack={3}
                        autoHideDuration={5000}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                    >
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <Route path="/" exact render={
                                () => {
                                    return (
                                        <Typography noWrap>{'Welcome to user access tracking system!'}</Typography> 
                                    );
                                }
                            } />
                            <Route path="/user" component={UserPage} />
                            <Route path="/role" component={RolePage} />
                            <Route path="/system" component={SystemPage} />
                            <Route path="/report" component={ReportPage} />
                            <SecureRoute path='/secure' exact={true} component={Secure} />
                            <Route path='/implicit/callback' component={ImplicitCallback} /> 
                            <Route
                                path='/login'
                                render={() => <Login baseUrl='https://dev-689245.oktapreview.com' />}
                            />                  
                        </main>
                    </SnackbarProvider>
                </div>
            </Security>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
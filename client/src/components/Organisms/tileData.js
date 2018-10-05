import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountIcon from '@material-ui/icons/AccountBox';
import SystemIcon from '@material-ui/icons/Computer';
import RoleIcon from '@material-ui/icons/SupervisorAccountRounded';
import MailIcon from '@material-ui/icons/Mail';
import DsiabledIcon from '@material-ui/icons/DesktopAccessDisabledRounded';
import ReportIcon from '@material-ui/icons/AssessmentRounded';
import { Link } from 'react-router-dom';

const styles = {
    link: {
        textDecoration: 'none'
    }
}

export const mailFolderListItems = (
    <div>
        <Link to="/user" style={styles.link}>
            <ListItem button>
                <ListItemIcon>
                    <AccountIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
        </Link>
        <Link to="/system" style={styles.link}>
            <ListItem button>
                <ListItemIcon>
                    <SystemIcon />
                </ListItemIcon>
                <ListItemText primary="Systems" />
            </ListItem>
        </Link>
        <Link to="/role" style={styles.link}>
            <ListItem button>
                <ListItemIcon>
                    <RoleIcon />
                </ListItemIcon>
                <ListItemText primary="Roles" />
            </ListItem>
        </Link>
    </div>
);

export const otherMailFolderListItems = (
    <div>
        <Link to="/report" style={styles.link}>
            <ListItem button>
                <ListItemIcon>
                    <ReportIcon />                
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
        </Link>
        <ListItem button>
            <ListItemIcon>
                <DsiabledIcon />
            </ListItemIcon>
            <ListItemText primary="Disabled Users" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />    
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);
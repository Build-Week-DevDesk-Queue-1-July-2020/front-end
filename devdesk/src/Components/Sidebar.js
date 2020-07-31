import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    link: {
      textDecoration: "none",
      color: "#000000"
    }
  }));


const Sidebar = ({ links }) => {
    const classes = useStyles();

    return (
        <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        >
            <div className={classes.toolbar} />
            <List>
                {links.map( (link, index) => (
                <Link to={link.url} key={index} className={classes.link}>
                    <ListItem button key={link.title}>
                    <ListItemIcon>
                        {link.icon}
                    </ListItemIcon>
                    <ListItemText primary={link.title} />
                    </ListItem>
                </Link>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;



import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { drawerWidth, useStyles } from "../styles/LayoutStyles";
import { menuItems } from "../data/menuItems";

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        className={classes.appBar}
        position="fixed"
        color="transparent"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.appBarTitle}>
            Projex App
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar className={classes.appBar} />

        <Box sx={{ overflow: "auto" }}>
          <List
            subheader={
              <ListSubheader component="span" className={classes.menuSubheader}>
                Project
              </ListSubheader>
            }
          >
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => history.push(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon className={classes.menuIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  className={classes.menuText}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.appBar} style={{ zIndex: 1000 }}></div>
        <div className={classes.pageInner}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

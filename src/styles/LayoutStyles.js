/**
 * Provides all style elements of the Layout component. 
 */

import { makeStyles } from "@material-ui/core";

export const drawerWidth = 260;

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
      backgroundColor: "#fff",
    },
    appBar: {
      height: 85,
      zIndex: theme.zIndex.drawer + 1,
      justifyContent: "center",
    },
    appBarTitle: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      border: "none",
    },
    page: {
      width: "100%",
      paddingRight: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
    },
    pageInner: {
      borderTopLeftRadius: theme.border.radius,
      borderTopRightRadius: theme.border.radius,
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(3),
      flexGrow: 1,
    },
    menuSubheader: {
      color: theme.palette.text.primary,
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      fontFamily: "Quicksand",
      fontWeight: 600,
      fontSize: 14,
      display: "block",
    },
    menuIcon: {
      "& > .MuiSvgIcon-colorSecondary": {
        color: theme.palette.text.disabled,
      },
    },
    menuText: {
      color: theme.palette.text.secondary,
    },
  };
});

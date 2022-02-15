/**
 * Provides all style elements of the Backlog component.
 */

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    mainContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(2),
    },
    header: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      flexGrow: 1,
    },
    paper: theme.paper,
    ticketListContainer: {
      width: "100%",
    },
    selectedTicket: {
      width: "100%",
    },
    backlogContainer: {
      display: "flex",
      gap: theme.spacing(2),
      height: "100%",
    },
    activeListItem: {
      backgroundColor: theme.palette.primary.main
    },
    ticketList: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    ticketListItem: {
      
    },
    listEmpty: {
      height: '100%'
    }
  };
});

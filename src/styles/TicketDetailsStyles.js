/**
 * Provides all style elements of the Backlog component.
 */

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    detailRow: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      alignItems: "center",
    },
    detailEmpty: {
      height: '100%'
    }
  };
});

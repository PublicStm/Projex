import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { Close, Subject } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { diGetAllPriorities } from "../data/dataInterface";
import { useStyles } from "../styles/TicketDetailsStyles";

const TicketDetails = ({ activeTicket, updateTicket, closeTicket }) => {
  const classes = useStyles();
  const priorities = diGetAllPriorities();
  const [tempTicket, setTempTicket] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
      setTempTicket(activeTicket);

  }, [activeTicket]);

  const onUpdateValue = (property, event) => {
    setTempTicket({ ...tempTicket, [property]: event.target.value });
    setHasChanges(true);
  };

  const onSave = (event) => {
    event.preventDefault();
    updateTicket(tempTicket);
    closeTicket();
  };

  const rendered = (ticket) => {
    if (ticket == null) {
      return (
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          className={classes.detailEmpty}
        >
          <Grid item xs={6}>
            <Typography variant="h6" align="center">
              <Subject fontSize="large" />
            </Typography>
            <Typography variant="h6" align="center">
              No Ticket open
            </Typography>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <form onSubmit={onSave}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h5">{ticket.shortcode}</Typography>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end">
              <Button variant="contained" onClick={()=> closeTicket()}>
                <Close />
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.detailRow}>
              <TextField
                variant="outlined"
                value={ticket.title}
                onChange={(event) => onUpdateValue("title", event)}
                fullWidth
                required
              />
            </Grid>
            <Grid item container className={classes.detailRow}>
              <Grid item xs={4}>
                <Typography variant="subtitle2">Priority</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl>
                  <RadioGroup
                    value={ticket.priorityId}
                    onChange={(event) => onUpdateValue("priorityId", event)}
                    row
                    required
                  >
                    {priorities.map((priority) => (
                      <FormControlLabel
                        value={priority.id}
                        control={<Radio />}
                        label={priority.label}
                        key={priority.id}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container className={classes.detailRow}>
              <Grid item xs={4}>
                <Typography variant="subtitle2">Due date</Typography>
              </Grid>
              <Grid item xs={8}>
                Date picker
              </Grid>
            </Grid>
            <Grid item container className={classes.detailRow}>
              <Grid item xs={4}>
                <Typography variant="subtitle2">Label</Typography>
              </Grid>
              <Grid item xs={8}>
                Input
              </Grid>
            </Grid>
            <Grid item container className={classes.detailRow}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!hasChanges}
                  size="large"
                  fullWidth
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      );
    }
  };

  return <React.Fragment>{rendered(tempTicket)}</React.Fragment>;
};

export default TicketDetails;

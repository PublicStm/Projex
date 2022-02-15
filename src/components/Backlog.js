import {
  List,
  ListItem,
  ListItemText,
  Paper,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import {
  diGetAllTicketsByProject,
  diGetTicketBoilerplate,
  diUpdateOrCreateTicket,
} from "../data/dataInterface";
import { useStyles } from "../styles/BacklogStyles";
import TicketDetails from "./TicketDetails";

const Backlog = ({ allProjects, currentProject, setCurrentProject }) => {
  const classes = useStyles();
  const [tickets, setTickets] = useState([]);
  const [activeTicket, setActiveTicket] = useState(null);
  const [isNewTicket, setIsNewTicket] = useState(false);

  useEffect(() => {
    setTickets(diGetAllTicketsByProject(currentProject));
    setActiveTicket(null);
  }, [currentProject]);

  const handleClickOpenRemoveDialog = (ticket) => {
    console.log('open remove dialog');
  };

  const handleCloseRemoveDialog = () => {
    console.log('close remove dialog');
  };

  const openEmptyTicket = () => {
    const boilerplate = diGetTicketBoilerplate(currentProject);
    setActiveTicket(boilerplate);
    setIsNewTicket(true);
  };

  const openTicket = (ticket) => {
    setIsNewTicket(false);
    setActiveTicket(ticket);
  };

  const closeTicket = () => {
    setActiveTicket(null);
  };

  const onUpdateOrCreateTicket = (editedTicket) => {
    setActiveTicket(editedTicket);

    const response = diUpdateOrCreateTicket(
      editedTicket,
      currentProject,
      isNewTicket
    );

    if (response !== false) {
      setTickets(response);
    }
  };

  const ticketList = (tickets) => {
    if (tickets.length > 0) {
      return (
        <React.Fragment>
          <List className={classes.ticketList}>
            {tickets.map((ticket) => (
              <ListItem
                button
                key={ticket.id}
                className={`${
                  activeTicket != null && ticket.id === activeTicket.id
                    ? classes.activeListItem
                    : null
                } ${classes.ticketListItem}`}
                onClick={() => {
                  openTicket(ticket);
                }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={10}>
                    <ListItemText primary={ticket.title} />
                  </Grid>
                  <Grid item xs={2} container justifyContent="flex-end">
                    <IconButton
                      aria-label="delete"
                      onClick={handleClickOpenRemoveDialog(ticket)}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          {/*<Dialog open={openRermoveDialog} onClose={handleCloseRemoveDialog}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText>some text here ....</DialogContentText>
              <DialogActions>
                <Button onClick={handleCloseRemoveDialog} color="primary">
                  Disagree
                </Button>
                <Button
                  onClick={handleCloseRemoveDialog}
                  color="primary"
                  autoFocus
                >
                  Agree
                </Button>
              </DialogActions>
            </DialogContent>
              </Dialog>*/}
        </React.Fragment>
      );
    }

    return (
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        className={classes.listEmpty}
      >
        <Grid item xs={6} onClick={openEmptyTicket}>
          <Typography variant="h6" align="center">
            <Add fontSize="large" />
          </Typography>
          <Typography variant="h6" align="center">
            Create your first ticket
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box className={classes.mainContainer}>
      <Paper elevation={0} className={`${classes.paper} ${classes.header}`}>
        <Typography variant="h5" className={classes.title}>
          Backlog
        </Typography>
        <FormControl>
          <Select
            value={currentProject.id}
            onChange={setCurrentProject}
            autoWidth
            variant="outlined"
          >
            <MenuItem value="none" disabled>
              Current Project
            </MenuItem>
            {allProjects
              ? allProjects.map((project) => {
                  return (
                    <MenuItem value={project.id} key={project.id}>
                      {project.title} ({project.shortcode})
                    </MenuItem>
                  );
                })
              : null}
          </Select>
        </FormControl>
      </Paper>
      <Box className={classes.backlogContainer}>
        <Paper
          elevation={0}
          className={`${classes.ticketListContainer} ${classes.paper}`}
        >
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              startIcon={<Add />}
              aria-label="add new Ticket"
              color="secondary"
              onClick={openEmptyTicket}
            >
              New
            </Button>
          </Grid>
          {ticketList(tickets)}
        </Paper>

        <Paper
          elevation={0}
          className={`${classes.selectedTicket} ${classes.paper}`}
        >
          <TicketDetails
            activeTicket={activeTicket}
            updateTicket={onUpdateOrCreateTicket}
            closeTicket={closeTicket}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Backlog;

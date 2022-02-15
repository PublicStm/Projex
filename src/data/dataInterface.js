/**
 * Provides correctly structured data from the cache or API.
 */
import { getRandomString } from "./helper";

/// TODO: import firebase API js

/* Temporary data source */
let DUMMY_PROJECTS = [
  {
    lastModified: "some datetime",
    id: "some-project-id-01",
    title: "Title of Project 01",
    description: "Description of Project 01",
    shortcode: "DP",
  },
  {
    lastModified: "some datetime",
    id: "some-project-id-02",
    title: "Title of Project 02",
    description: "Description of Project 02",
    shortcode: "ADP",
  },
  {
    lastModified: "some datetime",
    id: "some-project-id-03",
    title: "Title of Project 03",
    description: "Description of Project 03",
    shortcode: "ASDP",
  },
];
let DUMMY_TICKETS = [
  {
    lastModified: "some datetime",
    id: "some-ticket-id-01",
    title: "Ticket title 01",
    description: "Ticket description 01",
    shortcode: "DP-1",
    projectId: "some-project-id-01",
    priorityId: "prio-id-01",
  },
  {
    lastModified: "some datetime",
    id: "some-ticket-id-02",
    title: "Ticket title 02",
    description: "Ticket description 02",
    shortcode: "DP-2",
    projectId: "some-project-id-01",
    priorityId: "prio-id-02",
  },
  {
    lastModified: "some datetime",
    id: "some-ticket-id-03",
    title: "Ticket title 03",
    description: "Ticket description 03",
    shortcode: "DP-3",
    projectId: "some-project-id-01",
    priorityId: "prio-id-03",
  },
  {
    lastModified: "some datetime",
    id: "some-ticket-id-04",
    title: "Ticket title 01 anderes Projekt",
    description: "Ticket description 01",
    shortcode: "ADP-1",
    projectId: "some-project-id-02",
    priorityId: "prio-id-02",
  },
  {
    lastModified: "some datetime",
    id: "some-ticket-id-05",
    title: "Ticket title 02 anderes Projekt",
    description: "Ticket description 02",
    shortcode: "ADP-2",
    projectId: "some-project-id-02",
    priorityId: "prio-id-01",
  },
];
let DUMMY_PRIORITIES = [
  {
    lastModified: "some datetime",
    id: "prio-id-01",
    label: "low",
  },
  {
    lastModified: "some datetime",
    id: "prio-id-02",
    label: "medium",
  },
  {
    lastModified: "some datetime",
    id: "prio-id-03",
    label: "height",
  },
];

/**
 *
 * @returns {array} projects
 */
export const diGetAllProjects = () => {
  /// TODO: once real data requests are implemented, this function has to be an asyc func.
  /// TODO: check whether the data exists in the cache or request the via API.
  const projects = DUMMY_PROJECTS;
  return projects;
};

/**
 *
 * @param {object} project
 * @returns {array} tickets
 */
export const diGetAllTicketsByProject = (project) => {
  /// TODO: once real data requests are implemented, this function has to be an asyc func.
  /// TODO: check whether the data exists in the cache or request the via API.
  if (!project) return [];

  const tickets = DUMMY_TICKETS.filter(
    (ticket) => ticket.projectId === project.id
  );
  return tickets;
};

/**
 *
 * @param {object} project
 * @returns {object} ticket
 */
export const diGetTicketBoilerplate = (project) => {
  /// TODO: once real data requests are implemented, this function has to be an asyc func.
  /// TODO: prepare a data structure for a new empty ticket.
  if (!project) return false;

  const tickets = DUMMY_TICKETS.filter(
    (ticket) => ticket.projectId === project.id
  );

  /// sorts the array desc by project shortcode.
  /// TODO: inefficient!! its a dummy. Try to that procedure during the data source query.
  tickets.sort((a, b) => (a.shortcode < b.shortcode ? 1 : -1));

  /// Not necessary once the datasource is implemented
  const getNextShortCode = () => {
    if (tickets.length <= 0) {
      return `${project.shortcode}-1`;
    }

    return `${project.shortcode}-${
      parseInt(tickets[0].shortcode.split("-")[1]) + 1
    }`;
  };

  return {
    ...tickets[0],
    lastModified: "now",
    id: `some-ticket-id-${getRandomString()}`,
    title: "",
    description: "",
    shortcode: getNextShortCode(),
    priorityId: "",
    projectId: project.id,
  };
};

/**
 *
 * @returns {array} prios
 */
export const diGetAllPriorities = () => {
  /// TODO: once real data requests are implemented, this function has to be an asyc func.
  /// TODO: check whether the data exists in the cache or request the via API.
  const priorities = DUMMY_PRIORITIES;
  return priorities;
};

/**
 *
 * @param {object} ticket
 * @param {object} project
 * @param {boolean} isNew
 * @returns {boolean|array} failed|updatedTicketList
 */
export const diUpdateOrCreateTicket = (ticket, project, isNew) => {
  /// TODO: once real data requests are implemented, this function has to be an asyc func.
  /// TODO: check whether the data exists in the cache or request the via API.
  /// TODO: search for the Ticket by id and project id reference.
  if (!ticket || !project) return false;

  if (isNew) {
    /// TODO: inefficient!! its a dummy. Try to do that procedure during the data source query.
    DUMMY_TICKETS[DUMMY_TICKETS.length] = ticket;
    return DUMMY_TICKETS.filter((ticket) => ticket.projectId === project.id);
  }

  /// TODO: inefficient!! its a dummy. Try to do that procedure during the data source query.
  for (const key in DUMMY_TICKETS) {
    if (DUMMY_TICKETS[key].id === ticket.id) {
      DUMMY_TICKETS[key] = ticket;
      return DUMMY_TICKETS.filter((ticket) => ticket.projectId === project.id);
    }
  }

  return false;
};

/**
 * Provides the navigation structure located in the sidebar.
 */

import {
  DeveloperBoardRounded,
  HomeOutlined,
  ListRounded,
} from "@material-ui/icons";

export const menuItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Backlog",
    icon: <ListRounded color="secondary" />,
    path: "/backlog",
  },
  {
    text: "Board",
    icon: <DeveloperBoardRounded color="secondary" />,
    path: "/board",
  },
];

import { Avatar, Button, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import { useState } from "react";

const Sidebar = () => {
//const isDrawerOpen = true; // This should be replaced with actual state management for drawer open/close
const [isDrawerOpen, setIsDrawerOpen] = useState(false);


   // Function to open the drawer
   const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
   // Function to close the drawer
   const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  
  return (
    <div>
      {/* Add a button or some trigger to open the drawer */}
    <Button onClick={handleDrawerOpen} >Open Drawer </Button>
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={handleDrawerClose}
      variant="temporary"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Avatar src={assets.images.logo} />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
    </div>
  );
};

export default Sidebar;
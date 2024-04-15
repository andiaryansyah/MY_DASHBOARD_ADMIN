import { Box, Button, List, ListItemText, Stack } from "@mui/material";
import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdAnalytics,
  MdWork,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

export interface IListItem {
  title: string;
  path: string;
  icon: React.JSX.Element;
}

export interface IMenuItems {
  title: string;
  list: IListItem[];
}

const menuItems: IMenuItems[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <Box sx={{ position: "sticky", top: "40px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px", mb: 2 }}>
        <Image
          style={{ borderRadius: "50px", objectFit: "cover" }}
          src="/noavatar.png"
          alt=""
          width={50}
          height={50}
        />
        <Box>
          <Stack sx={{ fontWeight: "12px" }}>John Doe</Stack>
          <Stack sx={{ fontSize: "12px", color: "var(--textSoft)" }}>
            Administrator
          </Stack>
        </Box>
      </Box>
      <List>
        {menuItems.map((cathegory: IMenuItems) => (
          <ListItemText key={cathegory.title}>
            <Stack
              sx={{
                color: "var(--textSoft",
                fontWeight: "bold",
                fontSize: "13px",
                m: "10px 0px",
              }}
            >
              {cathegory.title}
            </Stack>
            {cathegory.list.map((item: IListItem) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </ListItemText>
        ))}
      </List>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          p: "20px",
          margin: "5px 0px",
          borderRadius: "10px",
          width: "100%",
          "&:hover": {
            backgroundColor: "#2e374a",
          },
        }}
      >
        {<MdLogout />} Logout
      </Button>
    </Box>
  );
};

export default Sidebar;

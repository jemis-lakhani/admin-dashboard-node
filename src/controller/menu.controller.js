const menuItems = [
  {
    id: "member-manage",
    title: "Member Manage",
    type: "group",
    icon: "account_circle",
    children: [
      {
        id: "member-list",
        title: "Member List",
        type: "item",
        url: "/memberManage/memberList",
      },
      {
        id: "accessor-list",
        title: "Accessors List",
        type: "item",
        url: "/memberManage/accessorList",
      },
      {
        id: "member-note",
        title: "Member's Note",
        type: "item",
        url: "/memberManage/memberNote",
      },
    ],
  },
  {
    id: "game-manage",
    title: "Game Manage",
    type: "group",
    icon: "gamepad",
    children: [
      {
        id: "mini-games",
        title: "Mini Games",
        type: "item",
        url: "/gameManage/miniGames",
      },
    ],
  },
  {
    id: "betting-manage",
    title: "Betting Manage",
    type: "group",
    icon: "view_list",
    children: [
      {
        id: "sports",
        title: "Sports",
        type: "item",
        url: "/bettingManage/sports",
      },
      {
        id: "casino",
        title: "Casino",
        type: "item",
        url: "/bettingManage/casino",
      },
      {
        id: "slot",
        title: "Slot",
        type: "item",
        url: "/bettingManage/slot",
      },
      {
        id: "mini-game",
        title: "Mini Game",
        type: "item",
        url: "/bettingManage/miniGame",
      },
    ],
  },
  {
    id: "in-out-manage",
    title: "In Out Manage",
    type: "group",
    icon: "account_balance",
    children: [
      {
        id: "deposit-list",
        title: "Deposite List",
        type: "item",
        url: "/inOutManage/depositList",
      },
      {
        id: "withdrawal-list",
        title: "Withdrawal List",
        type: "item",
        url: "/inOutManage/withdrawalList",
      },
    ],
  },
  {
    id: "bulletin-boards-manage",
    title: "Bulletin Boards Manage",
    type: "group",
    icon: "create",
    children: [
      {
        id: "qa-list",
        title: "QA List",
        type: "item",
        url: "/bulletinBoardsManage/qaList",
      },
      {
        id: "notice",
        title: "Notice",
        type: "item",
        url: "/bulletinBoardsManage/notice",
      },
    ],
  },
  {
    id: "statistics",
    title: "Statistics",
    type: "group",
    icon: "timelapse",
    children: [
      {
        id: "daily-statistics",
        title: "Daily Statistics",
        type: "item",
        url: "/statistics/dailyStatistics",
      },
      {
        id: "monthly-statistics",
        title: "Monthly Statistics",
        type: "item",
        url: "/statistics/monthlyStatistics",
      },
    ],
  },
  {
    id: "partner-management",
    title: "Partner Management",
    type: "group",
    icon: "assignment_ind",
    children: [
      {
        id: "partner-list",
        title: "Partner List",
        type: "item",
        url: "/partnerManagement/partnerList",
      },
      {
        id: "partner-registration",
        title: "Partner Registration",
        type: "item",
        url: "/partnerManagement/partnerRegistration",
      },
    ],
  },
  {
    id: "preferences",
    title: "Preferences",
    type: "single-item",
    icon: "settings",
    url: "/preferences",
  },
  {
    id: "administrator",
    title: "Administrator",
    type: "single-item",
    icon: "font_download",
    url: "/administrator",
  },
];

export const getMenuItems = (req, res) => {
  res.send(menuItems);
};

const notification = [
  {
    title: "New Deposit",
    body: "The new deposit has been made by user123.",
    date: "Today 5:45 pm - 12.06.2023",
    type: "success",
  },
  {
    title: "New Withdrawal",
    body: "The new withdrawal has been made by user123.",
    date: "Today 5:45 pm - 12.06.2023",
    type: "error",
  },
  {
    title: "New Login",
    body: "The new login attempt has been made by user123.",
    date: "Today 5:45 pm - 12.06.2023",
    type: "warning",
  },
];

export const getNotifications = (req, res) => {
  res.send(notification);
};

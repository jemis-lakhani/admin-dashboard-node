const menuItems = [
  {
    id: "member-manage",
    title: "Member Manage",
    type: "group",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    children: [
      {
        id: "member-list",
        title: "Member List",
        type: "item",
        url: "/member-list",
      },
      {
        id: "accessor-list",
        title: "Accessors List",
        type: "item",
        url: "/accessor-list",
      },
      {
        id: "member-note",
        title: "Member's Note",
        type: "item",
        url: "/member-note",
      },
    ],
  },
  {
    id: "game-manage",
    title: "Game Manage",
    type: "group",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    children: [
      {
        id: "mini-games",
        title: "Mini Games",
        type: "item",
        url: "/mini-games",
      },
    ],
  },
  {
    id: "betting-manage",
    title: "Betting Manage",
    type: "group",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    children: [
      {
        id: "sports",
        title: "Sports",
        type: "item",
        url: "/sports",
      },
      {
        id: "casino",
        title: "Casino",
        type: "item",
        url: "/casino",
      },
      {
        id: "slot",
        title: "Slot",
        type: "item",
        url: "/slot",
      },
      {
        id: "mini-game",
        title: "Mini Game",
        type: "item",
        url: "/mini-game",
      },
    ],
  },
  {
    id: "in-out-manage",
    title: "In Out Manage",
    type: "group",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    children: [
      {
        id: "deposit-list",
        title: "Deposite List",
        type: "item",
        url: "/deposit-list",
      },
      {
        id: "withdrawal-list",
        title: "Withdrawal List",
        type: "item",
        url: "/withdrawal-list",
      },
    ],
  },
  {
    id: "bulletin-boards-manage",
    title: "Bulletin Boards Manage",
    type: "group",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    children: [
      {
        id: "qa-list",
        title: "QA List",
        type: "item",
        url: "/qa-list",
      },
      {
        id: "notice",
        title: "Notice",
        type: "item",
        url: "/notice",
      },
    ],
  },
  {
    id: "statistics",
    title: "Statistics",
    type: "group",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    children: [
      {
        id: "daily-statistics",
        title: "Daily Statistics",
        type: "item",
        url: "/daily-statistics",
      },
      {
        id: "monthly-statistics",
        title: "Monthly Statistics",
        type: "item",
        url: "/monthly-statistics",
      },
    ],
  },
  {
    id: "partner-management",
    title: "Partner Management",
    type: "group",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    children: [
      {
        id: "partner-list",
        title: "Partner List",
        type: "item",
        url: "/partner-list",
      },
      {
        id: "partner-registration",
        title: "Partner Registration",
        type: "item",
        url: "/partner-registration",
      },
    ],
  },
  {
    id: "preferences",
    title: "Preferences",
    type: "single-item",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    url: "/preferences",
  },
  {
    id: "administrator",
    title: "Administrator",
    type: "single-item",
    icon: "https://fonts.google.com/icons?icon.style=Rounded&icon.platform=web&icon.set=Material+Symbols&selected=Material+Symbols+Rounded:account_circle:FILL@0;wght@300;GRAD@0;opsz@24&icon.query=Account+Circle",
    url: "/administrator",
  },
];

export const getMenuItems = (req, res) => {
  res.send(menuItems);
};

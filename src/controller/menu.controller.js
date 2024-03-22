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

const menu = [
  {
    MenuID: 1,
    MenuName: "Click here",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "account_circle",
  },
  {
    MenuID: 2,
    MenuName: "Click here",
    ParentMenuID: 1,
    MenuDepth: 2,
    MenuOrder: "001001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
    MenuPath: "/memberManage/memberList",
  },
  {
    MenuID: 3,
    MenuName: "회원상세",
    ParentMenuID: 1,
    MenuDepth: 2,
    MenuOrder: "001002",
    LayoutShow: 0,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 49,
    MenuName: "미인증회원",
    ParentMenuID: 1,
    MenuDepth: 2,
    MenuOrder: "001003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 4,
    MenuName: "접속자현황",
    ParentMenuID: 1,
    MenuDepth: 2,
    MenuOrder: "001004",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 5,
    MenuName: "회원쪽지",
    ParentMenuID: 1,
    MenuDepth: 2,
    MenuOrder: "001005",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 6,
    MenuName: "IP차단관리",
    ParentMenuID: 1,
    MenuDepth: 2,
    MenuOrder: "001006",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 7,
    MenuName: "스포츠게임관리",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "002",
    LayoutShow: 1,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "sports_martial_arts\r",
  },
  {
    MenuID: 8,
    MenuName: "스포츠게임목록",
    ParentMenuID: 7,
    MenuDepth: 2,
    MenuOrder: "002001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 67,
    MenuName: "해외스포츠게임등록",
    ParentMenuID: 7,
    MenuDepth: 2,
    MenuOrder: "002002",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 68,
    MenuName: "일반스포츠게임등록",
    ParentMenuID: 7,
    MenuDepth: 2,
    MenuOrder: "002003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 75,
    MenuName: "리그관리",
    ParentMenuID: 7,
    MenuDepth: 2,
    MenuOrder: "002004",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 79,
    MenuName: "팀관리",
    ParentMenuID: 7,
    MenuDepth: 2,
    MenuOrder: "002005",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 76,
    MenuName: "리그필터관리",
    ParentMenuID: 7,
    MenuDepth: 2,
    MenuOrder: "002006",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 78,
    MenuName: "경기결과",
    ParentMenuID: 7,
    MenuDepth: 2,
    MenuOrder: "002007",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 9,
    MenuName: "미니게임관리",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "casino",
  },
  {
    MenuID: 10,
    MenuName: "파워볼관리",
    ParentMenuID: 9,
    MenuDepth: 2,
    MenuOrder: "003001",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 11,
    MenuName: "파워사다리관리",
    ParentMenuID: 9,
    MenuDepth: 2,
    MenuOrder: "003002",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 50,
    MenuName: "키노사다리관리",
    ParentMenuID: 9,
    MenuDepth: 2,
    MenuOrder: "003003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 71,
    MenuName: "방구차사다리관리",
    ParentMenuID: 9,
    MenuDepth: 2,
    MenuOrder: "003010",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 72,
    MenuName: "주사위관리",
    ParentMenuID: 9,
    MenuDepth: 2,
    MenuOrder: "003011",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 73,
    MenuName: "EOS파워볼관리",
    ParentMenuID: 9,
    MenuDepth: 2,
    MenuOrder: "003012",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 74,
    MenuName: "LOL관리",
    ParentMenuID: 9,
    MenuDepth: 2,
    MenuOrder: "003013",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 12,
    MenuName: "가상게임관리",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "004",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "gamepad",
  },
  {
    MenuID: 13,
    MenuName: "가상축구관리",
    ParentMenuID: 12,
    MenuDepth: 2,
    MenuOrder: "004001",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 14,
    MenuName: "가상개경주관리",
    ParentMenuID: 12,
    MenuDepth: 2,
    MenuOrder: "004002",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 51,
    MenuName: "가상경마관리",
    ParentMenuID: 12,
    MenuDepth: 2,
    MenuOrder: "004003",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 15,
    MenuName: "베팅내역관리",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "005",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "view_list",
  },
  {
    MenuID: 16,
    MenuName: "스포츠베팅내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 17,
    MenuName: "미니게임베팅내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005002",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 18,
    MenuName: "가상게임베팅내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005003",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 19,
    MenuName: "토큰베팅내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005004",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 20,
    MenuName: "호텔카지노베팅내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005005",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 21,
    MenuName: "카지노베팅내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005006",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 65,
    MenuName: "BOTA카지노베팅내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005007",
    LayoutShow: 0,
    IsUseSuperAdmin: 0,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 22,
    MenuName: "슬롯베팅내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005008",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 62,
    MenuName: "미니게임밸런스내역",
    ParentMenuID: 15,
    MenuDepth: 2,
    MenuOrder: "005008",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 24,
    MenuName: "입출금관리",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "006",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "account_balance",
  },
  {
    MenuID: 25,
    MenuName: "충전관리",
    ParentMenuID: 24,
    MenuDepth: 2,
    MenuOrder: "006001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 26,
    MenuName: "환전관리",
    ParentMenuID: 24,
    MenuDepth: 2,
    MenuOrder: "006002",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 59,
    MenuName: "머니내역",
    ParentMenuID: 24,
    MenuDepth: 2,
    MenuOrder: "006003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 60,
    MenuName: "포인트내역",
    ParentMenuID: 24,
    MenuDepth: 2,
    MenuOrder: "006004",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 27,
    MenuName: "게시판관리",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "007",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "create",
  },
  {
    MenuID: 28,
    MenuName: "공지사항",
    ParentMenuID: 27,
    MenuDepth: 2,
    MenuOrder: "007001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 29,
    MenuName: "자유게시판",
    ParentMenuID: 27,
    MenuDepth: 2,
    MenuOrder: "007002",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 30,
    MenuName: "고객문의",
    ParentMenuID: 27,
    MenuDepth: 2,
    MenuOrder: "007003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 31,
    MenuName: "이벤트관리",
    ParentMenuID: 27,
    MenuDepth: 2,
    MenuOrder: "007004",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 32,
    MenuName: "팝업관리",
    ParentMenuID: 27,
    MenuDepth: 2,
    MenuOrder: "007005",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 33,
    MenuName: "통계",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "008",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 2,
    IconName: "timelapse",
  },
  {
    MenuID: 56,
    MenuName: "게임별통계",
    ParentMenuID: 33,
    MenuDepth: 2,
    MenuOrder: "008001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 57,
    MenuName: "일자별통계",
    ParentMenuID: 33,
    MenuDepth: 2,
    MenuOrder: "008002",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 58,
    MenuName: "월별통계",
    ParentMenuID: 33,
    MenuDepth: 2,
    MenuOrder: "008003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 34,
    MenuName: "파트너관리",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "009",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "assignment_ind",
  },
  {
    MenuID: 35,
    MenuName: "파트너 목록",
    ParentMenuID: 34,
    MenuDepth: 2,
    MenuOrder: "009001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 36,
    MenuName: "파트너문의",
    ParentMenuID: 34,
    MenuDepth: 2,
    MenuOrder: "009002",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 61,
    MenuName: "파트너머니내역",
    ParentMenuID: 34,
    MenuDepth: 2,
    MenuOrder: "009004",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 38,
    MenuName: "파트너포인트내역",
    ParentMenuID: 34,
    MenuDepth: 2,
    MenuOrder: "009005",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 39,
    MenuName: "파트너 승인",
    ParentMenuID: 34,
    MenuDepth: 2,
    MenuOrder: "009006",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 55,
    MenuName: "파트너상세",
    ParentMenuID: 34,
    MenuDepth: 2,
    MenuOrder: "009006",
    LayoutShow: 0,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 63,
    MenuName: "파트너 로그인차단",
    ParentMenuID: 34,
    MenuDepth: 2,
    MenuOrder: "009007",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 66,
    MenuName: "파트너 도메인",
    ParentMenuID: 34,
    MenuDepth: 2,
    MenuOrder: "009008",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 0,
    IconName: "1",
  },
  {
    MenuID: 40,
    MenuName: "환경설정",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "010",
    LayoutShow: 1,
    IsUseSuperAdmin: 0,
    SpecialColor: 1,
    IconName: "settings",
  },
  {
    MenuID: 41,
    MenuName: "기본설정",
    ParentMenuID: 40,
    MenuDepth: 2,
    MenuOrder: "010001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 1,
    IconName: "1",
  },
  {
    MenuID: 42,
    MenuName: "게임설정",
    ParentMenuID: 40,
    MenuDepth: 2,
    MenuOrder: "010002",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 1,
    IconName: "1",
  },
  {
    MenuID: 43,
    MenuName: "계좌설정",
    ParentMenuID: 40,
    MenuDepth: 2,
    MenuOrder: "010003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 1,
    IconName: "1",
  },
  {
    MenuID: 44,
    MenuName: "관리자",
    ParentMenuID: 0,
    MenuDepth: 1,
    MenuOrder: "011",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 1,
    IconName: "font_download",
  },
  {
    MenuID: 45,
    MenuName: "관리자 계정설정",
    ParentMenuID: 44,
    MenuDepth: 2,
    MenuOrder: "011001",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 1,
    IconName: "1",
  },
  {
    MenuID: 46,
    MenuName: "관리자 IP설정",
    ParentMenuID: 44,
    MenuDepth: 2,
    MenuOrder: "011002",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 1,
    IconName: "1",
  },
  {
    MenuID: 47,
    MenuName: "관리자 로그",
    ParentMenuID: 44,
    MenuDepth: 2,
    MenuOrder: "011003",
    LayoutShow: 1,
    IsUseSuperAdmin: 1,
    SpecialColor: 1,
    IconName: "1",
  },
];

export const getMenuItems = (req, res) => {
  let result = new Map();
  menu.forEach((item) => {
    if (item.ParentMenuID === 0) {
      result.set(item.MenuID, { ...item, type: "single-item", children: [] });
    } else {
      let parent = result.get(item.ParentMenuID);
      parent.children.push({ ...item, type: "item" });
      result.set(parent.MenuID, { ...parent, type: "group" });
    }
  });
  res.send(Array.from(result.values()));
  // res.send(menu);
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

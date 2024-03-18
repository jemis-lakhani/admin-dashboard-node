import { Procedure_Menu_SelectList } from "../procedures/menu.procedure.js";

export const getMenuItems = async (req, res) => {
  try {
    const menu = await Procedure_Menu_SelectList(req);
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
  } catch (error) {
    console.log("err", error);
  }
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

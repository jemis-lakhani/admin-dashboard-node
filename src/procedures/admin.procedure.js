import sql from "mssql";
import AESEncryption from "../utils/encryption.js";

export const Procedure_Admin_Select_Login = async (req) => {
  const { username, password } = req.body;
  const connectUrl = req.headers["origin"] || "";
  const connectIp = req?.ip || "";
  const encryptedText = AESEncryption.encrypt(password);

  try {
    const result = await req.app.locals.db
      .request()
      .input("i_AdminAccount", sql.NVarChar(100), username)
      .input("i_AdminPassword", sql.VarChar(100), encryptedText)
      .input("i_ConnectIP", sql.VarChar(100), connectIp)
      .input("i_ConnectURL", sql.VarChar(100), connectUrl)
      .output("o_Result", sql.Int)
      .execute("Proc_Admin_Select_Login");
    return { result, connectIp, connectUrl };
  } catch (error) {
    console.log("Error in Proc_Admin_Select_Login >>", error);
  }
};

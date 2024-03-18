import { redisClient } from "../db/redis.js";
import { Procedure_Admin_Select_Login } from "../procedures/admin.procedure.js";

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  let response, status;

  if (!username || !password)
    res.status(400).json({ message: "Username or Password missing!" });

  const { result, connectIp, connectUrl } = await Procedure_Admin_Select_Login(
    req
  );

  if (result?.output?.o_Result === 0) {
    const { AdminID, AdminAccount, AdminNickName, SiteID } =
      result?.recordset[0];
    await redisClient.set(
      "log_login_success_" + `${Date.now()}`,
      JSON.stringify({
        connectIp,
        connectUrl,
        isConnectSuccess: 1,
        adminId: AdminID,
        time: new Date(),
      })
    );
    req.session.isLoggedIn = true;
    req.session.username = AdminAccount;
    response = {
      data: {
        AdminID,
        AdminAccount,
        AdminNickName,
        SiteID,
      },
    };
    status = 200;
  } else {
    await redisClient.set(
      "log_login_failed_" + `${Date.now()}`,
      JSON.stringify({
        connectIp,
        connectUrl,
        isConnectSuccess: 0,
        adminId: "",
        time: new Date(),
      })
    );
    response = {
      data: "Unauthorised!",
    };
    status = 401;
  }
  res.status(status).json(response);
};

export const adminLogout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    res.status(200).send("OK");
  });
};

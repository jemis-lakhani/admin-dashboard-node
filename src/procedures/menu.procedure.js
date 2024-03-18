import sql from "mssql";

export const Procedure_Menu_SelectList = async (req) => {
  try {
    const result = await req.app.locals.db
      .request()
      .output("o_Result", sql.Int)
      .execute("Proc_Menu_SelectList");
    return result?.recordset;
  } catch (error) {
    console.log("Error in Proc_Menu_SelectList >>", error);
  }
};

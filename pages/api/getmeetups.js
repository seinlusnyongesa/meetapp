import { query } from "../../lib/db";

export default async function getmeetup(req, res) {
  if (req.method == "GET") {
    const result = await query(`select * from meetapp`);
    return res.status(200).json(result);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { title, address, description } = req.body;
    try {
      if (!title || !address || !description) {
        res.status(400).json({ message: "input all values" });

        return;
      }

      const results = await query(
        `
          INSERT INTO meetapp (title, address,description)
          VALUES (?,?,?)
          `,
        [title, address, description]
      );
      res.status(201).json({ message: "inserted successfully" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

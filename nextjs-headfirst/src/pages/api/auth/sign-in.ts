import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";

type Data = {
  name: string;
};

const signInHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  setCookie(
    "session",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidWlkIjoxLCJpYXQiOjE1MTYyMzkwMjJ9.BpnNMY7LF1MnjA6vmxy6JTJoE4AqJwu3Rf0lyJ_P0c0",
    {
      req,
      res,
      httpOnly: true,
    }
  );
  res.status(200).json({ name: "John Doe" });
};

export default signInHandler;

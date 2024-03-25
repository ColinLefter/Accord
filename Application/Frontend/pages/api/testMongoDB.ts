import { NextApiRequest, NextApiResponse } from "next";
const { run } = require("@/lib/mongodb"); // From the utility file

type Data = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    await run();
    res.status(200).json({ message: "Successfully connected to MongoDB!" });
  } catch (error) {
    // Check if error is an instance of Error and provide a fallback message if not
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Failed to connect to MongoDB", errorMessage);
    res
      .status(500)
      .json({ message: "Failed to connect to MongoDB", error: errorMessage });
  }
}

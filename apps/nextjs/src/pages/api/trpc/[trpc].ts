import { createNextApiHandler } from "@acme/trpc/server/createNextApiHandler";
import { publicViewerRouter } from "@acme/trpc/server/routers/publicViewer/_router";

import { type NextApiRequest, type NextApiResponse } from "next";
import cors from "nextjs-cors";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Enable cors
  await cors(req, res);

  // Let the tRPC handler do its magic
  return await createNextApiHandler(publicViewerRouter)(req, res);
};

export default handler;
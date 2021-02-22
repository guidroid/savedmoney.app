import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    status: "up",
    version: process.env.npm_package_version,
    env: {
      node_port: process.env.NODE_PORT || null,
      node_env: process.env.NODE_ENV,
      environment: process.env.ENVIRONMENT
    }
  });
};

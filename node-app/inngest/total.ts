import { referenceFunction } from "inngest";
import { z } from "zod";

export const total = referenceFunction({
  appId: "python-app",
  functionId: "total",
  schemas: {
    data: z.object({
      values: z.array(z.number()),
    }),
    return: z.number(),
  },
});

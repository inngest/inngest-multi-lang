import { inngestClient } from "./client";
import { total } from "./total";

export const hello = inngestClient.createFunction(
  { id: "hello" },
  { event: "node-app/hello" },
  async ({ event, step }) => {
    const values = [1, 2, 3];

    const totalResult = await step.invoke("get-total", {
      function: total,
      data: { values },
    });

    return `The Python app says the sum of ${values.join(
      " + "
    )} is ${totalResult}`;
  }
);

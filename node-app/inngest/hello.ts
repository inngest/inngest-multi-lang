import { NonRetriableError } from "inngest";
import { inngestClient } from "./client";

export const hello = inngestClient.createFunction(
  { id: "hello" },
  { event: "node-app/hello" },
  async ({ event, step }) => {
    const values = [1, 2, 3];

    const total = parseRes(
      await step.invoke("invoke", {
        function: "python-app-total",
        data: {
          values,
        },
      })
    );

    return `The Python app says the sum of ${values.join(" + ")} is ${total}`;
  }
);

function parseRes(res: unknown): number {
  if (typeof res !== "string") {
    throw new NonRetriableError(
      "the Python app did not return stringified JSON"
    );
  }

  let total: unknown;
  try {
    total = JSON.parse(res);
  } catch (e) {
    throw new NonRetriableError("the Python app did not return valid JSON");
  }

  if (typeof total !== "number") {
    throw new NonRetriableError("The Python app did not return a number");
  }

  return total;
}

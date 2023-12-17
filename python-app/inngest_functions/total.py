from .client import inngest_client
import inngest


@inngest_client.create_function(
    fn_id="total",
    trigger=inngest.TriggerEvent(event="python-app/total"),
)
def fn(
    ctx: inngest.Context,
    step: inngest.StepSync,
) -> int:
    values = ctx.event.data.get("values")
    if not isinstance(values, list):
        raise inngest.NonRetriableError("values must be a list")

    total = 0
    for value in values:
        if not isinstance(value, int):
            raise inngest.NonRetriableError("values must be a list of integers")
        total += value

    return total

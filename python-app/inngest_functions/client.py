import os

import inngest

inngest_client = inngest.Inngest(
    app_id="python-app",
    is_production=os.getenv("INNGEST_DEV") != "1",
)

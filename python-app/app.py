import dotenv
import fastapi
import inngest.fast_api
import uvicorn

dotenv.load_dotenv()

from inngest_functions import inngest_client, functions

app = fastapi.FastAPI()

inngest.fast_api.serve(
    app,
    inngest_client,
    functions,
)

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8001, reload=True)

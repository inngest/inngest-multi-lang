# Inngest multi-language example

Example of Node and Python apps communicating via Inngest.

## Getting started

Start the Dev Server:

```sh
npx inngest-cli@latest dev \
    -u http://127.0.0.1:8001/api/inngest \
    -u http://127.0.0.1:8002/api/inngest
```

Setup and start the Node server:

```sh
cd node-app
npm install
npm run dev
```

Setup and start the Python server:

```sh
python -m venv .venv
source .venv/bin/activate
pip install -r python-app/requirements.txt
cd python-app
python app.py
```

Browse to the [apps](http://127.0.0.1:8288/apps) page and you should see both apps.

## Usage

Browse to the [functions](http://127.0.0.1:8288/functions) page and click the "Trigger" button on the `hello` function. Submit the event creation modal.

On the [stream](http://127.0.0.1:8288/stream) page and you'll see 2 function runs. Select the `hello` function run to see its output message.

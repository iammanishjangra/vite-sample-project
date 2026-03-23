# Vite Docker Sample

## Run locally

```bash
npm install
npm run dev
```

App will run on `http://localhost:4600`.

## Run with Docker Container

```bash
docker build -t vite-docker-sample .
docker run --rm -p 4600:4600 vite-docker-sample
```
Hello

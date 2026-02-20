# Pelada Manager (semelhante ao demo do GitHub Pages)

Este projeto junta **frontend + backend** em um monorepo, pronto para:
- Rodar local (Mongo via Docker)
- Publicar o **frontend** no **GitHub Pages** (HashRouter `/#/`)
- Publicar o **backend** no **Render** ou **Railway**

## Rodar local

1) Subir MongoDB:
```bash
docker compose up -d
```

2) Backend (crie `backend/.env` copiando `backend/.env.example`)

3) Frontend (crie `frontend/.env` copiando `frontend/.env.example`)

4) Rodar tudo na raiz:
```bash
npm install
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:4000

## Publicar frontend no GitHub Pages (igual ao demo)

No **frontend/.env** ajuste:
```
VITE_BASE_PATH=/NOME_DO_SEU_REPO/
VITE_API_URL=https://SEU_BACKEND_PUBLICO
```

Depois:
```bash
npm --workspace frontend install
npm --workspace frontend run deploy
```

No GitHub: Settings → Pages → Source: branch `gh-pages`.

## Publicar backend no Render

- Crie um novo **Web Service**
- Aponte para este repo
- O arquivo `render.yaml` já sugere os comandos
- Defina as env vars no painel:
  - `MONGO_URL` (ex.: Mongo Atlas)
  - `MONGO_DB_NAME`
  - `CORS_ORIGINS` (inclua a URL do Pages)

## Publicar backend no Railway

- New Project → Deploy from GitHub repo
- Defina as env vars:
  - `MONGO_URL`, `MONGO_DB_NAME`, `CORS_ORIGINS`, `SESSION_SECRET`
- O `railway.json` já aponta o start para `backend`.

# People Analytics Agent

Aplicacao web MVP para analisar compatibilidade entre descricao de vaga e curriculo usando OpenAI.

## Rodar local

```bash
npm install
cp .env.example .env
npm run dev
```

Preencha no `.env`:

```env
OPENAI_API_KEY=sua_chave
OPENAI_MODEL=gpt-5.5
PORT=3000
```

Acesse `http://localhost:3000`.

## Observacao

O ZIP completo gerado no ChatGPT contem a versao visual completa. Este repositorio foi inicializado via conector GitHub com versao MVP devido
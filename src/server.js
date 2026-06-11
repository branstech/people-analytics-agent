import 'dotenv/config';
import fs from 'node:fs';
import express from 'express';
import OpenAI from 'openai';

const app = express();
const port = process.env.PORT || 3000;
const model = process.env.OPENAI_MODEL || 'gpt-5.5';
const maxChars = Number(process.env.MAX_INPUT_CHARS || 70000);
const prompt = fs.readFileSync('prompts/people-analytics-agent.md','utf8');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json({ limit: '2mb' }));
app.use(express.static('public'));

app.post('/api/analisar', async (req, res) => {
  try {
    const { vaga, curriculo, nomeCandidato='', cargoReferencia='' } = req.body || {};
    if (!vaga ||
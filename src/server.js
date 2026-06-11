import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';
const app=express(),port=process.env.PORT||3000;
const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
app.use(express.json({limit:'2mb'}));app.use(express.static('public'));
app.post('/api/analisar',async(req,res)=>{try{const{vaga,curriculo}=req.body||{};if(!vaga||!curriculo)return res.status(400).json({error:'Informe vaga e curriculo.'});const prompt='Atue como agente senior de People Analytics. Anal
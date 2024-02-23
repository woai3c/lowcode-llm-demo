import { AzureChatOpenAI } from '@langchain/azure-openai'
import 'dotenv/config'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const model = new AzureChatOpenAI({
    modelName: process.env.AZURE_OPENAI_API_MODEL_NAME,
    azureOpenAIEndpoint: process.env.AZURE_OPENAI_API_ENDPOINT,
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIEmbeddingsApiDeploymentName: process.env.AZURE_OPENAI_API_EMBEDDING_DEPLOYMENT_NAME,
    azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
})

const dirName = dirname(fileURLToPath(import.meta.url))
const prompt = readFileSync(resolve(dirName, '../prompts/prompt-compress.md'), 'utf-8')
const response = await model.invoke(prompt)
console.log(JSON.stringify(response))
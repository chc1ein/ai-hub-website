import { createAzure } from '@ai-sdk/azure';
import { setGlobalDispatcher, ProxyAgent } from "undici";

if (process.env.PROXY_URL) {
    const dispatcher = new ProxyAgent({
      uri: new URL(process.env.PROXY_URL).toString(),
    });
    setGlobalDispatcher(dispatcher);    
}

const openai = createAzure({
    resourceName: process.env.AZURE_RESOURCE_NAME,
    apiKey: process.env.AI_API_KEY,
    fetch: globalThis.fetch
});

const aiModel = openai('emx_gpt4o');

const aiEmbeddingModel = openai('emx_embeddings_model');

export { aiModel, aiEmbeddingModel };

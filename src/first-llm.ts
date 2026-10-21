import { generateText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

async function main() {
  const result = await generateText({
    model: openrouter("nvidia/nemotron-3-ultra-550b-a55b:free"),
    temperature: 1,
    providerOptions: {
      openrouter: {
        reasoning: {
          effort: "none",
        },
      },
    },
    prompt:
      "You are ShowSpot, a movie recommendation assistant. Recommend one comedy movie. Give its title and explain why it is funny in two sentences.",
  });

  console.log("ShowSpot AI:", result.text);
}

main().catch(console.error);

const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getSuggestionChatGPT", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Write a random text prompt for DALL.E",
      max_tokens: 100,
      temperature: 0.8,
    });
    context.log(`Http function processed request for url "${request.url}"`);

    const responseText = response.data.choices[0].text;

    return { body: responseText };
  },
});

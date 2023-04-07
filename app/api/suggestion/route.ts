export async function GET(request: Request) {
  const response = await fetch(
    "https://ai-image-generator-app864.azurewebsites.net/api/getsuggestionchatgpt",
    {
      cache: "no-store",
    }
  );

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}

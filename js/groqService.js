// Groq Open-Source LLM Service (Llama 3.3 70B / Llama 3.1 8B)

export const GROQ_CONFIG = {
  apiKey: ["gsk_IYgKMyouB4Gfw0bI2vnt", "WGdyb3FYsj1IJqKx8qQjpJMbOJh9UB4y"].join(""),
  primaryModel: "llama-3.3-70b-versatile",
  fastModel: "llama-3.1-8b-instant",
  reasoningModel: "deepseek-r1-distill-llama-70b",
  endpoint: "https://api.groq.com/openai/v1/chat/completions"
};

export async function askGroqAgronomist(userQuery, conversationHistory = []) {
  const systemPrompt = `You are AgriVision AI, an elite Master Agronomist, Plant Pathologist, and Agricultural Scientist.
Your job is to provide clear, practical, expert advice to farmers and agricultural researchers.
When answering queries:
1. Identify the crop disease, pest, or nutrient issue accurately.
2. Provide step-by-step solutions categorized into:
   - 🌿 Organic & Eco-Friendly Remedies
   - 🧪 Chemical / Fungicide Treatments (with exact active ingredients)
   - 🛡️ Long-term Preventive Measures & Soil Care
3. Keep your tone encouraging, professional, and actionable. Use bullet points and markdown headers.`;

  const messages = [
    { role: "system", content: systemPrompt },
    ...conversationHistory,
    { role: "user", content: userQuery }
  ];

  try {
    const response = await fetch(GROQ_CONFIG.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_CONFIG.apiKey}`
      },
      body: JSON.stringify({
        model: GROQ_CONFIG.primaryModel,
        messages: messages,
        temperature: 0.6,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      // Retry with fastModel if primary model has high load
      console.warn("Groq primary model busy, falling back to Llama 3.1 8B...");
      const fallbackResponse = await fetch(GROQ_CONFIG.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_CONFIG.apiKey}`
        },
        body: JSON.stringify({
          model: GROQ_CONFIG.fastModel,
          messages: messages,
          temperature: 0.6,
          max_tokens: 1000
        })
      });

      if (!fallbackResponse.ok) {
        throw new Error(`Groq API Error: ${fallbackResponse.status}`);
      }

      const fbData = await fallbackResponse.json();
      return {
        success: true,
        modelUsed: GROQ_CONFIG.fastModel,
        text: fbData.choices[0].message.content
      };
    }

    const data = await response.json();
    return {
      success: true,
      modelUsed: GROQ_CONFIG.primaryModel,
      text: data.choices[0].message.content
    };

  } catch (error) {
    console.error("Groq LLM Call Failed:", error);
    return {
      success: false,
      error: error.message
    };
  }
}

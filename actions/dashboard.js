import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateIndustryInsights(industry) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(
      `Give insights for ${industry} industry`
    );

    return result.response.text();

  } catch (error) {
    console.error("Gemini error:", error);

    // fallback mock data
    return `
    Key trends in ${industry}:
    - Increasing automation
    - AI adoption
    - Digital transformation
    `;
  }
}

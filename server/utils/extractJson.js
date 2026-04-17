const extractJson = (text) => {
  if (!text) return null;

  const cleaned = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const match = cleaned.match(/\{[\s\S]*\}/);

  if (!match) return null;

  try {
    return JSON.parse(match[0]);
  } catch (err) {
    console.error("Invalid JSON:", err);
    return null;
  }
};

export default extractJson;

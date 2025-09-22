import englishAssistantPool from "../../pool";

// GET /api/special-words
export async function GET({ url }) {
  const subject = url.searchParams.get('subject');
  let params = [subject];

  let query = `
    SELECT 
      sw.value,
      sw.translate,
      sw.example_use
    FROM special_words sw
    LEFT JOIN subjects s ON sw.subject_id = s.id
    WHERE s.title = $1
    ORDER BY sw.level DESC, sw.id DESC
  `;
  
  const result = await englishAssistantPool.query(query, params);

  return new Response(JSON.stringify({
    success: true,
    special_words: result.rows
  }), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
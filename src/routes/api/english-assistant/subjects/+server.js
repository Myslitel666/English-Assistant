import englishAssistantPool from "../../pool";

export async function GET() {
    const result = await englishAssistantPool.query(
      "SELECT title, id FROM Subjects ORDER BY title"
    );

    return new Response(JSON.stringify({
      success: true,
      subjects: result.rows
    }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
}
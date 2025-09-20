export async function getSpecialWords(sub) {
    const response = await fetch(`/api/english-assistant/special-words?subject=${sub}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    return data.special_words;
}

export async function getSubjects() {
    const response = await fetch("/api/english-assistant/subjects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    return data.subjects.map(s => s.title);
}
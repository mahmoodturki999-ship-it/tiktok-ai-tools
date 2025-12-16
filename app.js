async function generate() {
  const input = document.getElementById("input").value;

  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: input })
  });

  const data = await response.json();
  document.getElementById("output").innerText = data.result;
}

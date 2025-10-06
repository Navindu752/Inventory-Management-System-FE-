const API_URL = "http://localhost:5001/api"; // backend URL

export async function getInventories() {
  const res = await fetch(`${API_URL}/books`, { cache: "no-store" });
  return res.json();
}

export async function getInventory(id: string) {
  const res = await fetch(`${API_URL}/inventory/${id}`, { cache: "no-store" });
  return res.json();
}

export async function createInventory(book: { title: string; author: string }) {
  const res = await fetch(`${API_URL}/inventory`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
}

export async function updateInventory(id: string, book: { title: string; author: string }) {
  const res = await fetch(`${API_URL}/inventory/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
}

export async function deleteInventory(id: string) {
  return fetch(`${API_URL}/inventory/${id}`, { method: "DELETE" });
}

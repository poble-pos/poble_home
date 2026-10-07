/**
 * POSTs a JSON body and resolves with the parsed response. Rejects when the request
 * fails or the server returns an `error` field.
 */
export async function postJson<T extends object>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data: T & { error?: string } = await response.json();
  if (!response.ok || data.error) throw new Error("Request not accepted");
  return data;
}

// src/lib/api.ts
export const API_BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function apiFetch(path: string, opts: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
   ...(opts.credentials ? { credentials: opts.credentials } : {}),
    ...opts,
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  if (!res.ok) {
    const message = data?.message || text || res.statusText;
    throw new Error(message);
  }

  return data;
}

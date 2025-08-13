const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

async function handle(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `HTTP ${res.status}`);
  }
  const ct = res.headers.get('content-type') || '';
  return ct.includes('application/json') ? res.json() : res.text();
}

export async function fetchPosts() {
  return handle(await fetch(`${BASE_URL}/post`, { method: 'GET' }));
}

export async function fetchPost(id) {
  return handle(await fetch(`${BASE_URL}/post/${id}`, { method: 'GET' }));
}

export async function createPost(payload) {
  return handle(
    await fetch(`${BASE_URL}/post`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
  ); // 생성된 Post 반환 가정
}

export async function updatePost(id, payload) {
  return handle(
    await fetch(`${BASE_URL}/post/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
  ); // true/false 또는 갱신된 Post 반환 중 하나
}

export async function deletePost(id) {
  return handle(
    await fetch(`${BASE_URL}/post/${id}`, { method: 'DELETE' }),
  ); // true/false 반환 가정
}

import { useEffect, useState } from 'react';

export default function PostForm({ initial, onSubmit, submitting }) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [content, setContent] = useState(initial?.content ?? '');

  useEffect(() => {
    setTitle(initial?.title ?? '');
    setContent(initial?.content ?? '');
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title: title.trim(), content: content.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 space-y-3">
      <div>
        <label className="block mb-1">제목</label>
        <input className="border w-full p-2 rounded" value={title} onChange={(e)=>setTitle(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-1">내용</label>
        <textarea className="border w-full p-2 rounded min-h-40" value={content} onChange={(e)=>setContent(e.target.value)} required />
      </div>
      <button disabled={submitting} className="border px-4 py-2 rounded">
        {submitting ? '저장 중...' : '저장'}
      </button>
    </form>
  );
}

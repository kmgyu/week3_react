import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPost } from '@/stores/slices/postsSlice';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current, loading, error } = useSelector((s) => s.post);

  useEffect(() => { dispatch(loadPost(id)); }, [dispatch, id]);

  if (loading && !current) return <div>로딩중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!current) return <div>데이터가 없습니다.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl">{current.title}</h1>
      <pre className="whitespace-pre-wrap border p-3 rounded">{current.content}</pre>
      <div className="space-x-2">
        <button className="border px-3 py-1 rounded" onClick={() => navigate(`/posts/${id}/edit`)}>수정</button>
        <button className="border px-3 py-1 rounded" onClick={() => navigate('/posts')}>목록</button>
      </div>
    </div>
  );
}

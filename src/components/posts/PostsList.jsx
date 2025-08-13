import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts, removePost } from '../postsSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function PostsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading, error } = useSelector((s) => s.post);

  useEffect(() => { dispatch(loadPosts()); }, [dispatch]);

  if (loading && list.length === 0) return <div>로딩중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">게시글 목록</h1>
        <button className="border px-3 py-1 rounded" onClick={() => navigate('/posts/new')}>글쓰기</button>
      </div>

      <ul className="divide-y">
        {list.map((p) => (
          <li key={p.id} className="py-3 flex justify-between">
            <Link to={`/posts/${p.id}`} className="hover:underline">{p.title}</Link>
            <div className="space-x-2">
              <button className="px-2 py-1 border rounded" onClick={() => navigate(`/posts/${p.id}/edit`)}>수정</button>
              <button className="px-2 py-1 border rounded" onClick={() => dispatch(removePost(p.id))}>삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

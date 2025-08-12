
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost, loadPost } from '@/features/posts/postsSlice';
import PostForm from '@/features/posts/components/PostForm';
import { useNavigate, useParams } from 'react-router-dom';
export default function PostEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current, submitting } = useSelector((s)=>s.post);
  useEffect(()=>{ dispatch(loadPost(id)); },[dispatch,id]);
  const handleSubmit = (values) => {
    dispatch(editPost(Number(id), values, ()=>navigate(`/posts/${id}`)));
  };
  return <PostForm initial={current} onSubmit={handleSubmit} submitting={submitting} />;
}

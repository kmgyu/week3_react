
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '@/components/posts/postsSlice';
import PostForm from '@/components/posts/PostForm';
import { useNavigate } from 'react-router-dom';
export default function PostNew() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitting = useSelector((s)=>s.post.submitting);
  const handleSubmit = (values) => {
    dispatch(addPost(values, (newId)=>navigate(`/posts/${newId}`)));
  };
  return <PostForm onSubmit={handleSubmit} submitting={submitting} />;
}

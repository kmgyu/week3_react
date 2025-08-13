import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPost, createPost, updatePost, deletePost } from '@/utils/post-api';

export const loadPosts = () => async (dispatch) => {
  dispatch(actions.setLoading(true));
  try {
    const data = await fetchPosts();
    dispatch(actions.setList(data));
  } catch (e) {
    dispatch(actions.setError(e.message));
  } finally {
    dispatch(actions.setLoading(false));
  }
};

export const loadPost = (id) => async (dispatch) => {
  dispatch(actions.setLoading(true));
  try {
    const data = await fetchPost(id);
    dispatch(actions.setCurrent(data));
  } catch (e) {
    dispatch(actions.setError(e.message));
  } finally {
    dispatch(actions.setLoading(false));
  }
};

export const addPost = (payload, onSuccess) => async (dispatch) => {
  dispatch(actions.setSubmitting(true));
  try {
    const created = await createPost(payload);
    dispatch(loadPosts());
    if (onSuccess) onSuccess(created.id);
  } catch (e) {
    dispatch(actions.setError(e.message));
  } finally {
    dispatch(actions.setSubmitting(false));
  }
};

export const editPost = (id, payload, onSuccess) => async (dispatch) => {
  dispatch(actions.setSubmitting(true));
  try {
    await updatePost(id, payload);
    await dispatch(loadPost(id));
    await dispatch(loadPosts());
    if (onSuccess) onSuccess();
  } catch (e) {
    dispatch(actions.setError(e.message));
  } finally {
    dispatch(actions.setSubmitting(false));
  }
};

export const removePost = (id) => async (dispatch) => {
  dispatch(actions.setLoading(true));
  try {
    await deletePost(id);
    dispatch(loadPosts());
  } catch (e) {
    dispatch(actions.setError(e.message));
  } finally {
    dispatch(actions.setLoading(false));
  }
};

const initialState = {
  list: [],
  current: null,
  loading: false,
  submitting: false,
  error: null,
};

const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setList: (s, a) => { s.list = a.payload ?? []; },
    setCurrent: (s, a) => { s.current = a.payload ?? null; },
    setLoading: (s, a) => { s.loading = a.payload; },
    setSubmitting: (s, a) => { s.submitting = a.payload; },
    setError: (s, a) => { s.error = a.payload ?? null; },
    clearCurrent: (s) => { s.current = null; },
  },
});

export const actions = slice.actions;
export default slice.reducer;

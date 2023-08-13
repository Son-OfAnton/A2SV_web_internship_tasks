import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string;
  title: string;
  content: string;
  date: Date;
}

interface PostState extends Array<Post> {}

const initialState: PostState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: new Date(),
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: new Date(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, date: Date) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date,
          },
        };
      },
    },
    postUpdated: (state, action: PayloadAction<Post>) => {
      const { id, title, content, date } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
        existingPost.date = date;
      }
    },
    postDeleted: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const index = state.findIndex((post) => post.id === postId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const selectAllPosts = (state: { posts: PostState }) => state.posts;
export const { postAdded, postUpdated, postDeleted } = postsSlice.actions;
export default postsSlice.reducer;

import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, new Date())
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <h2 className="text-blue-600 text-4xl font-semibold mb-10 mt-10 text-center">Note <span className="text-gray-400">App</span></h2>
      <section className="p-4 bg-gray-100 rounded shadow-md mb-20 lg:mx-60 md:mx-40 sm:mx-20">
        <form>
          <div className="mb-4">
            <label htmlFor="postTitle" className="block text-gray-700 font-medium p-">
              Title
            </label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postContent" className="block text-gray-700 font-medium">
              Content
            </label>
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChanged}
              className="w-full h-40 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500 resize-none"
            />
          </div>
          <button
            type="button"
            onClick={onSavePostClicked}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Post
          </button>
        </form>
      </section>
    </>
  );
};

export default AddPostForm;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts, postDeleted, postUpdated } from "./postsSlice";
import { faEdit, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const handleEditClick = (postId: string) => {
    const postToEdit = posts.find((post) => post.id === postId);
    if (postToEdit) {
      setEditingPostId(postId);
      setEditedTitle(postToEdit.title);
      setEditedContent(postToEdit.content);
    }
  };

  const handleSaveEditClick = (postId: string) => {
    if (editedTitle && editedContent) {
      dispatch(
        postUpdated({
          id: postId,
          title: editedTitle,
          content: editedContent,
          date: new Date(),
        })
      );

      setEditingPostId(null);
      setEditedTitle("");
      setEditedContent("");
    }
  };

  const handleDeleteClick = (postId: string) => {
    dispatch(postDeleted(postId));
  };

  const renderedPosts = posts.map((post) => (
    <article key={post.id} className="p-4 bg-white shadow-md mb-4 rounded relative lg:mx-20 md:mx-10 sm:mx-10">
      <div className="absolute top-2 right-2">
        {editingPostId === post.id ? (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-500 cursor-pointer mr-5"
            onClick={() => handleSaveEditClick(post.id)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEdit}
            className="text-blue-500 cursor-pointer mr-5"
            onClick={() => handleEditClick(post.id)}
          />
        )}
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-500 cursor-pointer ml-2 mr-20"
          onClick={() => handleDeleteClick(post.id)}
        />
      </div>
      {editingPostId === post.id ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="block w-3/4 px-4 py-2 mb-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="block w-3/4 h-40 px-4 py-2 mb-2 border rounded focus:outline-none focus:ring focus:ring-blue-500 resize-none"
          />
        </div>
      ) : (
        <div>
          <h3 className="text-blue-600 text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-700 mb-2">{post.content.substring(0, 100)}</p>
          <p className="text-gray-500">
            {`${post.date.getDate()}-${post.date.getMonth() + 1}-${post.date.getFullYear()}`}
          </p>
        </div>
      )}
    </article>
  ));

  return (
    <section>
      <h2 className="text-blue-600 text-2xl font-semibold mb-4 ml-20">Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;

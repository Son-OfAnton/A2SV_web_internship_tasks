import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  useGetBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} from '../../store/features/blogs-api'

const BlogList = () => {
  const { data: blogs } = useGetBlogsQuery()

  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const [updateBlog] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();

  const handleEditClick = (blogId: string) => {
    const postToEdit = (blogs || []).find((blog) => blog.id === blogId);
    if (postToEdit) {
      setEditingBlogId(blogId);
      setEditedTitle(postToEdit.title);
      setEditedContent(postToEdit.content);
    }
  };

  const handleSaveEditClick = (blogId: string) => {
    if (editedTitle && editedContent) {
      updateBlog({
        id: blogId,
        title: editedTitle,
        content: editedContent,
      });

      setEditingBlogId(null);
      setEditedTitle("");
      setEditedContent("");
    }
  };

  const handleDeleteClick = (blogId: string) => {
    deleteBlog({ id: blogId });
  };

  const renderedPosts = (blogs || []).map((blog) => (
    <article
      key={blog.id}
      className="p-4 bg-white shadow-md mb-4 rounded relative lg:mx-20 md:mx-10 sm:mx-10"
    >
      <div className="absolute top-2 right-2">
        {editingBlogId === blog.id ? (
          <FontAwesomeIcon
            icon={faCheck}
            data-TestId={`checkBtn`}
            className="text-green-500 cursor-pointer mr-5"
            onClick={() => handleSaveEditClick(blog.id)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEdit}
            data-TestId={`editBtn`}
            className="text-blue-500 cursor-pointer mr-5"
            onClick={() => handleEditClick(blog.id)}
          />
        )}
        <FontAwesomeIcon
          icon={faTrash}
          data-TestId={`trashBtn`}
          className="text-red-500 cursor-pointer ml-2 mr-20"
          onClick={() => handleDeleteClick(blog.id)}
        />
      </div>
      {editingBlogId === blog.id ? (
        <div>
          <input
            type="text"
            data-TestId="editedTitleField"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="block w-3/4 px-4 py-2 mb-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            data-TestId="editedContentField"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="block w-3/4 h-40 px-4 py-2 mb-2 border rounded focus:outline-none focus:ring focus:ring-blue-500 resize-none"
          />
        </div>
      ) : (
        <div>
          <h3 
            data-TestId = "blogTitle"
            className="text-blue-600 text-lg font-semibold mb-2">
            {blog.title}
          </h3>
          <p
            data-TestId = "blogContent"
            className="text-gray-700 mb-2">
            {blog.content.substring(0, 100)}
          </p>
          <p className="text-gray-500">
            {new Date(blog.date).toLocaleDateString('en-GB')}
          </p>
        </div>
      )}
    </article>
  ));

  return (
    <section>
      <h2 className="text-blue-600 text-2xl font-semibold mb-4 ml-20">
        Blogs
      </h2>
      {renderedPosts}
    </section>
  );
};

export default BlogList;

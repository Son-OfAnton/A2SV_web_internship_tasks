import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Blog } from '../../model/Blog'



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Blogs'],
    endpoints: (builder) => ({
        getBlogs: builder.query<Blog[], void>({
            query: () => '/blogs',
            transformResponse: (res: Blog[]) => res.sort((a, b) => Number(b.id) - Number(a.id)),
            // transformResponse: (res: Blog[]) => res.sort((a, b) => b.id.localeCompare(a.id)),
            providesTags: ['Blogs']
        }),
        addBlog: builder.mutation<Blog, Partial<Blog>>({
            query: (blog) => ({
                url: '/blogs',
                method: 'POST',
                body: blog
            }),
            invalidatesTags: ['Blogs']
        }),
        updateBlog: builder.mutation<Blog, Partial<Blog>>({
            query: (blog) => ({
                url: `/blogs/${blog.id}`,
                method: 'PATCH',
                body: blog
            }),
            invalidatesTags: ['Blogs']
        }),
        deleteBlog: builder.mutation<void, { id: string}>({
            query: ({ id }) => ({
                url: `/blogs/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Blogs']
        }),
    })
})

export const {
    useGetBlogsQuery,
    useAddBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation
} = apiSlice
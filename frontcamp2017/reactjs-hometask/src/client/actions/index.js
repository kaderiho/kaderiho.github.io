export const removeBlog = (blog) => {
    return {
        type: "REMOVE_BLOG",
        payLoad: blog
    }
};
import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from './components/blogs-filter/blogs-filter.jsx';
import BlogAdding from './components/blog-adding/blog-adding.jsx';
import BlogsList from './components/blogs-list/blogs-list.jsx';

class BlogApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputPostMessage: '',
            inputPostAuthor: '',
            filterText: '',
            blogsList: []
        };

        this.inputMessageAuthorHandler = (inputPostAuthor) => {
            this.setState({
                inputPostAuthor
            });
        };

        this.submitMessageHandler = () => {
            this.setState((prevState) => {
                return {
                    blogsList: prevState.blogsList.concat([{
                        text: this.state.inputPostMessage,
                        id: this.state.blogsList.length + 1,
                        author: this.state.inputPostAuthor,
                        date: new Date()
                    }]),
                    inputPostMessage: '',
                    inputPostAuthor: ''
                }
            });
        };

        this.removeBlogItemHandler = (removedItemId) => {
            this.setState((prevState) => {
                return {
                    blogsList: prevState.blogsList.filter((blogItem) => blogItem.id !== removedItemId)
                }
            })
        };

        this.inputMessageHandler = (inputPostMessage) => {
            this.setState({
                inputPostMessage,
            });
        };

        this.filterHandler = (filterText) => {
            this.setState({
                filterText
            });
        }
    }

    render() {
        let { state } = this;
        let filteredBlogList;
        let { inputPostMessage, inputPostAuthor, blogsList, filterText } = state;

        if (!filterText.length) {
            filteredBlogList = state.blogsList;
        } else {
            filteredBlogList = blogsList.filter((blogItem) => blogItem.author.indexOf(filterText) !== -1);
        }

        return (
            <div>
                <BlogAdding inputMessageAuthorHandler={this.inputMessageAuthorHandler}
                            submitMessageHandler={this.submitMessageHandler}
                            inputPostMessage={inputPostMessage}
                            inputMessageHandler={this.inputMessageHandler}
                            inputPostAuthor={inputPostAuthor} />

                <BlogsList removeBlogItemHandler={this.removeBlogItemHandler}
                           blogList={filteredBlogList} />

                <BlogsFilter filterText={filterText} filterHandler={this.filterHandler}/>
            </div>
        )
    }
}

export default BlogApp;
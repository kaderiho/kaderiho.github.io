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

        this.inputMessageAuthorHandler = this.inputMessageAuthorHandler.bind(this);
        this.removeBlogItemHandler = this.removeBlogItemHandler.bind(this);
        this.submitMessageHandler = this.submitMessageHandler.bind(this);
        this.inputMessageHandler = this.inputMessageHandler.bind(this);
        this.filterHandler = this.filterHandler.bind(this);
    }

    inputMessageHandler(inputPostMessage) {
        this.setState({
            inputPostMessage: inputPostMessage
        });
    }

    inputMessageAuthorHandler(inputPostAuthor) {
        this.setState({
            inputPostAuthor: inputPostAuthor
        });
    }

    filterHandler(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    submitMessageHandler() {
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
    }

    removeBlogItemHandler(removedItemId) {
        this.setState((prevState) => {
            return {
                blogsList: prevState.blogsList.filter((blogItem) => blogItem.id !== removedItemId)
            }
        })
    }

    render() {
        let filteredBlogList;

        if (!this.state.filterText.length) {
            filteredBlogList = this.state.blogsList;
        } else {
            filteredBlogList = this.state.blogsList.filter((blogItem) => blogItem.author.indexOf(this.state.filterText) !== -1);
        }

        return (
            <div>
                <BlogAdding inputMessageAuthorHandler={this.inputMessageAuthorHandler}
                            submitMessageHandler={this.submitMessageHandler}
                            inputPostMessage={this.state.inputPostMessage}
                            inputMessageHandler={this.inputMessageHandler}
                            inputPostAuthor={this.state.inputPostAuthor} />

                <BlogsList removeBlogItemHandler={this.removeBlogItemHandler}
                           blogList={filteredBlogList} />

                <BlogsFilter filterText={this.state.filterText} filterHandler={this.filterHandler}/>
            </div>
        )
    }
}

export default BlogApp;
{/*render(<BlogApp/>, document.getElementById('app'));*/}
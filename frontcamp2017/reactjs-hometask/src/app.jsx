import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from './components/blogs-filter/blogs-filter.jsx';
import BlogAdding from './components/blog-adding/blog-adding.jsx';
import BlogsList from './components/blogs-list/blogs-list.jsx';
import BlogItem from './components/blog-item/blog-item.jsx';

let blogs = [{
    id: 0,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date()
}, {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date()
}, {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date()
}];

class BlogApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typingPostMessage: '',
            postAuthor: '',
            blogsList: [],
            filter: ''
        };

        this.inputMessageHandler = this.inputMessageHandler.bind(this);
        this.submitMessageHandler = this.submitMessageHandler.bind(this);
        this.removeBlogItemHandler = this.removeBlogItemHandler.bind(this);
        this.inputMessageAuthorHandler = this.inputMessageAuthorHandler.bind(this);
    }

    inputMessageHandler(typingPostMessage) {
        this.setState({
            typingPostMessage: typingPostMessage
        });
    }

    inputMessageAuthorHandler(postAuhtor) {
        this.setState({
            postAuthor: postAuhtor
        });
    }

    submitMessageHandler() {
        this.setState((prevState) => {
            return {
                blogsList: prevState.blogsList.concat([{
                    text: this.state.typingPostMessage,
                    id: this.state.blogsList.length + 1,
                    author: this.state.postAuthor,
                    date: new Date()
                }]),
                addingBlogText: '',
                postAuthor: ''
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
        return (
            <div>
                <BlogAdding inputMessageAuthorHandler={this.inputMessageAuthorHandler}
                            submitMessageHandler={this.submitMessageHandler}
                            typingPostMessage={this.state.typingPostMessage}
                            inputMessageHandler={this.inputMessageHandler}
                            postAuthor={this.state.postAuthor} />
                <BlogsList removeBlogItem={this.removeBlogItemHandler}
                           blogs={this.state.blogsList} />
                <BlogsFilter />
            </div>
        )
    }
}

render(<BlogApp/>, document.getElementById('app'));
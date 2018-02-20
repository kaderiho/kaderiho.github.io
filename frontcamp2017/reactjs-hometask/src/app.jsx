import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from './components/blogs-filter/blogs-filter.jsx';
import BlogAdding from './components/blog-adding/blog-adding.jsx';
import BlogsList from './components/blogs-list/blogs-list.jsx';
import BlogItem from './components/blog-item/blog-item.jsx';

class BlogApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typingPostMessage: '',
            postAuthor: '',
            filterText: '',
            blogsList: []
        };

        this.inputMessageAuthorHandler = this.inputMessageAuthorHandler.bind(this);
        this.removeBlogItemHandler = this.removeBlogItemHandler.bind(this);
        this.submitMessageHandler = this.submitMessageHandler.bind(this);
        this.inputMessageHandler = this.inputMessageHandler.bind(this);
        this.filterHandler = this.filterHandler.bind(this);
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

    filterHandler(filterText) {
        this.setState({
            filterText: filterText
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
                typingPostMessage: '',
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
        let filteredBlogsList;

        if (!this.state.filterText.length) {
            filteredBlogsList = this.state.blogsList;
        } else {
            filteredBlogsList = this.state.blogsList.filter((blogItem) => blogItem.author.indexOf(this.state.filterText) !== -1);
        }

        return (
            <div>
                <BlogAdding inputMessageAuthorHandler={this.inputMessageAuthorHandler}
                            submitMessageHandler={this.submitMessageHandler}
                            typingPostMessage={this.state.typingPostMessage}
                            inputMessageHandler={this.inputMessageHandler}
                            postAuthor={this.state.postAuthor} />

                <BlogsList removeBlogItem={this.removeBlogItemHandler}
                           blogs={filteredBlogsList} />

                <BlogsFilter filterText={this.state.filterText} filterHandler={this.filterHandler}/>
            </div>
        )
    }
}

render(<BlogApp/>, document.getElementById('app'));
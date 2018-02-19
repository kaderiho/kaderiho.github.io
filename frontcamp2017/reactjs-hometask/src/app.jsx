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
            addingBlogText: '',
            blogsList: []
        };

        this.onBlogInputChange = this.onBlogInputChange.bind(this);
        this.onBlogSubmitHandle = this.onBlogSubmitHandle.bind(this);
        this.removeBlogItemHandler = this.removeBlogItemHandler.bind(this);
    }

    onBlogInputChange(addingBlogText) {
        this.setState({
            addingBlogText: addingBlogText
        });
    }

    onBlogSubmitHandle() {
        this.setState((prevState) => {
            return {
                addingBlogText: '',
                blogsList: prevState.blogsList.concat([{
                    text: this.state.addingBlogText,
                    id: this.state.blogsList.length + 1,
                    date: new Date()
                }])
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
                <BlogAdding addingBlogText={this.state.addingBlogText} onBlogInputChange={this.onBlogInputChange} onBlogSubmitHandle={this.onBlogSubmitHandle}/>
                <BlogsList blogs={this.state.blogsList} removeBlogItem={this.removeBlogItemHandler}/>
            </div>
        )
    }
}

render(<BlogApp/>, document.getElementById('app'));
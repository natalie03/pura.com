/*
  Blog
  <Blog/>
*/
import React from 'react';
import request from 'superagent';
import Loop from '../elements/loop';
import Api from '../../helpers/api';

var Blog = React.createClass({
    getInitialState: function () {
        return { component: <div /> };
    },
    componentWillMount: function () {
        var self = this;
        request
            .get(Api.url + '/wp-json/wp/v2/posts')
            .end(function (err, res) {
                var data = JSON.parse(res.text);

                self.setState({ component: <Loop data={ data } bodyClass="blog" /> });
            });
    },

    render: function () {
        return this.state.component;
    }
});

export default Blog;

import React, { Component } from 'react';

class RecentBlogs extends Component {
    state = { posts: {} };
    componentDidMount() {
        fetch('http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/3')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState(
                    {
                        posts: json.results,
                        post_num:json.results.length
                    });
            });
    }
    render() {
        let posts = this.state.posts;
        let post_num=this.state.post_num;
        return (
            <div className="widewrapper">
                <div className="container content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="showroom-controls">
                                <div className="recent-title"><h3>
									<i className="glyphicons pen"></i>
									看过我的人
									</h3></div>
                            </div>
                            <div className="row_img">
                                {Object.keys(posts).map(function(num,index){
                                    return(
                                        <div className="row_imgn"><img src={posts[index].url} alt={posts[index].desc} />
                                            <p>{posts[index].publishedAt}</p>
                                        </div>
                                  );
                                 })
                                }
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentBlogs;
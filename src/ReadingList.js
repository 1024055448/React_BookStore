import React,{Component} from 'react';
import TopNav from './layouts/TopNav';
import Footer from './layouts/Footer';
import MetaData from './MetaData';
import ReviewList from './widget/ReviewList';
import Tags from './widget/Tags';

class ReadingList extends Component{
	constructor(props){
		super(props);
		this.state={
			readings: {},
        	count: 0,
        	page: 0
		};
	}
	componentDidMount(){
		this.setState({
			page: this.props.match.params.page || "1"
		});
	}
	componentDidUpdate(prevProps,prevState){
		if(prevState.page!==this.state.page){
			var URI = "http://api.rsywx.com/reading/listHeadline/" + this.state.page;
			fetch(URI)
			.then(res=>{
				return res.json();
			})
			.then(json=>{
				this.setState({
					readings:json.out[0],
					count:json.out[1],
				});
			})
		}
	}

	render(){
		let readings =this.state.readings;
			console.log(this.state.count);
			console.log(readings);
		return(
			<div>
			<MetaData />
			<TopNav active="2" />
			<div className="widewrapper">
                    <div className="container content">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>第{this.state.page}页，共{Math.ceil(this.state.count / 5)}页</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th className="col-sm-3">
                                                <strong>图片</strong>
                                            </th>
                                            <th className="col-sm-3">
                                                <strong>书名</strong>
                                            </th>
                                            <th className="col-sm-2">
                                                <strong>作者</strong>
                                            </th>
                                            <th className="col-sm-3">
                                                <strong>TAG</strong>
                                            </th>
                                            <th className="col-sm-1">
                                                <strong>位置</strong>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                {
                                	Object.keys(readings).map(function(reading,index){
                                		let book=readings[index].book;
                                		return(
                                			<table key={"book-"+book.bookid} className="table">
                                				<tbody>
                                                    <tr>
                                                        <td className="col-sm-3" rowSpan="2">
                                                            <img
                                                                src={"http://api.rsywx.com/book/cover/" + book.bookid + "/" + book.title + "/" + book.author + "/200"}
                                                                alt={book.title+" "+book.author}
                                                                title={book.title+" "+book.author} />
                                                        </td>
                                                        <td className="col-sm-3">
                                                            <a href={"/books/"+book.bookid+".html"}>{book.title}</a>
                                                        </td>
                                                        <td className="col-sm-2">{book.author}</td>
                                                        <td className="col-sm-3">
                                                            <Tags key={book.bookid} bookid={book.bookid} />
                                                        </td>
                                                        <td className="col-sm-1">{book.location}

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="4">
                                                        	<ReviewList id={book.bookid}/>
                                                        </td>
                                                    </tr>  
                                                </tbody>
                                            </table>
                                			);
                                	})
                                }
                          </div>
                        </div>
                     </div>
                </div>
                <Footer />
            </div>
			);
	}
}
export default ReadingList;
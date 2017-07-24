import React, { Component } from  'react';
import { connect } from 'react-redux';
import { selectBook } from  '../actions/index';
import { bindActionCreators } from 'redux';


export class BookList extends Component  {

   renderList() {
      return this.props.books.map((book) => {
         return (
             <li key={book.title} className="list-group-item">{book.title}</li>
         );
      }
    );
   }


  render() {
     return (
         <ul className="list-group cols-sm-4">
          {this.renderList()}
         </ul>
     )
  }
}


function  mapStateToProps(state) {
    //Whatever is returned from here will end up showing has props.
    //inside the booklist

    return {
       books: state.books
    };
}


//Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
     //Whenever selectBook is called results should be passed to all our reducers.
   return bindActionCreators( { selectBook: selectBook}, dispatch );
}



export default connect(mapStateToProps, mapStateToProps)(BookList);

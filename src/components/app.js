import React from 'react';
import { Component }  from  'react';
import BookList  from  '../conatiners/book_list';
import BookDetail from '../containers/book_detail';


export default class App extends Component {
  render() {
    return (
      <div>
         <BookList />
         <BookDetail />
      </div>
    );
  }
}

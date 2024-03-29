import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from './searchbar';
import RecentPosts from './recentPosts';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='app'>
          <Logo/>
          <SearchBar/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}

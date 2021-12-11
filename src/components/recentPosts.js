import React, { Component } from 'react';


class RecentPosts extends Component {
  render() {
    return (
       <div className="recent-posts">
           <div classname="recent-posts__wrapper">
               <div classname="recent-posts__heading">Recent Posts</div>
               <ul className="recent-posts__posts">
                   <li>recent post 0</li>
                   <li>recent post 1</li>
                   <li>recent post 2</li>
               </ul>
           </div>

       </div>
    )
  }
}

export default RecentPosts;
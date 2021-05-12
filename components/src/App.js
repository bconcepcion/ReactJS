import React from 'react'
import ApprovalCard from './ApprovalCard.js'
import CommentDetail from './CommentDetail.js'


function App() {
  return (
    //pass props from parent to child
    //value of author could also be js var
    <div>
    <ApprovalCard>
    <CommentDetail author="Sam" timeAgo="Today at 5PM" comment="Whazgu" />
    </ApprovalCard>
    </div>
    
  );
}

export default App;

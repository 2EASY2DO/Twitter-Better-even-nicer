const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx')

class New extends React.Component{
  render() {
    return (
      <AppLayout title="Twitter Better New Post">
      <form action={`/restaurants`} method="post">
        <p>
          <label>Username:</label>
          <input type="text"  name="username"/>
        </p>
        <p>
          <label>Message:</label>
          <input type="text" name="message"/>
        </p>
        <p>
          <label>Tag:</label>
          <input type="text"  name="tag"/>
        </p>
        <p>
          <input type="submit" value="Submit"/>
        </p>
      </form>
      </AppLayout>
    )
  }
}
module.exports= New ;

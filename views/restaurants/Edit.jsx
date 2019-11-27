const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx')

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Twitter Better Edit Page">
      <form action={`/restaurants/${this.props._id}?_method=PUT`} method="POST">
        <p>
          <label>Name:</label>
          <input type="text" value={this.props.username} name="name"/>
        </p>
        <p>
          <label>Owner:</label>
          <input type="text" value={this.props.message} name="owner"/>
        </p>
        <p>
          <label>Type:</label>
          <input type="text" value={this.props.tag} name="type"/>
        </p>
        <p>
          <input type="submit" value="Submit"/>
        </p>
      </form>
      </AppLayout>
    )
  }
}
module.exports= Edit ;

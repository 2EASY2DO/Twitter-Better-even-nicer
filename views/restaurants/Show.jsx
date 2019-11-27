const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx');

class Show extends React.Component{
  render() {
    return (
    <AppLayout title="Twitter Better Show">
    <p>Username: {this.props.username}</p>
    <p>Tag: {this.props.tag}</p>
    <p>Message: {this.props.message}</p>

    <a href={`/restaurants/edit/${this.props._id}`}>Edit</a>

    <form action={`/restaurants/${this.props._id}?_method=delete`} method="post">
      <input type="submit" value="Delete" />
    </form>
    </AppLayout>
    )
  }
}
module.exports= Show;

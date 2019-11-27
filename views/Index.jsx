const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Twitter Better">
        <ul class="restaurant-list">
        {this.props.post.map(
          (post, index) => {
            return(
              <li class="restaurant-list__item"><a href={`/restaurants/${post.id}`}>{post.username}</a></li>
            )}
        )}
        </ul>
      <p>
        <a href="/restaurants/new">New Post</a>
      </p>
      </AppLayout>

    )
  }
}
module.exports= Index ;

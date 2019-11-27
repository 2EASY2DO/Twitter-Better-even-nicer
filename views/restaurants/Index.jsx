const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Yum Index Page">
        <ul class="restaurant-list">
        {this.props.restaurants.map(
          (restaurant, index) => {
              return (
                <li class="restaurant-list__item">
                  <a href={`/restaurants/${restaurant._id}`}>
                    <span class="name">{restaurant.name}</span>
                    <span class="owner">{restaurant.owner}</span>
                    <span class="type">{restaurant.type}</span>
                    <span class="capacity">{restaurant.capacity}</span>
                  </a>
                </li>
              )}
        )}
        </ul>
      <a href="/restaurants/new">New Restaurant</a>
      </AppLayout>
    )
  }
}
module.exports= Index ;

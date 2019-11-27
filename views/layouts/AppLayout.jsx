const React = require('react');

class AppLayout extends React.Component{
  render() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css" type="text/css"/>
        </head>
        <body>
          <header>
            <h1>{this.props.title}</h1>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
              </ul>
            </nav>
          </header>
          <main>
            {this.props.children}
          </main>
        </body>
      </html>

    )
  }
}
module.exports= AppLayout;

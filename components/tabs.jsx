import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
    this.titles = props.panes.map(tab => (
      tab['title']
    ));
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      tabIndex: e.target.id
    });
    console.log(this.state);
  }

  buildHeaders(titles) {
    return(
      <div className="header-row">
        {titles.map((title, num) => (
          <h1
            className="header-tab"
            id={num}
            key={num}
            onClick={this.handleClick}>
              {title}
            </h1>
        ))
      }
      </div>
    );
  }

  render() {
    return(
      <div className="tab-widget">
        {this.buildHeaders(this.titles)}
        <article className="tab">
          {this.props.panes[this.state.tabIndex].content}
        </article>
    </div>
  );
  }
}

export default Tabs;

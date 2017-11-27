class Snippet extends React.Component {
  render() {
    return (
      <div id="topSection">
        <div id="brandLogo"></div>

        <div id="searchIconAndTextContainer">
          <div id="searchIcon"></div>
          <input id="searchText" maxlength="256" placeholder="Search" type="text" />
          <input id="searchSubmit" title="Submit search" value="▶" type="button" />
        </div>

        <div id="snippetContainer">
          <div id="snippets">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

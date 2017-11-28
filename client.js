let render = ReactDOM.render;
let HashRouter = ReactRouterDOM.HashRouter;
let Route = ReactRouterDOM.Route;

render((
  <HashRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/net-neutrality" component={NetNeutrality} />
      <Route path="/firefox-retention" component={FirefoxRetention} />
    </div>
  </HashRouter>
), document.getElementById('app'))

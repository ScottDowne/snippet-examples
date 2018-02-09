let render = ReactDOM.render;
let HashRouter = ReactRouterDOM.HashRouter;
let Route = ReactRouterDOM.Route;

render((
  <HashRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/net-neutrality" component={NetNeutrality} />
      <Route path="/firefox-retention" component={FirefoxRetention} />
      <Route path="/fr-2015" component={Fundraising2015} />
      <Route path="/fr-2015-spectacular-1" component={Fundraising2015Spectacular1} />
      <Route path="/fr-2015-spectacular-2" component={Fundraising2015Spectacular2} />
      <Route path="/fr-2016" component={Fundraising2016Page} />
      <Route path="/fr-2016-spectacular-1" component={Fundraising2016Spectacular1} />
      <Route path="/fr-2016-spectacular-2" component={Fundraising2016Spectacular2} />
      <Route path="/mass-surveillance" component={MassSurveillance} />
    </div>
  </HashRouter>
), document.getElementById('app'))

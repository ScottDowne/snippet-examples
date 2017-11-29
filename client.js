let render = ReactDOM.render;
let HashRouter = ReactRouterDOM.HashRouter;
let Route = ReactRouterDOM.Route;

render((
  <HashRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/net-neutrality" component={NetNeutrality} />
      <Route path="/firefox-retention" component={FirefoxRetention} />
      <Route path="/fundraising-2015" component={Fundraising2015} />
      <Route path="/fundraising-2015-spectacular" component={Fundraising2015Spectacular} />
      <Route path="/fundraising-2016" component={Fundraising2016} />
      <Route path="/fundraising-2016-spectacular" component={Fundraising2016Spectacular} />
      <Route path="/mass-surveillance" component={MassSurveillance} />
    </div>
  </HashRouter>
), document.getElementById('app'))

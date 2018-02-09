let render = ReactDOM.render;
let HashRouter = ReactRouterDOM.HashRouter;
let Route = ReactRouterDOM.Route;
let Switch = ReactRouterDOM.Switch;

render((
  <HashRouter>
    <div>
      <Switch>
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

        <Route path="/fr-2017-1" push={false} component={() => window.location = "https://snippets-admin.us-west.moz.works/show/uuid/b07671de-e214-4810-a78e-0cda9ca415f6/"}/>
        <Route path="/fr-2017-2" push={false} component={() => window.location = "https://snippets-admin.us-west.moz.works/show/uuid/ef7b6377-893f-4e6d-a955-b49b2c9c5d67/"}/>
        <Route path="/fr-2017-3" push={false} component={() => window.location = "https://snippets-admin.us-west.moz.works/show/uuid/52d82f59-e396-4b5e-bca2-b722b3663404/"}/>
        <Route path="/fr-2017-4" push={false} component={() => window.location = "https://snippets-admin.us-west.moz.works/show/uuid/29426321-6d93-4ba0-b314-d1920b7c58ca/"}/>
        <Route path="/fr-2017-5" push={false} component={() => window.location = "https://snippets-admin.us-west.moz.works/show/uuid/a891ed85-1712-4283-a669-bbccc01b4b1f/"}/>
        <Route path="/fr-2017-6" push={false} component={() => window.location = "https://snippets-admin.us-west.moz.works/show/uuid/05483172-c620-4ed2-b4b5-37403f60d851/"}/>
      </Switch>
    </div>
  </HashRouter>
), document.getElementById('app'))

class MassSurveillance extends React.Component {
  componentDidMount() {
    var
    rectangle,
      radius = 4.5,
      iris = document.querySelector('.iris'),
      center;

    function measureThings() {
      rectangle = iris.getBoundingClientRect();
      center = {
        x: (rectangle.width / 2) + (rectangle.left),
        y: (rectangle.height / 2) + (rectangle.top)
      };
    }

    function doMaths(x, y, radius) {
      var
      pythagoras = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)),
        coordinates = {
          x: x,
          y: y
        };
      if (pythagoras !== 0) {
        coordinates.x = x * radius / pythagoras;
        coordinates.y = y * radius / pythagoras;
      }
      return coordinates;
    }

    function translatePupil(coords) {
      var transform = 'translate(' + Math.round(coords.x) + 'px, ' + Math.round(coords.y) + 'px)';
      iris.style.transform = transform;
    }

    var mousemoveTime = Date.now();
    var eye = document.querySelector('.privacy-eye');

    function checkMovement() {
      var nowTime = Date.now();
      var diffTime = (nowTime - mousemoveTime) / 1000;
      if (diffTime > 3 && !eye.classList.contains('focus')) {
        iris.style.transform = 'translate(0, 0)';
        eye.classList.add('smooth');
        eye.classList.add('wander');
      }

      setTimeout(checkMovement, 1000);
    }

    checkMovement();

    function onMouseMove(e) {
      mousemoveTime = Date.now();
      eye.classList.remove('wander');
      eye.classList.remove('smooth');
      measureThings();
      translatePupil(doMaths(e.pageX - center.x, e.pageY - center.y, radius));
    }

    function onMouseEnter() {
      eye.classList.add('smooth');
      eye.classList.add('focus');
      iris.style.transform = 'translate(0, 0)';
      window.removeEventListener("mousemove", onMouseMove);
    }

    function onMouseLeave() {
      eye.classList.remove('focus');
      eye.classList.remove('smooth');
      window.addEventListener("mousemove", onMouseMove);
    }

    if (iris) {
      eye.addEventListener("mouseenter", onMouseEnter);
      eye.addEventListener("mouseleave", onMouseLeave);
      window.addEventListener("mousemove", onMouseMove);
    }
  }

  render() {
    return (
      <div className="mass-surveillance">
        <Snippet>
          <div className="container">
            <div className="eye-container">
              <img className="eye-image" height="120" width="82" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTI1cHgiIGhlaWdodD0iMTAzcHgiIHZpZXdCb3g9IjAgMCAxMjUgMTAzIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjUgMTAzIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiM0RDRFNTMiIGQ9Ik02MS40NSwyNS4xMzVjLTMwLjMxMSwwLTQ2Ljk5MiwyNS43My00Ni45OTIsMjUuNzNTMzEuMTQsNzcuNDQzLDYxLjQ1LDc3LjQ0Mw0KCQljMzAuMzE1LDAsNDcuMDU5LTI2LjU3OCw0Ny4wNTktMjYuNTc4UzkxLjc2NiwyNS4xMzYsNjEuNDUsMjUuMTM1eiBNNjEuOTE0LDc1LjQwMmMtMTMuMzg4LDAtMjQuMjc4LTEwLjg0LTI0LjI3OC0yNC4yMjgNCgkJUzQ4LjUyNiwyNyw2MS45MTQsMjdjMC4wMDEsMCwwLjAwMSwwLDAuMDAyLDBjNi40ODQsMCwxMi41ODEsMi40MzMsMTcuMTY3LDcuMDE5YzQuNTg1LDQuNTg2LDcuMTEsMTAuNTkxLDcuMTEsMTcuMDc2DQoJCUM4Ni4xOTMsNjQuNDgxLDc1LjMwMiw3NS40LDYxLjkxNCw3NS40MDJ6IE05OS4wMTcsNTguMTMyYy0wLjIyOCwwLjI0My0wLjU3MywwLjM2LTAuOTIyLDAuMzZjLTAuODk2LDAtMS44MTItMC43NzEtMC44MS0yLjE2NQ0KCQljMi4xNDEtMi45NzksMS4xMDQtNi4zOTktMC42NTUtOS4wODFjLTAuODg2LTEuMzQ5LTAuMTQyLTMsMC45MjktM2MwLjMwMiwwLDAuNjI5LDAuMTMsMC45NTIsMC40MzUNCgkJYzEuMDc0LDEuMDEzLDEuMjE3LDIuMDk4LDMuNjExLDQuMzg3YzIuMTExLDIuMDIyLDIuMTg5LDIuOTgzLDAuNjM1LDQuMzkyQzEwMS4wMiw1NS4wMjksMTAwLjI3Miw1Ni43ODgsOTkuMDE3LDU4LjEzMnoiLz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjNEQ0RTUzIiBkPSJNNjEuNzI5LDg5LjQyM2MtMC41OTksMC0xLjA4NC0wLjQ4NS0xLjA4NC0xLjA4NHYtNS4wNzJjMC0wLjU5OSwwLjQ4NS0xLjA4NCwxLjA4NC0xLjA4NA0KCQkJczEuMDg0LDAuNDg1LDEuMDg0LDEuMDg0djUuMDcyQzYyLjgxMiw4OC45MzgsNjIuMzI3LDg5LjQyMyw2MS43MjksODkuNDIzeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzRENEU1MyIgZD0iTTUwLjc1LDg4LjE3NWMtMC4wOTMsMC0wLjE4OC0wLjAxMi0wLjI4MS0wLjAzOGMtMC41NzktMC4xNTUtMC45MjItMC43NDktMC43NjgtMS4zMjhsMS4zMTItNC44OTkNCgkJCWMwLjE1NS0wLjU3OSwwLjc1LTAuOTI0LDEuMzI4LTAuNzY3YzAuNTc5LDAuMTU1LDAuOTIyLDAuNzQ5LDAuNzY4LDEuMzI4bC0xLjMxMiw0Ljg5OUM1MS42NjcsODcuODU1LDUxLjIyOSw4OC4xNzUsNTAuNzUsODguMTc1DQoJCQl6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjNEQ0RTUzIiBkPSJNMzkuODQsODQuNDE3Yy0wLjE4NCwwLTAuMzctMC4wNDctMC41NDEtMC4xNDVjLTAuNTE5LTAuMjk5LTAuNjk2LTAuOTYyLTAuMzk3LTEuNDgxbDIuNTM0LTQuMzkzDQoJCQljMC4zLTAuNTE5LDAuOTYxLTAuNjk2LDEuNDgxLTAuMzk3YzAuNTE5LDAuMjk5LDAuNjk2LDAuOTYyLDAuMzk3LDEuNDgxbC0yLjUzNCw0LjM5M0M0MC41NzksODQuMjIyLDQwLjIxNSw4NC40MTcsMzkuODQsODQuNDE3eg0KCQkJIi8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjNEQ0RTUzIiBkPSJNMzAuOTI2LDc5LjE5OGMtMC4yNzcsMC0wLjU1NS0wLjEwNi0wLjc2Ny0wLjMxN2MtMC40MjQtMC40MjMtMC40MjQtMS4xMS0wLjAwMS0xLjUzNGwzLjU4NC0zLjU4OA0KCQkJYzAuNDI0LTAuNDI0LDEuMTEtMC40MjMsMS41MzQsMGMwLjQyNCwwLjQyMywwLjQyNCwxLjExLDAuMDAxLDEuNTM0bC0zLjU4NCwzLjU4OEMzMS40ODEsNzkuMDkyLDMxLjIwMyw3OS4xOTgsMzAuOTI2LDc5LjE5OHoiLz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iIzRENEU1MyIgZD0iTTczLjEyMSw4OC4xNzVjLTAuNDc5LDAtMC45MTctMC4zMi0xLjA0Ny0wLjgwNGwtMS4zMTItNC44OTljLTAuMTU0LTAuNTc5LDAuMTg4LTEuMTczLDAuNzY4LTEuMzI4DQoJCQkJYzAuNTc3LTAuMTU4LDEuMTczLDAuMTg4LDEuMzI4LDAuNzY3bDEuMzEyLDQuODk5YzAuMTU0LDAuNTc5LTAuMTg4LDEuMTczLTAuNzY4LDEuMzI4DQoJCQkJQzczLjMwOSw4OC4xNjMsNzMuMjE0LDg4LjE3NSw3My4xMjEsODguMTc1eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iIzRENEU1MyIgZD0iTTg0LjAyOSw4NC40MTdjLTAuMzc1LDAtMC43MzktMC4xOTQtMC45NC0wLjU0MmwtMi41MzUtNC4zOTNDODAuMjU1LDc4Ljk2Myw4MC40MzMsNzguMyw4MC45NTEsNzgNCgkJCQljMC41MjEtMC4yOTksMS4xODItMC4xMjEsMS40ODEsMC4zOTdsMi41MzUsNC4zOTNjMC4yOTksMC41MTksMC4xMjEsMS4xODItMC4zOTcsMS40ODENCgkJCQlDODQuMzk5LDg0LjM3LDg0LjIxMyw4NC40MTcsODQuMDI5LDg0LjQxN3oiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiM0RDRFNTMiIGQ9Ik05Mi45NDQsNzkuMTk4Yy0wLjI3NywwLTAuNTU2LTAuMTA2LTAuNzY3LTAuMzE4bC0zLjU4Ni0zLjU4OGMtMC40MjQtMC40MjQtMC40MjQtMS4xMSwwLTEuNTM0DQoJCQkJYzAuNDI0LTAuNDIzLDEuMTExLTAuNDIzLDEuNTMzLDBsMy41ODYsMy41ODhjMC40MjQsMC40MjQsMC40MjQsMS4xMSwwLDEuNTM0QzkzLjQ5OSw3OS4wOTIsOTMuMjIyLDc5LjE5OCw5Mi45NDQsNzkuMTk4eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiM0RDRFNTMiIGQ9Ik02MS43MjksMTguOTE1Yy0wLjU5OSwwLTEuMDg0LTAuNDg1LTEuMDg0LTEuMDg0di01LjA3MWMwLTAuNTk5LDAuNDg1LTEuMDg0LDEuMDg0LTEuMDg0DQoJCQlzMS4wODQsMC40ODUsMS4wODQsMS4wODR2NS4wNzFDNjIuODEyLDE4LjQyOSw2Mi4zMjcsMTguOTE1LDYxLjcyOSwxOC45MTV6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjNEQ0RTUzIiBkPSJNNTIuMDYsMTkuOTkxYy0wLjQ3OSwwLTAuOTE3LTAuMzItMS4wNDctMC44MDVsLTEuMzEyLTQuODk5Yy0wLjE1NC0wLjU3OSwwLjE4OC0xLjE3MywwLjc2OC0xLjMyOA0KCQkJYzAuNTc4LTAuMTU2LDEuMTczLDAuMTg4LDEuMzI4LDAuNzY3bDEuMzEyLDQuODk5YzAuMTU0LDAuNTc5LTAuMTg4LDEuMTczLTAuNzY4LDEuMzI4QzUyLjI0NywxOS45NzksNTIuMTUyLDE5Ljk5MSw1Mi4wNiwxOS45OTENCgkJCXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiM0RDRFNTMiIGQ9Ik00Mi4zNzYsMjMuMjQyYy0wLjM3NSwwLTAuNzM5LTAuMTk0LTAuOTQtMC41NDJsLTIuNTM0LTQuMzkzYy0wLjI5OS0wLjUxOS0wLjEyMS0xLjE4MiwwLjM5Ny0xLjQ4MQ0KCQkJYzAuNTIxLTAuMjk5LDEuMTgyLTAuMTIxLDEuNDgxLDAuMzk3bDIuNTM0LDQuMzkzYzAuMjk5LDAuNTE5LDAuMTIxLDEuMTgyLTAuMzk3LDEuNDgxQzQyLjc0NiwyMy4xOTUsNDIuNTYsMjMuMjQyLDQyLjM3NiwyMy4yNDINCgkJCXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiM0RDRFNTMiIGQ9Ik0zNC41MSwyNy42NTZjLTAuMjc3LDAtMC41NTYtMC4xMDYtMC43NjgtMC4zMThsLTMuNTg0LTMuNTg3Yy0wLjQyMy0wLjQyNC0wLjQyMy0xLjExLDAuMDAxLTEuNTM0DQoJCQljMC40MjQtMC40MjMsMS4xMS0wLjQyMywxLjUzNCwwbDMuNTg0LDMuNTg3YzAuNDIzLDAuNDI0LDAuNDIzLDEuMTEtMC4wMDEsMS41MzRDMzUuMDY0LDI3LjU1LDM0Ljc4NywyNy42NTYsMzQuNTEsMjcuNjU2eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjNEQ0RTUzIiBkPSJNNzEuODExLDE5Ljk5MWMtMC4wOTMsMC0wLjE4OC0wLjAxMi0wLjI4MS0wLjAzOGMtMC41NzktMC4xNTUtMC45MjItMC43NS0wLjc2OC0xLjMyOGwxLjMxMi00Ljg5OQ0KCQkJCWMwLjE1NS0wLjU3OSwwLjc1MS0wLjkyMiwxLjMyOC0wLjc2N2MwLjU3OSwwLjE1NSwwLjkyMiwwLjc1LDAuNzY4LDEuMzI4bC0xLjMxMiw0Ljg5OQ0KCQkJCUM3Mi43MjgsMTkuNjcxLDcyLjI4OSwxOS45OTEsNzEuODExLDE5Ljk5MXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiM0RDRFNTMiIGQ9Ik04MS40OTIsMjMuMjQyYy0wLjE4NCwwLTAuMzctMC4wNDctMC41NDEtMC4xNDVjLTAuNTE5LTAuMy0wLjY5Ni0wLjk2My0wLjM5Ny0xLjQ4MWwyLjUzNS00LjM5Mw0KCQkJCWMwLjMtMC41MTksMC45NjItMC42OTYsMS40ODEtMC4zOTdjMC41MTksMC4zLDAuNjk2LDAuOTYzLDAuMzk3LDEuNDgxbC0yLjUzNSw0LjM5M0M4Mi4yMzEsMjMuMDQ3LDgxLjg2NywyMy4yNDIsODEuNDkyLDIzLjI0MnoNCgkJCQkiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiM0RDRFNTMiIGQ9Ik04OS4zNTgsMjcuNjU2Yy0wLjI3NywwLTAuNTU1LTAuMTA2LTAuNzY3LTAuMzE3Yy0wLjQyNC0wLjQyNC0wLjQyNC0xLjExLDAtMS41MzRsMy41ODYtMy41ODcNCgkJCQljMC40MjItMC40MjQsMS4xMDktMC40MjMsMS41MzMsMGMwLjQyNCwwLjQyNCwwLjQyNCwxLjExLDAsMS41MzRsLTMuNTg2LDMuNTg3Qzg5LjkxNCwyNy41NSw4OS42MzYsMjcuNjU2LDg5LjM1OCwyNy42NTZ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="/>
              <div className="privacy-eye wander">
                <div className="front">
                  <div className="eyelid">
                    <div className="sclera">
                      <div className="iris">
                        <div className="pupil"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-container">
              Our security and privacy on the Internet are fundamental and must not be treated as optional. <a href="">Tell Congress to rein in mass surveillance, protect privacy, and keep us safe</a>.
            </div>
          </div>
        </Snippet>
      </div>
    );
  }
}

class Fundraising2016 extends React.Component {
  componentDidMount() {
    var btnDonate = document.querySelector(".button-link");

    if (this.props.backgroundImagef) {
      var body = document.querySelector("body");
      var imageLoader = body.querySelector(".heart-background-image-loader");
      var leftImages = imageLoader.querySelector(".heart-background-image-left-container");
      var rightImages = imageLoader.querySelector(".heart-background-image-right-container");
      var topSection = document.querySelector("#topSection");
      imageLoader.removeChild(leftImages);
      imageLoader.removeChild(rightImages);
      body.appendChild(leftImages);
      body.appendChild(rightImages);

      var heartRowHeight = 155;
      var heartColWidth = 170;
      var previousRows = 4;
      var previousCols = 4;

      function generateRow(numOfCols) {
        var rowElement = document.createElement("div");
        rowElement.classList.add("heart-background-row");
        rowElement.style.width = numOfCols * heartColWidth + "px";
        for (var i = 0; i < numOfCols; i++) {
          rowElement.appendChild(generateImg());
        }
        return rowElement;
      }

      function generateImg() {
        var image = document.createElement("img");
        image.src = this.props.backgroundImage;
        return image;
      }

      function generateHearts() {
        var clientHeight = document.documentElement.clientHeight;
        var numOfRows = Math.ceil(clientHeight / heartRowHeight);

        var colClientWidth = leftImages.clientWidth;
        var numOfCols = Math.ceil(colClientWidth / heartColWidth);

        if (previousCols < numOfCols) {
          [].forEach.call(document.querySelectorAll(".heart-background-row"), function(imageRow) {
            imageRow.style.width = numOfCols * heartColWidth + "px";
            for (var i = previousCols; i < numOfCols; i++) {
              imageRow.appendChild(generateImg());
            }
          });
        }

        for (var i = previousRows; i < numOfRows; i++) {
          leftImages.appendChild(generateRow(numOfCols));
          rightImages.appendChild(generateRow(numOfCols));
        }

        previousRows = numOfRows;
        previousCols = numOfCols;
      }

      generateHearts();
      window.addEventListener("resize", generateHearts);
    }

    var btnAmounts = document.querySelectorAll(".donation-amount");
    var btnSelected;
    var amount;

    var locale = "en-US";
    var currencyCode = "usd";

    var donationURL = btnDonate.attributes["href"].value;
    var delimiter = "?";
    if (donationURL.indexOf("?") >= 0) {
      delimiter = "&";
    }
    var dAmountFirst = "20";
    var dAmountSecond = "10";
    var dAmountThird = "5";
    var dAmountFourth = "3";
    var presets = [dAmountFirst, dAmountSecond, dAmountThird, dAmountFourth];

    var numberFormat = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0
    });
    var dAmountFirstEl = document.querySelector(".donation-amount-first");
    var dAmountSecondEl = document.querySelector(".donation-amount-second");
    var dAmountThirdEl = document.querySelector(".donation-amount-third");
    var dAmountFourthEl = document.querySelector(".donation-amount-fourth");

    dAmountFirstEl.textContent = numberFormat.format(dAmountFirst);
    dAmountSecondEl.textContent = numberFormat.format(dAmountSecond);
    dAmountThirdEl.textContent = numberFormat.format(dAmountThird);
    dAmountFourthEl.textContent = numberFormat.format(dAmountFourth);

    function selectAmount(element) {
      if (!element) {
        return;
      }
      element.classList.add("button-selected");
      if (btnSelected) {
        btnSelected.classList.remove("button-selected");
      }
      btnSelected = element;
      amount = element.attributes["data-amount"].value;
    }
    var selected = "donation-amount-second";
    selectAmount(document.querySelector("." + selected));

    var frequency = "single";

    var monthlyCheckbox = document.querySelector("#monthly-checkbox");
    function updateFrequency() {
      frequency = "single";
      if (monthlyCheckbox.checked) {
        frequency = "monthly";
      }
    }
    updateFrequency();
    monthlyCheckbox.addEventListener("change", function() {
      updateFrequency();
      updateLink();
    });

    function updateLink() {
      btnDonate.attributes["href"].value = donationURL + delimiter + "amount=" + amount + "&currency=" + currencyCode + "&presets=" + presets + "&frequency=" + frequency;
    }
    updateLink();

    for(var i=0; i<btnAmounts.length; i++) {
      btnAmounts[i].addEventListener("click", function (event) {
        if (!event.target.classList.contains("button-selected")) {
          selectAmount(event.target);
          updateLink();
        }
      });
    }

    if (this.props.backgroundImageAnimate && this.props.backgroundImage) {
      btnDonate.addEventListener("mouseenter", () => {
        [].forEach.call(document.querySelectorAll(".heart-background-row img"), (imageElement) => {
          imageElement.src = this.props.backgroundImageAnimate;
        });
      });
      btnDonate.addEventListener("mouseleave", () => {
        [].forEach.call(document.querySelectorAll(".heart-background-row img"), (imageElement) => {
          imageElement.src = this.props.backgroundImage;
        });
      });
    }

    var elHighlighted = document.querySelector('em');
    if (elHighlighted) {
        // Fade in highlight on text
        setTimeout(function() {
            elHighlighted.classList.add('active');
        }, 1000);
    }
  }

  render() {
    var icon = null;
    if (this.props.icon) {
      icon = (
        <img height="64" width="64" className="icon" src={this.props.icon} />
      );
    }
    var backgroundImage = null;
    if (this.props.backgroundImage) {
      let specialImage1 = this.props.specialImageFirst || this.props.backgroundImage;
      let specialImage2 = this.props.specialImageSecond || this.props.backgroundImage;
      let specialImage3 = this.props.specialImageThird || this.props.backgroundImage;
      let specialImage4 = this.props.specialImageFourth || this.props.backgroundImage;
      let specialImage5 = this.props.specialImageFifth || this.props.backgroundImage;

      backgroundImage = (
        <div className="heart-background-image-loader">
          <div className="heart-background-image-left-container">
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={specialImage1}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={this.props.backgroundImage}/>
              <img src={specialImage2}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
          </div>
          <div className="heart-background-image-right-container">
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={specialImage3}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={this.props.backgroundImage}/>
              <img src={specialImage4}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={this.props.backgroundImage}/>
              <img src={specialImage5}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
            <div className="heart-background-row" style={{width: "680px"}}>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
              <img src={this.props.backgroundImage}/>
            </div>
          </div>
        </div>
      );
    }

    var backgrondColor = this.props.background || "none";
    var fontColor = this.props.fontColor || "#3C3C3C";

    return (
      <div className="fundraising-2016" style={{background: backgrondColor}}>
        <Snippet>
          <div className="snippet" id="mofo-eoy-fundraiser">
            <div className="display-container">
              {icon}
              <p className="display-item" style={{color: fontColor}}>
                {this.props.children}
              </p>
            </div>
            <div className="donation-amounts">
              <button className="button donation-amount donation-amount-first" data-amount="20"></button>
              <button className="button donation-amount donation-amount-second" data-amount="10"></button>
              <button className="button donation-amount donation-amount-third" data-amount="5"></button>
              <button className="button donation-amount donation-amount-fourth" data-amount="3"></button>

              <a className="bottom-button-link button button-link" href="https://donate.mozilla.org/en-US/">
                Donate now
              </a>
            </div>
            <div className="monthly-checkbox-container">
              <input id="monthly-checkbox" className="monthly-checkbox" type="checkbox"/>
              <label for="monthly-checkbox" className="monthly-checkbox-label" style={{color: fontColor}}>
                Make my donation monthly
              </label>
            </div>
            {backgroundImage}
          </div>
        </Snippet>
      </div>
    );
  }
}

class Fundraising2015Spectacular1 extends React.Component {
  componentDidMount() {
    var body = document.querySelector("body");
    var foxContainer = document.querySelector(".fundraising-2015-spectacular-1");
    var btnDonate = document.querySelector('.donate-button');
    var donationURL = btnDonate.attributes['href'].value;

    var currencyCode = 'usd';

    // Element cache :

    var btnAmounts = document.querySelectorAll('.donation-amount');
    var btnSelected;
    var amount;
    var presets = '20,10,5,3';
    var numberFormat = new Intl.NumberFormat('en-US', {
      style:'currency',
      currency: currencyCode,
      minimumFractionDigits: 0
    });
    document.querySelector('.donation-amount-first').textContent = numberFormat.format('20');
    document.querySelector('.donation-amount-second').textContent = numberFormat.format('10');
    document.querySelector('.donation-amount-third').textContent = numberFormat.format('5');
    document.querySelector('.donation-amount-fourth').textContent = numberFormat.format('3');
    var elHighlighted = document.querySelector('em');
    var monthlyCheckbox = document.querySelector('#monthly-checkbox');
    var frequency = "";

    function updateFrequency() {
      frequency = "single";
      if (monthlyCheckbox.checked) {
        frequency = 'monthly';
      }
      updateLink();
    }
    updateFrequency();

    // View functions

    function selectAmount(element) {
      if (!element) {
        return;
      }
      element.classList.add('button-selected');
      if (btnSelected) {
        btnSelected.classList.remove('button-selected');
      }
      btnSelected = element;
      amount = element.attributes['data-amount'].value;
      updateLink();
    }

    var selected = "donation-amount-second";
    selectAmount(document.querySelector("." + selected));

    function updateLink() {
      btnDonate.attributes['href'].value = donationURL + '&amount=' + amount + "&frequency=" + frequency + "&currency=" + currencyCode + '&presets=' + presets;
    }
    updateLink();

    // Event binding :

    for(var i=0; i<btnAmounts.length; i++) {
      btnAmounts[i].addEventListener('click', function (event) {
        if (!event.target.classList.contains('button-selected')) {
          selectAmount(event.target);
        }
      });
    }
    monthlyCheckbox.addEventListener('change', updateFrequency);

    btnDonate.addEventListener('click', function (event) {
      btnDonate.blur();
    });

    // Fade in highlight on text
    setTimeout(function() {
      if (elHighlighted) {
        elHighlighted.classList.add('active');
      }
    }, 1000);
  }

  render() {
    return (
      <div className="fundraising-2015-spectacular fundraising-2015-spectacular-1">
        <Snippet>
          <div className="main-wrapper">
            <div className="background-container">
              <div className="body-text">
                HELLO there: We know you love Firefox, but did you know a non-profit called Mozilla built Firefox? Thanks to donations, Mozilla does a lot more than build this awesome browser. We teach people to code, fight for online privacy, and protect this amazing thing called the Web for future generations. Just a few times a year Mozilla asks for donations, and usually only a tiny portion of Firefox users give. <b>If everyone reading this chipped in $3 to help Mozilla, we could wrap this fundraiser up in under an hour and keep our work going another year.</b> <i>Thank you.</i>
              </div>
              <div className="arrow-side left"></div>
              <div className="arrow-side right"></div>
            </div>
          </div>

          <div className="donation-container">
            <div className="donation-amounts">
              <button className="button donation-amount donation-amount-first" data-amount="20"></button>
              <button className="button donation-amount donation-amount-second" data-amount="10"></button>
              <button className="button donation-amount donation-amount-third" data-amount="5"></button>
              <button className="button donation-amount donation-amount-fourth" data-amount="3"></button>

              <a className="button button-red button-wide donate-button" href="https://donate.mozilla.org/en-US/">
                Donate now
              </a>
            </div>
            <div className="monthly-checkbox-container">
              <input id="monthly-checkbox" className="monthly-checkbox" type="checkbox"/>
              <label for="monthly-checkbox" className="monthly-checkbox-label">
                Make my donation monthly
              </label>
            </div>
          </div>
        </Snippet>
      </div>
    );
  }
}

class Fundraising2015 extends React.Component {
  componentDidMount() {
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
      <div className="fundraising-2015">
        <Snippet>
          <p>
            <b>Dear Firefox users:</b> Mozilla puts the public good and user privacy before profit. If Firefox is useful to you, take one minute to support the non-profit behind it. <em>If everyone reading this donates $3, Mozilla’s fundraiser would be over within an hour.</em> <i>Thank you.</i>
          </p>

          <div className="background-container">

            <div className="donation-amounts">
              <button className="button donation-amount donation-amount-first" data-amount="20"></button>
              <button className="button donation-amount donation-amount-second" data-amount="10"></button>
              <button className="button donation-amount donation-amount-third" data-amount="5"></button>
              <button className="button donation-amount donation-amount-fourth" data-amount="3"></button>

              <a className="button button-red button-wide donate-button" href="https://donnate.mozilla.org/en-US/">
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

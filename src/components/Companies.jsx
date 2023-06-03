import amazon from "../assets/company-logos/amazon.svg";
import jeep from "../assets/company-logos/jeep.svg"
import careem from "../assets/company-logos/careem.svg";
import hubspot from "../assets/company-logos/HubSpot.svg";
import jquery from "../assets/company-logos/jquery.svg";
import canon from "../assets/company-logos/canon.svg";
import fedex from "../assets/company-logos/fedex.svg";
import bitcoin from "../assets/company-logos/bitcoin.svg";
import pirelli from "../assets/company-logos/pirelli.svg";
import philips from "../assets/company-logos/philips.svg";


function Companies() {
  return (
    <section id="companies">
      <div className="container">
        <div className="row">
          <h3 className="section__sub-title">Some of our Great Customers</h3>
          <h2 className="section__title">
            Some of the companies we have worked with
          </h2>
          <div className="companies__logo--container">
            <figure className="company__logo--wrapper">
              <img src={amazon} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={jeep} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={careem} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={hubspot} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={jquery} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={canon} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={fedex} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={bitcoin} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={pirelli} alt="" className="company__logo" />
            </figure>
            <figure className="company__logo--wrapper">
              <img src={philips} alt="" className="company__logo" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;

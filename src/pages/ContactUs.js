import React from "react";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Categorypop from "../components/Categorypop";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Categorypop />

      <div className="contact f-jc-sb">
        <div>
          <h2>Contact Us</h2>

          <h3>HEAD OFFICE</h3>
          <p>Nº 384 Ikorodu Road Ojota,</p>
          <p>Block 14 Suite 14, Odua Shopping Complex</p>
          <p>Ojota Lagos</p>
          <p>Nigeria.</p>
          <p>WhatsApp: +2349169365132</p>
          <p>Help Lines+2349023942199, +2349150696074</p>
          <p>Regional Offices</p>
          <br />
          <br />
          <p>FRANCE: +33745440860</p>
          <p>USA / CANADA: +18624524722</p>
          <p>UK: +447534971578</p>
          <p>SOUTH AFRICA: +27681608766, +277734051654</p>
          <p>SPAIN: +34627252367, +34666165169</p>
          <p>SENEGAL: +221777137940, +221775034698</p>
          <p>GHANA: +233548385608</p>
          <p>IVORY COAST: +2250759888339 , +2250777444150</p>
        </div>

        <form>
          <h2>Your Feedback</h2>
          <input name="email" type="email" placeholder="your email" required />

          <textarea
            name="feedback"
            type="text"
            placeholder="submit your feedbacks"
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

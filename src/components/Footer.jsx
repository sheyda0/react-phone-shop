import FooterCol from "./FooterCol";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer>
        <div className="row">
          <div className="col-12 col-md-9">
            <h6 className="pb-3 title">QUICKLINKS</h6>
            <div className="row">
              <FooterCol item1="Mobile Phone" item2="Tablet" item3="Smart Watch" item4="Accessories"/>
              <FooterCol item1="Laptop" item2="Earphone" item3="Power Bank" item4="Adapter"/>
              <FooterCol item1="Play Station" item2="Bluetooth Spaeker" item3="News" item4="Contact us"/>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="pb-2 title">FOLLOW US</h6>
            <div className="col footer-social">
              <FooterSocial src="/images/facebook-logo-1641009662XJajT.png" text="Facebook" />
              <FooterSocial src="/images/instagram-logo-16410096632yYmQ.png" text="Instagram" />
              <FooterSocial src="/images/telegram-logo-1641009664I2vu6.png" text="Telegram" />
            </div>
          </div>
        </div>
    </footer>
  )
}

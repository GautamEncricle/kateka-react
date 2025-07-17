import logo from "../assets/images/menu-logo.svg";
import linkArrow from "../assets/images/link-arrow.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";

export default function Footer() {
  return (
    <footer className="footer pb-30">
      <div className="container-fluid">
        <div className="newsletter bg-olive py-70">
          <div className="text-center">
            <h5 className="text-white">join our newsletter</h5>
            <p className="text-white pt-10">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="footer-btm bg-black2 px-65 pb-40">
          <div className="flex justify-between py-60 border-b border-white">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="Kateka" width="164" height="48" />
              </a>
            </div>
            <h6 className="text-white text-center max-w-436">
              Bespoke luxury lodge where wellness meets wilderness
            </h6>
            <div className="flex items-center gap-x-20">
              <a href="#" className="btn btn-link btn-link-white">
                <span>
                  <img src={linkArrow} alt="Arrow" width="16" height="14" />
                </span>{" "}
                ENQUIRE NOW
              </a>
              <a href="#" className="btn btn-white">
                Book Now
              </a>
            </div>
          </div>
          <div className="footer-navbar pt-80 flex flex-col items-center gap-y-10">
            <ul className="flex flex-wrap justify-center gap-x-24">
              {[
                "HOME",
                "STAY",
                "SAFARI",
                "WELLNESS",
                "EXPERIENCES",
                "OFFERS",
              ].map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap justify-center gap-x-24">
              {[
                "ABOUT US",
                "DINING",
                "CONSERVATION",
                "FACILITIES",
                "LOCATION",
                "BLOG",
                "RATES",
                "GALLERY",
              ].map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            <div className="sicon flex gap-x-30 mt-20">
              <a href="#">
                <img src={facebook} alt="Facebook" width="24" height="24" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" width="24" height="24" />
              </a>
            </div>
          </div>
          <div className="text-white flex justify-between pt-40 pb-20 border-t border-white">
            <p>© 2025 Kateka. All rights reserved.</p>
            <ul className="flex gap-x-20">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

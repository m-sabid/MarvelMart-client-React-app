import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook size={24} />, url: "#" },
    { icon: <FaTwitter size={24} />, url: "#" },
    { icon: <FaInstagram size={24} />, url: "#" },
    { icon: <FaLinkedin size={24} />, url: "#" },
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((link, index) => (
      <a
        key={index}
        href={link.url}
        className="text-gray-900 hover:text-accent1 mr-4"
      >
        {link.icon}
      </a>
    ));
  };

  return (
    <footer className="bg-primary py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-8">
        <div className="text-center">
          <img
            src="https://i.ibb.co/HGrY9hN/321563816-2370449856443123-4609861830021339838-n-removebg-preview.png"
            alt="Marvel Logo"
            className="mx-auto "
          />
          <h3 className="text-2xl font-bold border-b-2 py-3">MarvelMart</h3>
          <h3 className="text-justify">
            "Heroes are made by the path they choose, not by the powers they are
            graced with. <b> - Captain America </b>"
          </h3>
        </div>
        <div className="text-center border-l-emerald-800 border-l-2">
          <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
            About Us
          </h4>
          <p className="text-gray-900">
            Welcome to Toylandia, your one-stop shop for all things toys and
            playtime.
          </p>
        </div>
        <div className="text-center border-l-emerald-800 border-l-2">
          <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
            Contact Us
          </h4>
          <p className="text-gray-900">Email: info@toylandia.com</p>
          <p className="text-gray-900">Phone: 123-456-7890</p>
        </div>
        <div className="text-center border-l-emerald-800 border-l-2">
          <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
            Short Links
          </h4>
          <ul className="text-gray-900">
            <li>
              <a href="#" className="hover:text-accent1">
                Shipping &amp; Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent1">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent1">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center border-l-emerald-800 border-l-2">
          <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
            Follow Us
          </h4>
          <div className="flex items-center justify-center">
            {renderSocialLinks()}
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center mx-auto">
        © [2023] <strong> MarvelMart. </strong> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

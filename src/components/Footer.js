function Footer() {
  return (
    <footer id="about"className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-1 me-2">🍰</span>
              <h2 className="fw-bold mb-0">SweetDelight</h2>
            </div>
            <p className="text-light-emphasis">
              Handcrafted cakes made with premium ingredients and lots of love. 
              Making every celebration sweeter since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-6 mb-4">
            <h5 className="fw-bold mb-3">Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Birthday Cakes</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Wedding Cakes</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Cupcakes</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Custom Orders</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 col-6 mb-4">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Our Story</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Get In Touch</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                📍 123 Cake Street, Sweet City, SC 12345
              </li>
              <li className="mb-2">
                📞 +1 (555) 123-CAKE
              </li>
              <li className="mb-2">
                ✉️ hello@sweetdelight.com
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-4">
              <h6 className="fw-bold mb-3">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-white fs-4 hover-gold">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white fs-4 hover-gold">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white fs-4 hover-gold">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        {/* Bottom Bar */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50 small">
              © 2026 SweetDelight. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white-50 text-decoration-none me-3 small">Privacy Policy</a>
            <a href="#" className="text-white-50 text-decoration-none small">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
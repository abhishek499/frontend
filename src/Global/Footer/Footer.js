import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tirupati Travels</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                quae quidem voluptatem vero temporibus. Consequuntur nisi a
                architecto expedita inventore perferendis ratione aliquid
                dolores? Excepturi, sint similique. Ipsum, harum quia?
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tourism Packages</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Experience Hinduism
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Kashi Darshan
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Pind Dan
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Honeymoon
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  About us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Legal
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Contact
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Privacy Policy
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MdLocationOn size="1.2em" color="#e8604c" /> New York, NY
                10012, US
              </p>
              <p>
                <AiFillMail size="1.2em" color="#e8604c" /> info@example.com
              </p>
              <p>
                <BsFillTelephoneFill color="#e8604c" /> +91 9958623875
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <form action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example21" class="form-control" />
                <label class="form-label" for="form5Example21">
                  Email address
                </label>
              </div>
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* <div
        className="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05);"
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;

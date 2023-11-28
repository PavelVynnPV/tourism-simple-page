import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/Footer.css";

gsap.registerPlugin(ScrollTrigger);

class Footer extends PureComponent {

  constructor() {
    super()
    this.footerLeftGasp = React.createRef();
    this.footerRightGasp = React.createRef();
  }

  componentDidMount() {
    this.gaspAnimationForFooter()
  }

  gaspAnimationForFooter() {
    gsap.to(this.footerLeftGasp.current, {
      opacity: 0,
      y: 30,
      ease: "power3.out",
    });

    ScrollTrigger.create({
        trigger: this.footerLeftGasp.current,
        start: "top 100%",
        onEnter: () => {
          gsap.to(this.footerLeftGasp.current, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1.2,
          });
        },
      });

      gsap.to(this.footerRightGasp.current, {
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });
  
      ScrollTrigger.create({
          trigger: this.footerRightGasp.current,
          start: "top 100%",
          onEnter: () => {
            gsap.to(this.footerRightGasp.current, {
              opacity: 1,
              y: 0,
              ease: "power3.out",
              duration: 1.2,
              delay: 0.2
            });
          },
        });
  }



  render() {
    return (
      <footer>
        <div class="footer__container">
          <div class="footer__top">
            <div class="footer__connect" ref={this.footerLeftGasp}>
              <h3 class="connect__title">Connect with us</h3>
              <span class="connect__under_title">SOCIAL MEDIA CHANNELS</span>
              <ul class="connect__social_links">
                <li class="connect__link facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li class="connect__link github">
                  <FontAwesomeIcon icon={faTelegram} />
                </li>
                <li class="connect__link telegram">
                  <FontAwesomeIcon icon={faGithub} />
                </li>
              </ul>
            </div>
            <div class="footer__sign_privacy" ref={this.footerRightGasp}>
              <h3 class="connect__title">Newsletter sign up</h3>
              <span class="connect__under_title">
                SIGN UP FOR SPECIAL OFFERS
              </span>
              <form>
                <input type="email" name="email" class="footer__email" placeholder="Enter your email"/>
                <input type="submit" class="submit_btn" value={" "}/>
              </form>
              <p class="footer_privacy">
                By submitting this form, I agree to having my personal and
                contact information processed and used for the purpose of
                marketing communications. More details about our Privacy policy
                can be found at the following link: Privacy Policy. You can
                unsubscribe from these at any time – just click on the
                "Unsubscribe" link included in each newsletter.
              </p>
            </div>
          </div>
          <ul class="footer__bottom_links">
            <Link to="/"><li class="footer__bottom_link">ABOUT US</li></Link>
             <Link to="/"><li class="footer__bottom_link">sponsorsship and donations</li></Link>
             <Link to="/"><li class="footer__bottom_link">media</li></Link>
             <Link to="/"><li class="footer__bottom_link">careers</li></Link>
             <Link to="/"><li class="footer__bottom_link">contact list</li></Link>
             <Link to="/"><li class="footer__bottom_link">privacy and cookies</li></Link>
             <Link to="/"><li class="footer__bottom_link">sustainability</li></Link>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;

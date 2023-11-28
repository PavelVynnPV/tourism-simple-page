import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { gsapBannerAnimation, gsapHotelsAnimation, gsapOfferAnimation } from "./MainGaspComp";

import "../styles/Main.css";


class MainPage extends PureComponent {
  constructor() {
    super();
    this.about_title = React.createRef();
    this.about_info = React.createRef();
    this.hotelText = React.createRef();
    this.hotelImage = React.createRef();
    this.hotelText2 = React.createRef();
    this.hotelImage2 = React.createRef();
    this.offer1 = React.createRef();
    this.offer2 = React.createRef();
    this.offer3 = React.createRef();
  }

  componentDidMount() {
    gsapBannerAnimation(this.about_title, this.about_info);
    gsapHotelsAnimation(
      this.hotelText,
      this.hotelImage,
      this.hotelText2,
      this.hotelImage2
    );
    gsapOfferAnimation(this.offer1, this.offer2, this.offer3)
  }

  render() {
    return (
      <>
        <section class="about_hotel">
          <div class="about__content">
            <h3 class="about__title_info" ref={this.about_title}>
              Breathtaking Adriatic views from every room, a fresh new
              contemporary interior design scheme and intuitive service are all
              ingredients for a perfect five-star seaside escape at the multi
              award-winning Hotel Dubrovnik Palace.
            </h3>
            <div class="about__list_info" ref={this.about_info}>
              <div class="about__info_block">
                <p class="about__info_text">
                  Hotel Dubrovnik Palace nestles on the scenic seafront between
                  a pine forest and the turquoise coastal waters of the lush
                  Lapad peninsula. Just a few minutes’ drive north west of
                  medieval Dubrovnik Old Town, the stunning location offers
                  phenomenal photo opportunities of the Elafiti Islands from
                  every direction.
                  <Link to="/" class="about__details_link">
                    Hotel details
                    <span class="about__icon_arrow"></span>
                  </Link>
                </p>
                <p class="about__info_text">
                  Our contemporary luxury resort has direct access to a quiet
                  and peaceful beach, two outdoor pools plus a third indoor
                  pool. Additionally, we have a PADI diving centre, tennis
                  court, and a leafy jogging path and walking routes through the
                  picturesque woods that rise up Petka hill behind the hotel.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="hotels_info_section">
          <div class="hotel__info">
            <div class="hotel__text" ref={this.hotelText}>
              <span class="hotel__title">DUBROVNICHEK</span>
              <p class="hotel__under_title_text">
                Poised on the Dalmatian coast overlooking the astonishingly
                clear blue waters of the Adriatic, Dubrovnik is one of the
                world’s most magnificent walled cities. Known as the Pearl of
                the Adriatic It lies to the extreme south of Croatia, basking in
                glorious Mediterranean sunshine for much of the year.
              </p>
              <Link to="/" class="about__details_link">
                MORE ABOUT DUBROVNICHEK <span class="about__icon_arrow"></span>
              </Link>
            </div>
            <span class="hotel__image" ref={this.hotelImage}></span>
          </div>
          <div class="hotel__info reverse">
            <div class="hotel__text" ref={this.hotelText2}>
              <span class="hotel__title">DUBROVNICHEK</span>
              <p class="hotel__under_title_text">
                Poised on the Dalmatian coast overlooking the astonishingly
                clear blue waters of the Adriatic, Dubrovnik is one of the
                world’s most magnificent walled cities. Known as the Pearl of
                the Adriatic It lies to the extreme south of Croatia, basking in
                glorious Mediterranean sunshine for much of the year.
              </p>
              <Link to="/" class="about__details_link">
                MORE ABOUT DUBROVNICHEK <span class="about__icon_arrow"></span>
              </Link>
            </div>
            <span class="hotel__image" ref={this.hotelImage2}></span>
          </div>
        </div>

        <section class="spec_offers">
            <div class="offers__content">
                <Link class="offer" ref={this.offer1}>
                    <span class="offer__img"></span>
                    <p class="offer__title">Lorem ipsum</p>
                    <span class="about__icon_arrow"></span>
                </Link>
                <Link class="offer" ref={this.offer2}>
                    <span class="offer__img"></span>
                    <p class="offer__title">Lorem ipsum</p>
                    <span class="about__icon_arrow"></span>
                </Link>
                <Link class="offer" ref={this.offer3}>
                    <span class="offer__img"></span>
                    <p class="offer__title">Lorem ipsum</p>
                    <span class="about__icon_arrow"></span>
                </Link>
            </div>
        </section>
      </>
    );
  }
}

export default MainPage;

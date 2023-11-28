import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const gsapBannerAnimation = (about_title, about_info) => {

  // TITLE BANNER ANIMATION
    gsap.to(about_title.current, {
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });

    ScrollTrigger.create({
        trigger: about_title.current,
        start: "top 100%", // Анімація почнеться, коли 80% блоку буде видно
        onEnter: () => {
          gsap.to(about_title.current, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1.5,
          });
        },
      });
      /////////

      // UNDER BUNNER INFO ANUMATION

      gsap.to(about_info.current, {
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });

      ScrollTrigger.create({
          trigger: about_info.current,
          start: "top 100%",
          onEnter: () => {
            gsap.to(about_info.current, {
              opacity: 1,
              y: 0,
              ease: "power3.out",
              duration: 1.5,
            });
          },
        });
        ///////

}

export const gsapHotelsAnimation = (hotelText, hotelImage, hotelText2, hotelImage2) => {
  
        // INFO HOTELS ANIMATION

        gsap.to(hotelText.current, {
          opacity: 0,
          y: 30,
          ease: "power3.out",
          x: 0
        });
  
        ScrollTrigger.create({
            trigger: hotelText.current,
            start: "top 100%",
            onEnter: () => {
              gsap.to(hotelText.current, {
                opacity: 1,
                y: 0,
                x: 0,
                ease: "power3.out",
                duration: 1.5,
              });
            },
          });

          gsap.to(hotelImage.current, {
            opacity: 0,
            y: 30,
            ease: "power3.out",
            x: 50
          });
    
          ScrollTrigger.create({
              trigger: hotelImage.current,
              start: "top 100%",
              onEnter: () => {
                gsap.to(hotelImage.current, {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  ease: "power3.out",
                  duration: 1.5,
                });
              },
            });

            // ANOTHER HOTELS ANIM

            gsap.to(hotelImage2.current, {
              opacity: 0,
              y: 30,
              ease: "power3.out",
              x: -70
            });
      
            ScrollTrigger.create({
                trigger: hotelImage2.current,
                start: "top 100%",
                onEnter: () => {
                  gsap.to(hotelImage2.current, {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    ease: "power3.out",
                    duration: 1.5,
                  });
                },
              });
    
              gsap.to(hotelText2.current, {
                opacity: 0,
                y: 30,
                ease: "power3.out",
                x: 200
              });
        
              ScrollTrigger.create({
                  trigger: hotelText2.current,
                  start: "top 90%",
                  onEnter: () => {
                    gsap.to(hotelText2.current, {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      ease: "power3.out",
                      duration: 1.5,
                    });
                  },
                });
  
        
}

export const gsapOfferAnimation = (offer1, offer2, offer3) => {
  gsap.to(offer1.current, {
    opacity: 0,
    y: 100,
    ease: "power3.out",
  });

  ScrollTrigger.create({
      trigger: offer1.current,
      start: "top 100%",
      onEnter: () => {
        gsap.to(offer1.current, {
          opacity: 1,
          y: 0,
          x: 0,
          ease: "power3.out",
          duration: 1.5,
        });
      },
    });

    gsap.to(offer2.current, {
      opacity: 0,
      y: 100,
      ease: "power3.out",
    });
  
    ScrollTrigger.create({
        trigger: offer2.current,
        start: "top 100%",
        onEnter: () => {
          gsap.to(offer2.current, {
            opacity: 1,
            y: 0,
            x: 0,
            ease: "power3.out",
            duration: 1.5,
            delay: 0.2
          });
        },
      });

      gsap.to(offer3.current, {
        opacity: 0,
        y: 100,
        ease: "power3.out",
      });
    
      ScrollTrigger.create({
          trigger: offer3.current,
          start: "top 100%",
          onEnter: () => {
            gsap.to(offer3.current, {
              opacity: 1,
              y: 0,
              x: 0,
              ease: "power3.out",
              duration: 1.5,
              delay: 0.4
            });
          },
        });

}
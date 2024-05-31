/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from "react";
import { jsx, Box, Container, Image } from "theme-ui";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "components/section-heading";
import TeamMember from "components/cards/team-member";

import aws from "assets/images/team/aws.png";
import css from "assets/images/team/css.png";
import express from "assets/images/team/express.png";
import firebase from "assets/images/team/aws.png";
import flutter from "assets/images/team/flutter.png";
import google from "assets/images/team/google.png";
import html from "assets/images/team/html.png";
import javascript from "assets/images/team/javascript.png";
import laravel from "assets/images/team/laravel.png";
import mongo from "assets/images/team/mongo.png";
import net from "assets/images/team/net.png";
import postgres from "assets/images/team/postgres.png";
import python from "assets/images/team/python.png";
import react from "assets/images/team/react.png";
import redux from "assets/images/team/redux.png";
import sql from "assets/images/team/sql.png";
import typescript from "assets/images/team/typescript.png";
import vue from "assets/images/team/vue.png";
import arrowRight from "assets/images/icons/arrow-right.png";

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    logo: google,
  },
  {
    id: 2,
    logo: postgres,
  },
  {
    id: 3,
    logo: express,
  },
  {
    id: 4,
    logo: react,
  },
  {
    id: 5,
    logo: flutter,
  },
  {
    id: 6,
    logo: aws,
  },
  {
    id: 7,
    logo: mongo,
  },
  {
    id: 8,
    logo: laravel,
  },
  {
    id: 9,
    logo: vue,
  },
  {
    id: 10,
    logo: python,
  },
  {
    id: 11,
    logo: firebase,
  },
  {
    id: 12,
    logo: sql,
  },
  {
    id: 13,
    logo: net,
  },
  {
    id: 14,
    logo: redux,
  },
  {
    id: 15,
    logo: typescript,
  },
  {
    id: 16,
    logo: javascript,
  },
  {
    id: 17,
    logo: html,
  },
  {
    id: 18,
    logo: css,
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Tecnologías"
          description="Estas son algunas de las tecnologías con las que realizamos tus desarrollos a la medida."
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: "10px auto 0",
    },
  },
  teamWrapper: {
    position: "relative",
    pl: [6],
    pr: [6, null, null, 0],
    transition: "0.3s ease-in-out 0s",
    ".swiper-arrow": {
      backgroundColor: "#fff",
      border: 0,
      cursor: "pointer",
      padding: 0,
      display: "flex",
      width: [30, null, null, null, 30, 40],
      height: [30, null, null, null, 30, 40],
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 7px 14px rgba(25, 60, 101, 0.06)",
      borderRadius: "50%",
      position: "absolute",
      zIndex: 2,
      top: "calc(50%)",
      transform: "translateY(-50%)",
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, "100%"],
      },
    },
    ".swiper-arrow-left": {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: "rotate(180deg)",
        marginLeft: "-4px",
      },
    },
    ".swiper-arrow-right": {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: "-4px",
      },
    },
  },
};

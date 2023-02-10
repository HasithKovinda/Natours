import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/TourDetails/Hero";
import { getSingleTour } from "../features/tour/tourSlice";
import { useDispatch, useSelector } from "react-redux";
import { Gallery } from "../components/TourDetails/Gallery";
import About from "../components/TourDetails/About";
import { Location } from "../components/TourDetails/Location";
import Review from "../components/TourDetails/Review";
import BookTour from "../components/TourDetails/BookTour";

const Tour = () => {
  const { tourId } = useParams();

  const { isLoading, tour } = useSelector((store) => store.tour);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleTour(tourId));
  }, [tourId, dispatch]);

  /* -------------------------------------------------------------------------- */
  /*             useLayoutEffect hook run before the useEffect hook             */
  /* -------------------------------------------------------------------------- */

  if (isLoading) return;

  return (
    <>
      <Hero {...tour} />
      <About {...tour} />
      <Gallery {...tour} />
      <Location {...tour} />
      <Review {...tour} />
      <BookTour {...tour} />
    </>
  );
};

export default Tour;

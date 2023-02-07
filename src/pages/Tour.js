import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AboutTD } from "../components/TourDetails/AboutTD";
import Hero from "../components/TourDetails/Hero";
import { getSingleTour } from "../features/tour/tourSlice";
import { useDispatch, useSelector } from "react-redux";
import { Gallery } from "../components/TourDetails/Gallery";

const Tour = () => {
  const { tourId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, tour } = useSelector((store) => store.tour);

  useEffect(() => {
    dispatch(getSingleTour(tourId));
  }, [dispatch, tourId]);

  if (isLoading) return <h1>Lodging.....</h1>;

  return (
    <>
      <Hero {...tour} />
      <AboutTD {...tour} />
      <Gallery {...tour} />
    </>
  );
};

export default Tour;

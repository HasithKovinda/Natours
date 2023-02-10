import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AboutTD } from "../components/TourDetails/AboutTD";
import Hero from "../components/TourDetails/Hero";
// import { getSingleTour } from "../features/tour/tourSlice";
// import { useDispatch, useSelector } from "react-redux";
import { Gallery } from "../components/TourDetails/Gallery";
import customFetch from "../utils/axios";

const Tour = () => {
  const { tourId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [tour, setTOurs] = useState({});

  // const dispatch = useDispatch();
  // const { isLoading, tour } = useSelector((store) => store.tour);

  const getTour = async () => {
    console.log("fsdfdsf");
    setLoading(true);
    const res = await customFetch.get(`/tours/${tourId}`);
    setLoading(false);
    console.log(res.data.data.data);
    setTOurs(res.data.data.data);
  };

  useLayoutEffect(() => {
    getTour();
  }, []);

  // useEffect(() => {

  // }, [tourId]);

  if (isLoading) return <h1>Lodging.....</h1>;

  return (
    <>
      <Hero {...tour} />
      {/* <AboutTD {...tour} /> */}
      <Gallery {...tour} />
    </>
  );
};

export default Tour;

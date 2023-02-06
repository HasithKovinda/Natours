import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/TourDetails/Hero";
import customFetch from "./../utils/axios";

const Tour = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState({});
  const getSingleTour = async () => {
    console.log("called");
    const res = await customFetch.get(`/tours/${tourId}`);
    setTour(res.data.data);
    const { data } = res.data.data;
    setTour(data);
  };
  useEffect(() => {
    getSingleTour();
  }, []);
  return (
    <>
      <Hero {...tour} />
    </>
  );
};

export default Tour;

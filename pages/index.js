import Head from "next/head";
import { SliderSection } from "../components/Slider";
import { SliderRows } from "../components/SliderRow";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [sliderMedia, setsliderMedia] = useState(null);
  const [rowMedia, setrowMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://ullu.app/ulluCore/api/v2/media/fetchAllMediaSlider")
      .then((data) => {
        setsliderMedia(data.data);
      })
      .then(
        axios
          .get(
            "https://ullu.app/ulluCore/api/v2/media/getHomeScreenMediaContentPopularAndUICategory"
          )
          .then((data) => {
            setrowMedia(data.data);
            setLoading(false);
          })
      );
  }, []);

  if (loading) {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body ">
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-centered bounce">🚀 </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero ">
        <div className="hero-body">
          <SliderSection media={sliderMedia} />
        </div>
      </section>
      <section className="hero">
        <div className="hero-body">
          <SliderRows media={rowMedia} />
        </div>
      </section>
    </div>
  );
}

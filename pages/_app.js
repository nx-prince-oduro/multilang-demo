import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Card from "../components/Card";
import ShopBanner from "../components/ShopBanner";
import Global from "../components/Global";
import Solutions from "../components/Solutions";
import Footer from "../components/Footer";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  navbar: Navbar,
  hero: Hero,
  socialProof: SocialProof,
  cards: Card,
  banner: ShopBanner,
  global: Global,
  solutions: Solutions,
  footer: Footer,
};

storyblokInit({
  accessToken: "krSXuG49Bde9vArs1L0hOgtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

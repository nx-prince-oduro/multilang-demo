import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../components/Layout";
import main from "../utils/exportContext";

export default function Home({ story, locale, locales, defaultLocale }) {
  story = useStoryblokState(story, {
    customParent: "http://localhost:3000/",
    language: locale,
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>{/* <h1>{story ? story.name : "My Site"}</h1> */}</header>
      <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}>
        <StoryblokComponent
          blok={story.content}
          locale={locale}
          locales={locales}
          defaultLocale={defaultLocale}
        />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locale, locales, defaultLocale }) {
  let slug = "home";
  let loc = locale;

  let sbParams = {
    version: "draft", // or 'published'
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${loc}/${slug}`, sbParams);

  return {
    props: {
      defaultLocale,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      locale,
      locales,
    },
    revalidate: 3600,
  };
}

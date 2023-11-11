import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Abd Midani | Welcome</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Abd Midani | Welcome" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Abd Midani | Welcome" />
        <meta
          name="description"
          content="Experienced developer and problem-solving with a demonstrated history of working in the software engineering industry."
        />
        <meta property="og:title" content="Abd Midani | Welcome" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://aboodmidani.github.io/" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/codiay/Me/hero-bg_Q_UZ2bna_.jpg"
        />
        <meta
          property="og:description"
          content="Experienced developer and problem-solving with a demonstrated history of working in the software engineering industry."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Abd Midani | Welcome" />
        <meta
          name="twitter:description"
          content="Experienced developer and problem-solving with a demonstrated history of working in the software engineering industry."
        />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/codiay/Me/hero-bg_Q_UZ2bna_.jpg"
        />

        {/* <meta itemprop="name" content="Abd Midani | Welcome"/>
        <meta itemprop="description" content="Experienced developer and problem-solving with a demonstrated history of working in the software engineering industry."/>
        <meta itemprop="image" content="https://ik.imagekit.io/codiay/Me/hero-bg_Q_UZ2bna_.jpg"/> */}
      </Head>
      <Home />
    </>
  );
}

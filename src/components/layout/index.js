import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import { Toaster } from "react-hot-toast";
import { useLoadingWithRefresh } from "hooks/useLoadingWithRefresh";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const { loading } = useLoadingWithRefresh();

  const path = router.pathname;

  return loading ? (
    <Loader />
  ) : (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <title>Skill Swap - Track your YouTube Learning</title>
        <meta name="title" content="Skill Swap - Track your YouTube Learning" />
        <meta
          name="description"
          content="Skill Swap provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in Build-in public and Proof of Work."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.learnbloom.tech/" />
        <meta
          property="og:title"
          content="Skill Swap - Track your YouTube Learning"
        />
        <meta
          property="og:description"
          content="Skill Swap provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in Build-in public and Proof of Work."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/mukulrajpoot/image/upload/c_thumb,w_200,g_face/v1656417503/Untitled_design_2_v7ficz.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.learnbloom.tech/" />
        <meta
          property="twitter:title"
          content="Skill Swap - Track your YouTube Learning"
        />
        <meta
          property="twitter:description"
          content="Skill Swap provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in Build-in public and Proof of Work."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/mukulrajpoot/image/upload/c_thumb,w_200,g_face/v1656417503/Untitled_design_2_v7ficz.png"
        />
      </Head>
      {!path.includes("auth") && <Navbar />}
      <main className="w-11/12 min-h-screen mx-auto lg:w-10/12">
        {children}
      </main>
      <Toaster />
      {!path.includes("auth") && <Footer />}
    </>
  );
};

export default Layout;

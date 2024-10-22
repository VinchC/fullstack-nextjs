import { FeatureCard } from "@/component/FeatureCard";
import { features } from "@/data";
import Head from "next/head";
import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs Fullstack Training</title>
        <meta
          name="description"
          content="An app to work with Next, React, Typescript and Tailwind."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="hero">
          <div className="hero-content flex-col md:flex-row">
            <Image
              src="/MainAfter.jpg"
              alt="chameleon"
              width={1280}
              height={720}
              className="w-full max-md:w-1/2 max-w-lg"
            />
            <div className="w-full max-md:w-1/2">
              <h1 className="text-5xl font-bold py-3">Primary title</h1>
              <h2 className="text-xl pb-3">Secondary title</h2>
              <button>
                <span className="btn btn-primary">Learn more</span>
              </button>
            </div>
          </div>
        </section>

        <section className="text-center mt-4">
          <h3 className="text-xl pb-3">Features</h3>
          <div className="flex w-full md:justify-around flex-col md:flex-row">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                picture={feature.picture}
                description={feature.description}
                className="w-full md:w-1/4"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

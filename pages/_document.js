import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Admin Panel for SpeakerOre" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="googlebot" content="noindex" />
        <meta name="robots" content="noindex" />
      </Head>
      <body className="bg-black text-gray-100 px-3">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html data-nu-prevent>
        <Head>
          <script
            src="https://cdn.jsdelivr.net/npm/numl@1.0.0-beta.10/dist/index.js"
            type="module"
          />
          <style dangerouslySetInnerHTML={{
            __html: `:not(:defined) {visibility: hidden;}`
          }}/>
          <link rel="preload" href="/vercel.svg" as="image"/>
          <link rel="preload" href="/numl.svg" as="image"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  };
}

export default MyDocument;

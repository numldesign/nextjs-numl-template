import Head from 'next/head';
import Root from '../components/Root';

export default function Home() {
  return (
    <Root>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <nu-theme hue="272"/>

      <nu-main display="flex" gap="2x" items="center">
        <nu-h1>
          Welcome to <nu-link to="!https://nextjs.org">Next.js!</nu-link>
        </nu-h1>

        <nu-block size="lg">
          Get started by editing <code>pages/index.js</code>
        </nu-block>

        <nu-grid columns="1pr 1pr" gap="2x 3x">
          <nu-cardbtn to="!https://nextjs.org/docs">
            <nu-h3>Documentation &rarr;</nu-h3>
            <nu-block>Find in-depth information about Next.js features and API.</nu-block>
          </nu-cardbtn>

          <nu-cardbtn to="!https://nextjs.org/learn">
            <nu-h3>Learn &rarr;</nu-h3>
            <nu-block>Learn about Next.js in an interactive course with quizzes!</nu-block>
          </nu-cardbtn>

          <nu-cardbtn to="!https://github.com/vercel/next.js/tree/master/examples">
            <nu-h3>Examples &rarr;</nu-h3>
            <nu-block>Discover and deploy boilerplate example Next.js projects.</nu-block>
          </nu-cardbtn>

          <nu-cardbtn
            to="!https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <nu-h3>Deploy &rarr;</nu-h3>
            <nu-block>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </nu-block>
          </nu-cardbtn>
        </nu-grid>
      </nu-main>

      <nu-line/>

      <nu-footer text="center">
        <nu-pane content="center">
          <nu-el>Powered by{' '}</nu-el>
          <nu-link
            to="!https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <nu-svg src="/vercel.svg" height="2.5x" label="Vercel Logo"/>
          </nu-link>
          <nu-el>&</nu-el>
          <nu-link
            to="!https://numl.design?utm_source=create-next-app&utm_medium=numl-template&utm_campaign=create-next-app">
            <nu-pane>
              <nu-svg src="/numl.svg" height="3x" label="Numl Logo"/>
              <nu-el>Numl.Design</nu-el>
            </nu-pane>
          </nu-link>
        </nu-pane>
      </nu-footer>
    </Root>
  );
};

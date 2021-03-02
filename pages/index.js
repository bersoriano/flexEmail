import Head from 'next/head';
import Header from '../components/Header';
import MainContainer from '../components/Main';
export default function Home() {
  return (
    <div className="container">
      <Head>
          <title>Flex Email Templates</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <MainContainer>
        <h2>Templates:</h2>
        <ul>
          <li><a href="/templates/Clarion Financial Freedom.html">Clarion Financial Freedom</a></li>
          <li><a href="/templates/Clarion Flex Premium Email 2.html">Clarion Flex Premium Email 2</a></li>
        </ul>
      </MainContainer>
      <footer>
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>@bersoriano</span>
        </a> */}
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;       
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </div>
  )
}

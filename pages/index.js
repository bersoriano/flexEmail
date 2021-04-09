import Head from "next/head";
import Header from "../components/Header";
import MainContainer from "../components/Main";
import Link from '../components/Link';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Flex Templates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <MainContainer>
        <h2>April Email</h2>
        <ul className="template-container">
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template1/template1.html"></Link>
            <Link className="template" label="EOA testing link" url="https://app.emailonacid.com/shared-preview/zQrA2OyKcg"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template1/template1.html"
            ></iframe>
          </li>
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template2/template2.html"></Link>            
            <Link className="template" label="EOA testing link" url="https://app.emailonacid.com/shared-preview/eR2RlVCWWc"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template2/template2.html"
            ></iframe>
          </li>
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template3/template3.html"></Link>            
            <Link className="template" label="EOA testing link" url="https://app.emailonacid.com/precheck/shared-preview/zWSFWhv0Oc"></Link>            
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template3/template3.html"
            ></iframe>
          </li>                    
        </ul>

        <h2>March - Non Premium Email</h2>
        <ul className="template-container">
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template9/template9-austin.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template9/template9-charlotte.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template9/template9-santonio.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template1/Do%20More%20Email%201.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template2/Do%20More%20Email%202.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template7/template7.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template8/all-set-confirmation.html"
            ></iframe>
          </li>
        </ul>

        <h2>March - Premium Email</h2>
        <ul className="template-container">
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template3/flexPremium.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template4/flexPremium2.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template5/flexPremium3.html"
            ></iframe>
          </li>
          <li>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/march/template6/flexpremium4.html"
            ></iframe>
          </li>
        </ul>
      </MainContainer>
      <footer></footer>

      <style jsx>{`
        h2 {
          text-align: center;
          margin: 1em 0;
          font-size: 2em;
        }
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        ul {
          display: flex;
          width: 80vw;
          max-width: 80vw;
          overflow-x: scroll;
          margin: 0 auto;
        }
        ul li.template-container {
          display: flex;
          width: 80vw;
          max-width: 80vw;
          overflow-x: scroll;
          margin: 0 auto;
        }
        ul li {
          display: flex;
          flex-direction: column;
          padding: 0.5em 0;
          max-width: 600px;
          margin: 0 1em;
          border-bottom: 1px solid #e9e9e9;
        }
        .link {
          margin-bottom: 1rem;
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
  );
}

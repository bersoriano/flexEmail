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
        <h2>Widgets April</h2>

        {/* <AprilPopup></AprilPopup> */}

        <div className="dumb-container">
          <div className="floating-info">
            <div className="left-col">
              <span><strong>Simply a smarter way to pay rent.</strong></span>
              <span>Split your rent into smaller, stress-free payments today. Available for all residents.</span>
              <a href="https://getflex.app.link/afwKZlFisfb" className="flex-btn">Get Flex</a>
            </div>
            <div className="right-col">
              <img src="https://getflex.com/wp-content/uploads/2021/03/flex-logo-4.png"></img>
            </div>
          </div>
        </div>

        <h2>April Premium Email</h2>
        <ul className="template-container">
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template6/template6.html"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template6/template6.html"
            ></iframe>
          </li>  
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template7/template7.html"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template7/template7.html"
            ></iframe>
          </li>
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template8/template8.html"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template8/template8.html"
            ></iframe>
          </li> 
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template9/template9.html"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template9/template9.html"
            ></iframe>
          </li>                                 
        </ul>
        <h2>April non Premium Email</h2>
        <ul className="template-container">
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template10/template10.html"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template10/template10.html"
            ></iframe>
          </li>            
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template4/template4.html"></Link>
            <Link className="template" label="EOA testing link" url="https://app.emailonacid.com/shared-preview/kvLSINK1i0"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template4/template4.html"
            ></iframe>
          </li>   
          <li>
            <Link className="link" label="Template View" url="https://flex-email.vercel.app/templates/april/template5/template5.html"></Link>
            <Link className="template" label="EOA testing link" url="https://app.emailonacid.com/shared-preview/2WEN3Rkdvi"></Link>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="600"
              height="700"
              src="https://flex-email.vercel.app/templates/april/template5/template5.html"
            ></iframe>
          </li>                                     
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

      <style jsx global> {
        
        `body { font-family: Work Sans, -apple-system, "Segoe UI", sans-serif;}`

      }</style>

      <style jsx>{`


        .dumb-container {
          display: flex;
          max-width: 400px;
          max-width: 1100px;    
          margin: 1.5rem auto;               
        }

        .floating-info {
          min-width: 300px;
          background-color: #644aac;
          padding: 2rem;
          display: flex;
          flex-direction: row;
          color: white;
          border-radius: 1rem;
          font-size: 2rem;
        }
        .left-col {
          flex: 1.5;
          display: flex;
          flex-direction: column;
        }
        .left-col .flex-btn {
          margin: 2rem auto 2rem 0;
        }
        .right-col {
          flex: 1;
          display: flex;
        }
        .right-col img {
          max-height: 54px;
          margin: auto 1rem 1rem auto;
        }

        .floating-info span {
          margin: 1rem;
        }

        .flex-btn {
          font-size: 1.3rem;
          outline: none;
          border: 1px solid black;
          background: white;
          border-radius: 4px;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: black;
          padding: 12px 68px;
          display: inline-block;
          text-decoration: none;          
        }

        .flex-btn:hover {
          opacity: .8;
        }

        h2 {
          text-align: left;
          margin: 2em auto;
          font-size: 2em;
          max-width: 1100px;
          width: 100%;
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

import Head from "next/head";
import Header from "../components/Header";
import MainContainer from "../components/Main";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>March Templates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <MainContainer>
        <h2>March Templates</h2>
        <ul>
          <li>
            <a href="/templates/march/template1/Do More Email 1.html">
              Template 1
            </a>
            <a href="https://app.emailonacid.com/shared-preview/TNFN2RNk6O">
              E-mail previews
            </a>
          </li>     
          <li>
            <a href="/templates/march/template2/Do More Email 2.html">
              Template 2
            </a>
            <a href="https://app.emailonacid.com/shared-preview/85NNSLgz4s">
              E-mail previews
            </a>
          </li>  
          <li>
            <a href="/templates/march/template7/template7.html">
              Survey Template
            </a>
            {/* <a href="/templates/march/template7/template7.html">
              E-mail previews
            </a> */}
          </li> 
          <li>
            <a href="/templates/march/template8/all-set-confirmation.html">
              Asset Email Confirmation
            </a>
            {/* <a href="https://app.emailonacid.com/shared-preview/85NNSLgz4s">
              E-mail previews
            </a> */}
          </li>                                                       
        </ul>
        <h3>Premium Templates</h3> 
        <ul>
          <li>
            <a href="/templates/march/template3/flexPremium.html">
              Template 1 - Premium
            </a>
            <a href="https://app.emailonacid.com/shared-preview/vT12OvaGRw">
              E-mail previews
            </a>            
          </li>   
          <li>
            <a href="/templates/march/template4/flexPremium2.html">
              Template 2 - Premium
            </a>
            <a href="https://app.emailonacid.com/shared-preview/UjGDAS4lyK">
              E-mail previews
            </a>             
          </li>  
          <li>
            <a href="/templates/march/template5/flexPremium3.html">
              Template 3 - Premium
            </a>
            <a href="https://app.emailonacid.com/shared-preview/Jj7vjT8q08">
              E-mail previews
            </a>                         
          </li>  
          <li>
            <a href="/templates/march/template6/flexpremium4.html">
              Template 4 - Premium.
            </a>
            <a href="https://app.emailonacid.com/shared-preview/x6QY2XtBe0">
              E-mail previews
            </a>            
          </li>                                                  
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
        ul li {
          display: flex;
          flex-direction: row;
          padding: .5em 0;
          margin: 0;
          border-bottom: 1px solid #e9e9e9;
        }
        ul li:hover {
          background-color: #e9e9e9;
        }
        ul li a {
          margin: 1em 1em 0 0em;
          min-width: 400px;
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

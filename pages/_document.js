
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600" rel="stylesheet" media="screen" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="./aprilPopup.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
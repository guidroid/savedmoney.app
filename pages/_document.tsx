import React from "react";
// Modules
import Document, { Html, Head, Main, NextScript } from "next/document";
// MUI Core
import { ServerStyleSheets } from "@material-ui/core/styles";
// Utils
import theme from "../utils/theme";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />

          <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
          <meta httpEquiv="content-language" content="en" />
          <meta
            name="keywords"
            content="savedmoney, savings, money, saved money, dont spend"
          />
          <meta name="description" content="Log your saved money" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          />

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

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" href="/images/icons/192.png" />
          <meta name="msapplication-starturl" content="/" />
          <link rel="canonical" href="https://savedmoney.app/" />
          <meta
            httpEquiv="Referrer-Policy"
            content="no-referrer, strict-origin-when-cross-origin"
          />
          <meta
            content="text/html; charset=UTF-8; X-Content-Type-Options=nosniff"
            httpEquiv="Content-Type"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};

export default MyDocument;

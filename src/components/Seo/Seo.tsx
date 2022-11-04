export function Seo() {
  return (
    <>
      <meta name="description" content="Eren Kulaksiz's Personal Website" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <head
        dangerouslySetInnerHTML={{
          __html: `
<!-- https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png -->
`,
        }}
      ></head>
      <meta
        property="apple-mobile-web-app-capable"
        name="apple-mobile-web-app-capable"
        content="yes"
      />
      <meta
        property="apple-mobile-web-app-status-bar-style"
        name="apple-mobile-web-app-status-bar-style"
        content="default"
      />
      <meta
        property="format-detection"
        name="format-detection"
        content="telephone=no"
      />
      <meta
        property="mobile-web-app-capable"
        name="mobile-web-app-capable"
        content="yes"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="twitter:card" name="twitter:card" content="summary" />
      <meta
        property="twitter:url"
        name="twitter:url"
        content="https://erenk.dev"
      />
      <meta
        property="twitter:creator"
        name="twitter:creator"
        content="@erencode"
      />
      <meta property="twitter:site" name="twitter:site" content="@erencode" />
      <meta property="og:type" name="og:type" content="website" />
      <meta property="og:site_name" name="og:site_name" content="erenk.dev" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-V0RX3S6JG7`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-V0RX3S6JG7', {page_path: window.location.pathname,});`,
        }}
      />
    </>
  );
}

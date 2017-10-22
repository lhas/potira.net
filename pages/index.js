import Head from 'next/head'
import Button from 'material-ui/Button'

export default () => <div className="home">
  <Head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico?v=1.1" />
    <link rel="icon" type="image/png" href="/static/favicon.png?v=1.1" />
    <title>Potira</title>
    <meta name="og:title" content="Potira" />
  </Head>
  <style global jsx>{`
    body {
      background: #222;
    }
    * {
      margin: 0;
      padding: 0;
    }
    .home {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      overflow: scroll-y;
    }
    .incoming {
      color: #FFF;
      font-family: 'Quicksand', sans-serif;
      text-transform: uppercase;
      font-weight: 200;
      font-size: 50px;
    }
  `}</style>
  <img src="/static/logo2.png" class="logo2" alt=""/>
  <img src="/static/logo.png" alt=""/>
  <p className="incoming">Em Breve</p>
  <Button raised color="accent" href="http://forum.potira.net/" target="_blank" style={{marginTop: 30, marginBottom: 30}}>Abrir Fórum</Button>
</div>

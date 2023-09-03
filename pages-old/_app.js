import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

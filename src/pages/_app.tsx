import "../styles/global.scss";

import { Header } from "../components/Header";
import { Player } from "../components/Player";

import { PlayerContextProvaider } from "../contexts/PlayerContext";

import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvaider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvaider>
  );
}

export default MyApp;

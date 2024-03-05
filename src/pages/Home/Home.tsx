import { useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { HomeProps } from "./types";
import useLocale from "../../locales";
import Text from "../../components/LVL1_Atoms/Text/Text";

const Home = ({}: HomeProps) => {
  const navigate = useNavigate();
  const { localeTitles, localeButtons } = useLocale();

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlayBars}>
        <div className={styles.topBar}>
          <p className={styles.barText}>
            Eco4 Scheme. Claim upto £20,000 to make your home warmer for less!
          </p>
        </div>
        <div className={styles.secondBar}>
          <p className={styles.barText}>Ecosaverspot</p>
        </div>
        <div className={styles.middleBar}>
          {" "}
          <p className={'text-2xl text-white mb-4'}>Free Boiler Grant 2024</p>
          <p className={'text-m text-white mb-4'}>
            Free of Charge Energy Efficient Boiler with New Boiler Grant Scheme
          </p>
          <p className={styles.barText}>
            Save as much as £1100 per annum on energy bills with New Free Boiler
            Grant 2024 Scheme
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

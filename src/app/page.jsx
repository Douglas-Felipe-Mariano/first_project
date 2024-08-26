import { MdLunchDining, MdLocalBar, MdDining, MdIcecream, MdFastfood  } from "react-icons/md";

import Image from "next/image";
import styles from "./page.module.css"
import ProdutosHome from "@/componentes/produtos/produtosHome";
import Slider from "@/componentes/slider";

export default function Home() {
  return (
    <div className='containerGlobal'>
      <div className={styles.container_title}>
        <Slider/>

        <div className={styles.tipos}>
          <MdLunchDining className={styles.tpicon}/>
          <MdLocalBar className={styles.tpicon}/>
          <MdDining className={styles.tpicon}/>
          <MdIcecream className={styles.tpicon}/>
          <MdFastfood className={styles.tpicon}/>
        </div>

        <ProdutosHome/>

      </div>
    </div>
  );
}

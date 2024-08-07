import Image from "next/image";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className='containerGlobal'>
      <div className={styles.container_title}>
        <h1 className={styles.txt_titulo}>Next.js</h1>
        <h2>Exemplo h2</h2>
        <h3>Exemplo h3</h3>
        <p>Exemplo Paragrafo</p>
        
        <div style={styles.containterImagem}>
          <Image
            src={'/palmeiras.jpg'}
            width={500}
            height={500}
            alt="Palmeiraaaaas"
            className={styles.imagemHome}
          />
          <Image
            src={'/palmeiras.jpg'}
            width={1000}
            height={1000}
            alt="Palmeiraaaaas"
            className={styles.imagemHome}
          />
        </div>

      </div>
    </div>
  );
}

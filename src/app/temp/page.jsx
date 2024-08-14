import Link from "next/link";
import styles from './page.module.css'


export default function Temp(){
    return(
        <div className='containerGlobal'>
            <h1>Paginas acesso Teste</h1>
            <Link href="/"> <span className={styles.linkTemp}>Home</span></Link>
            <Link href="/sobre"><span className={styles.linkTemp}>Sobre</span></Link>
            <Link href="/usuarios/cadastro"><span className={styles.linkTemp}>Cadastro de usuario</span></Link>
            <Link href="/usuarios/login"><span className={styles.linkTemp}>login</span></Link>
        </div>
    );
}
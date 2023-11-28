import { Container } from '../container/container';
import styles from './footer.module.css';
import Link from 'next/link';
import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <h3>All Rights Reserved - Aon2023</h3>
                    <ul>
                        <li>
                            <Link href={"/"} ><FaSquareFacebook/></Link>
                        </li>
                        <li>
                            <Link href={"/"} ><GrInstagram/></Link>
                        </li>
                        <li>
                            <Link href={"/"} ><FaTwitter/></Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
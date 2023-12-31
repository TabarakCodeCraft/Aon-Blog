import React from 'react'
import styles from './header.module.css';
import Link from 'next/link';
import { Container } from "../container/container";
export const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <h3>Aon Blog</h3>
                    <ul>
                        <li  className="card-div">
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/favorite"}>favorite</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
//export default Header;
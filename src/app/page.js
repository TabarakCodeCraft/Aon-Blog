"use client"

import { Container } from "./components/container/container";
import { Header } from "./components/Header/header";
import styles from './page.module.css';
import { Card } from "./components/card/card"; 
import { Footer } from './components/footer/footer'
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = () => {
    setLoading(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((res) => res.json())
      .then((data) => {
       setList((prevList) => [...prevList, ...data.blogs]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
      <div className={styles.overlay}>
      <Container>
      <div className={styles.title}><h1>Simple Blog.</h1>
      <p>A blog created by Aon 2023</p>
      </div>
      </Container>
      </div>
      </div>
      <Container>
        <InfiniteScroll
          dataLength={list.length}
          next={getBlogs}
          hasMore={!loading}
          loader= {<div className={styles.loadingContainer}>
            <span className={styles.loader}></span>
            </div>}>
          <div className={styles.grid}>
            {list.map((el, i) => (
              <Card key={i} blog={el} />
            ))}
          </div>
        </InfiniteScroll>
      </Container>
      <Footer />
    </main>
  );
}

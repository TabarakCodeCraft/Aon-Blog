import { Container } from "../../components/container/container";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/Header/header";
import styles from "./page.module.css";
import Image from "next/image";
import dayjs from "dayjs";

async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const data = await getData(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.blog.title,
    description: data.blog.description,
    openGraph: {
      images: [data.blog.photo_url, ...previousImages],
    },
  };
}

export default async function Article({ params }) {
  let data = await getData(params.id);
  // console.log(data);

  return (
    <main className={styles.ss}>
      <Header />
      <Container>
        <div className={styles.head}>
          <div>
            <h2>{data.blog.title}</h2>
            <p>{data.blog.category}</p>
          </div>
          <span>{dayjs(data.blog.created_at).format("YYYY, MMMM DD")}</span>
        </div>
        <div className={styles.cover}>
          <Image src={data.blog.photo_url} fill />
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.blog.content_html }}
        ></div>
      </Container>
      <Footer />
    </main>
  );
}

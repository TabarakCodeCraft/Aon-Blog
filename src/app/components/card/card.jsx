import dayjs from 'dayjs';
import styles from './card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import FavBtn from '../Favorite/favBtn';

export const Card = ({ blog }) => {
    return (
        <div className="card-div">
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image src={blog.photo_url} fill={true} />
                </div>
                <p className={styles.title}>{blog.title}</p>
                <p className={styles.subtitle}>{blog.category}</p>
                <div className={styles.footer}>
                <div className={styles.read}>
                        <Link href={`/article/${blog.id}`}>Read Article</Link>
                        <div className="favBtnContainer">
                            <FavBtn blog={blog} />
                        </div>
                    </div>
                    <span>{dayjs(blog.create_at).format('DD/MM/YYYY')}</span>
                </div>
            </div>
        </div>
    );
}
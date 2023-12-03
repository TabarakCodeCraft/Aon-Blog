import { React, useEffect, useState } from "react";
import { useStore } from "@/app/store";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const FavBtn2 = ({ blog }) => {
    const { favorite, setFavorite } = useStore();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const foundItem = favorite.find((item) => item.item.id === blog.id);
        setIsFavorite(foundItem ? foundItem.favorite : false);
    }, [favorite, blog.id]);

    const handelFavoriate = () => {
        let updateFavorite = [...favorite];

        updateFavorite = updateFavorite.filter((item) => item.favorite);
        setFavorite(updateFavorite);
    };

    localStorage.setItem('favorite', JSON.stringify(favorite));
    const heartIcon = isFavorite ? (
        <FaHeart style={{ color: "red" }} />) : (<FaRegHeart />);

    return (
        <div>
            <button onClick={handelFavoriate}>{heartIcon}</button>
        </div>
    );
}
export default FavBtn2;
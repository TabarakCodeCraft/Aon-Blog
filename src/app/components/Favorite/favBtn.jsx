import React from "react";
import { useStore } from "@/app/store";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const FavBtn = ({ blog }) => {
    const { favorite, setFavorite } = useStore();

    let favObj = favorite.find((el) => el.id === blog.id);

    const handelFavoriate = () => {
        let newArr = [];
        if (favObj) newArr = favorite.filter((el) => el.id !== blog.id);
        else newArr = [...favorite, blog];

        setFavorite(newArr);
        localStorage.setItem("blog-fav", JSON.stringify(newArr));
    };
    const heartIcon = favObj ? (
        <FaHeart style={{ color: "red" }} />) : (

        <FaRegHeart />);

    return (
        <div>
            <button onClick={handelFavoriate}>{heartIcon}</button>
        </div>
    );

};
export default FavBtn;
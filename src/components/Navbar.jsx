import React, { useEffect, useState } from "react";
import { BsLightbulb, BsBasketFill, BsMoonStarsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/actions/search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (color) {
      root.style.backgroundColor = "black";
      root.style.color = "gray";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [color]);

  const searchPost = (e) => {
    if (e.key === "Enter") {
      dispatch(searchAction(search));
    }
  };

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const closeMenu = () => {
      setOpenMenu(false);
    };

    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between px-3 h-28 border-b ">
        <div className="text-2xl font-bold tracking-wider">
          <Link to="/">AQUA STORE</Link>
        </div>
        <div className="xl:flex lg:flex md:flex sm:hidden max-sm:hidden items-center space-x-4 ">
          <input
            value={search}
            onKeyPress={searchPost}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 outline-none rounded-lg"
            type="text"
            placeholder="search"
          />
          <div onClick={() => setColor(!color)}>
            {color ? (
              <BsLightbulb size={25} className="cursor-pointer" />
            ) : (
              <BsMoonStarsFill size={25} className="cursor-pointer" />
            )}
          </div>
          <div
            onClick={() => dispatch({ type: "DRAWER", payload: true })}
            className="relative"
          >
            <BsBasketFill size={25} className="cursor-pointer" />
            <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
              {cardItems?.length}
            </span>
          </div>
        </div>
        <div className="xl:hidden lg:hidden md:hidden sm:flex">
          {openMenu ? (
            <CgClose
              className="cursor-pointer"
              onClick={handleClick}
              size={25}
            />
          ) : (
            <FiMenu
              onClick={handleClick}
              className="cursor-pointer"
              size={25}
            />
          )}
        </div>
      </div>
      <div className=" bg-slate-100 relative z-10">
        {openMenu ? (
          <div className=" h-full flex items-center justify-center flex-col p-10 gap-5">
            <input
              value={search}
              onKeyPress={searchPost}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-4 py-2 outline-none rounded-lg"
              type="text"
              placeholder="search"
            />
            <div className="flex gap-4">
              <div onClick={() => setColor(!color)}>
                {color ? (
                  <BsLightbulb size={25} className="cursor-pointer" />
                ) : (
                  <BsMoonStarsFill size={25} className="cursor-pointer" />
                )}
              </div>
              <div
                onClick={() => dispatch({ type: "DRAWER", payload: true })}
                className="relative"
              >
                <BsBasketFill size={25} className="cursor-pointer" />
                <span className="absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm">
                  {cardItems?.length}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Navbar;

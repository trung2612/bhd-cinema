import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ProductViewContext } from "feature/HomeScreen/HomeScreen";

import logo from "../../../assets/images/logo.png";
import FbIcon from "../../../assets/images/icon_fb.png";
import YtIcon from "../../../assets/images/icon_YT.png";
import IgIcon from "../../../assets/images/icon-ig.png";
import TTIcon from "../../../assets/images/icon_tiktok.png";
import bgBtnMenu from "../../../assets/images/bg-button-menu.jpeg";
import lineHeader from "../../../assets/images/line-header1.png";
import "./NavBar.scss";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const productViewRef = useContext(ProductViewContext);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScrollToElement = () => {
    window.scrollTo({
      top: productViewRef.current.offsetTop + 20,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <nav className="main_header flex relative z-20">
        <div className="menu flex self-center px-3.5 bg-[#272727]">
          <Button
            id="basic-button	"
            className="text-white flex flex-col font-bold"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div className="pb-1 w-9">
              <img src={bgBtnMenu} alt="btn bg" />
            </div>
            <div className="pb-1 w-9">
              <img src={bgBtnMenu} alt="btn bg" />
            </div>
            <div className="pb-1 w-9">
              <img src={bgBtnMenu} alt="btn bg" />
            </div>
            MENU
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>LỊCH CHIẾU</MenuItem>
            <MenuItem onClick={handleClose}>HỆ THỐNG RẠP</MenuItem>
            <MenuItem onClick={handleClose}>KHUYẾN MÃI | SỰ KIỆN</MenuItem>
            <MenuItem onClick={handleClose}>DỊCH VỤ QUẢNG CÁO</MenuItem>
            <MenuItem onClick={handleClose}>TUYỂN DỤNG</MenuItem>
            <MenuItem onClick={handleClose}>VỀ CHÚNG TÔI</MenuItem>
          </Menu>
        </div>

        <div className="btn--buy-ticket self-center pl-4">
          <Button
            className="bg-lime-600  font-bold"
            variant="contained"
            onClick={handleScrollToElement}
          >
            MUA VÉ
          </Button>
        </div>

        <div className="logo mx-auto self-center absolute top-2/3 left-1/2">
          <img className="w-20" src={logo} alt="lli" />
        </div>

        <div className="header-right flex ml-auto pr-9">
          <div className="social self-center pr-4">
            <ul className="flex">
              <li className="pr-4">
                <a
                  href="https://google.com.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11" src={IgIcon} alt="social-icon" />
                </a>
              </li>
              <li className="pr-4">
                <a
                  href="https://google.com.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11" src={TTIcon} alt="social-icon" />
                </a>
              </li>
              <li className="pr-4">
                <a
                  href="https://google.com.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11" src={YtIcon} alt="social-icon" />
                </a>
              </li>
              <li className="pr-4">
                <a
                  href="https://google.com.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11" src={FbIcon} alt="social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="btn--login self-center">
            <Button className="bg-lime-600 font-bold" variant="contained">
              ĐĂNG NHẬP
            </Button>
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        <img className=" z-10" src={lineHeader} alt="line header" />
      </div>
    </header>
  );
};

export default NavBar;

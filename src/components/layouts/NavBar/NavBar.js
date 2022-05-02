import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { ProductViewContext } from "feature/HomeScreen/HomeScreen";
import bgBtnMenu from "../../../assets/images/bg-button-menu.jpeg";
import { getSocials, getLogo, getHelpers } from "app/api";
import { Link } from "react-router-dom";
import { isLogin } from "helpers/helpers";
import { useNavigate } from "react-router-dom";


import "./NavBar.scss";

const NavBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const productViewRef = useContext(ProductViewContext);
  const [isAuthen, setIsAuthen] = useState(true);
  const open = anchorEl;
  const navigate = useNavigate();
  const [socials, socialsStatus, logo, statusLogo, helpers] = useSelector(
    (state) => [
      state.globalState.socials,
      state.globalState.statusSocials,
      state.globalState.logo,
      state.globalState.statusLogo,
      state.globalState.helpers,
    ]
  );

  useEffect(() => {
    if (statusLogo === "idle" && socialsStatus === "idle") {
      dispatch(getSocials());
      dispatch(getLogo());
      dispatch(getHelpers());
    }
  }, [statusLogo, socialsStatus, dispatch]);

  useEffect(() => {
    if (!isLogin()) setIsAuthen(false);
  }, []);

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
          <Link to="/">
            <img className="w-20" src={logo[0]?.image} alt={logo[0]?.alt} />
          </Link>
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
                  <img
                    className="w-11"
                    src={socials[0]?.image}
                    alt={socials[0]?.alt}
                  />
                </a>
              </li>
              <li className="pr-4">
                <a
                  href="https://google.com.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-11"
                    src={socials[1]?.image}
                    alt={socials[1]?.alt}
                  />
                </a>
              </li>
              <li className="pr-4">
                <a
                  href="https://google.com.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-11"
                    src={socials[2]?.image}
                    alt={socials[2]?.alt}
                  />
                </a>
              </li>
              <li className="pr-4">
                <a
                  href="https://google.com.vn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-11"
                    src={socials[3]?.image}
                    alt={socials[3]?.alt}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="btn--login self-center">
            {!isAuthen ? (
              <Link to="/login">
                <Button className="bg-lime-600 font-bold" variant="contained">
                  ĐĂNG NHẬP
                </Button>
              </Link>
            ) : (
              <Button className="bg-lime-600 font-bold" onClick={()=>{localStorage.removeItem('isLoggedIn');navigate("/login")}} variant="contained">
                ĐĂNG XUẤT
              </Button>
            )}
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        <img className=" z-10" src={helpers[0]?.href} alt={helpers[0]?.alt} />
      </div>
    </header>
  );
};

export default NavBar;

import { Grid,Container } from "@mui/material";
import { Link } from "react-router-dom";


import {menuLeftItem, menuRightItem} from './constant';
import logo from "../../../assets/images/logo.png";
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="flex justify-center py-4 footer--logo">
          <img src={logo} alt="footer logo"/>
      </div>
      <Container className="footer--container" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <ul className="footer--menu footer--menu-left text-white">
              {menuLeftItem.map((item, key) => (
                <Link key={key} className="no-underline	" to={item.href}>
                  <li className="menu--item menu-left--item mb-3">{item.name}</li>
                </Link>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <ul className="footer--menu footer--menu-right">
              {menuRightItem.map((item, key) => (
                <Link key={key} to={item.href}>
                  <li className="menu--item menu-right--item mb-3">{item.name}</li>
                </Link>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

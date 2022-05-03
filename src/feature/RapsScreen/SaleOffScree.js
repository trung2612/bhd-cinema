import { useState } from "react";
import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import { Container, Tabs, Tab, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./SaleOffScreen.scss";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const SaleOffScreen = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <ContentLayout>
      <div className="sale-off--wrapper">
        <Container>
          <div className="sale-of--title">
            <Tabs
              className="sale-of--tabs pb-4 justi"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="khuyến mãi" {...a11yProps(0)} />

              <Tab label="sự kiện" {...a11yProps(1)} />
            </Tabs>

            <Grid container spacing={2}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item,index) => (
                <Grid item md={3} className="pb-6 cursor-pointer">
                  <Link to={"1"} key={index}>
                    <div className="item--img">
                      <img
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/helpers%2FPH-243x330.jpg?alt=media&token=f42a2c0d-9e9b-4066-bddc-e3d807f7efb3"
                        }
                        alt={"pnt"}
                      />
                    </div>
                    <p className="item--content">BHD Star Phạm Ngọc Thạch</p>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    </ContentLayout>
  );
};

export default SaleOffScreen;

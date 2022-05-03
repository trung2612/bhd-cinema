import React, { useEffect } from "react";
import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import {
  Container,
  Breadcrumbs,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getMovies } from "./api";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieScreen.scss";

const MovieScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [movie, status] = useSelector((state) => [
    state.movieScreen.movies.filter((item) => item.data.id === params.id)[0]
      ?.data,
    state.movieScreen.status,
  ]);

  useEffect(() => {
    if (status === "idle") dispatch(getMovies());
  }, [status, dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  return (
    <ContentLayout>
      <div className="film--wrapper">
        <Container className="">
          <div className="film--detail-title py-6">
            <div className="py-6" role="presentation" onClick={handleClick}>
              <Breadcrumbs separator="|" aria-label="breadcrumb">
                <Link underline="hover" to="/">
                  Trang chủ
                </Link>
                <Typography className="font-bold" color="text.primary">
                  {movie?.name}
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
          <div className="film--detail-content">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} xs={4}>
                  <div>
                    <img src={movie?.image} alt="movie banner" />
                  </div>
                </Grid>
                <Grid item md={8} xs={8}>
                  <div className="film--view">
                    <div className="film--name">{movie?.name}</div>
                    <div className="film--description">
                      {movie?.description}
                    </div>
                    <div className="film--infor">
                      <ol className="pt-6 pb-7">
                        <li>
                          <span className="col-title">Phân loại</span>
                          <span className="col-description phan-loai">
                            {movie?.classify}
                          </span>
                        </li>
                        <li>
                          <span className="col-title">Đạo diễn</span>
                          <span className="col-description">
                            {movie?.director}
                          </span>
                        </li>
                        <li>
                          <span className="col-title">Diễn viên</span>
                          <span className="col-description">
                            {movie?.actor}
                          </span>
                        </li>
                        <li>
                          <span className="col-title">Thể loại</span>
                          <span className="col-description">
                            {movie?.category}
                          </span>
                        </li>
                        <li>
                          <span className="col-title">Khởi chiếu</span>
                          <span className="col-description">
                            {movie?.time_start}
                          </span>
                        </li>
                        <li>
                          <span className="col-title">Thời lượng</span>
                          <span className="col-description">
                            {movie?.time} phút
                          </span>
                        </li>
                        <li>
                          <span className="col-title">Ngôn ngữ</span>
                          <span className="col-description">
                            {movie?.national}
                          </span>
                        </li>
                      </ol>

                      <div className="btn--green">
                        <Link to="/">
                          {" "}
                          <Button
                            className="bg-lime-600  font-bold"
                            variant="contained"
                          >
                            XEM TRAILER
                          </Button>
                        </Link>
                        <Link to="/">
                          <Button
                            className="bg-lime-600  font-bold"
                            variant="contained"
                          >
                            MUA VÉ NGAY
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          <div className="film--detail-showtimes"></div>
        </Container>
        <div className="trailer--wrapper"></div>
      </div>
    </ContentLayout>
  );
};

export default MovieScreen;

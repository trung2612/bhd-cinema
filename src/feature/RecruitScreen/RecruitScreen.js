import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./RecruitScreen.scss";

const RecruitScreen = () => {
  return (
    <ContentLayout>
      <div className="recruit--wrapper">
        <Container>
          <div>
            <h1 className="recruit--title font-bold text-3xl text-center pb-6">TUYỂN DỤNG</h1>
            <div className="recruit--img">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/helpers%2FBHDStar-WebGia-710x320.jpg?alt=media&token=2f1b7cc3-aec5-4129-a888-15a0c4ab509c"
                alt="recruit"
              />
            </div>

            <ul className="recruit--list py-6">
              <li>
                Tất cả các thông tin tuyển dụng của{" "}
                <strong>BHD Star Cinpeplex</strong> sẽ được đăng tuyển trên các
                kênh truyền thông{" "}
                <Link to={"/"}>
                  <strong>websites</strong>
                </Link>
                ,{" "}
                <strong>
                  <a target="_blank" href="https://www.facebook.com/BHDStar" rel="noreferrer">
                    fanpage{" "}
                  </a>
                </strong>
                của công ty
                <br />
                Và các trang việc làm có uy tín tại Việt Nam, các ứng viên không
                phải trả bất kỳ khoản chi phí nào để nộp đơn ứng tuyển.
              </li>
              <li>
                Tất cả các thông tin ứng tuyển chỉ gửi về một email chính thức
                &amp; duy nhất của công ty:{" "}
                <strong>
                  <a>Recruitment-HCM@bhdstar.vn</a>
                </strong>
                <br />
                Nếu các bạn phát hiện bất kỳ thông tin sai lệch nào khác, xin
                vui lòng báo về cho BHD Star theo email{" "}
                <strong>
                  <a>Recruitment-HCM@bhdstar.vn</a>
                </strong>
              </li>
            </ul>

            <p></p>
          </div>
        </Container>
      </div>
    </ContentLayout>
  );
};

export default RecruitScreen;

import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import { Container } from "@mui/material";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <ContentLayout>
      <div className="about-us--wrapper pt-10">
        <Container>
          <h1 className="about-us--introduce font-bold text-3xl text-center">
            GIỚI THIỆU
          </h1>
          <div className="abbout-us--content">
            <h3 className="title font-bold text-2xl pt-5 pb-2">Về chúng tôi</h3>
            <h4 className="date pb-2">18/04/2022</h4>

            <p>
              <span  className="font-bold" style={{ color: "#16a600" }}>BHD Star Cineplex</span> được
              biết đến với cụm rạp đầu tiên với 5 phòng chiếu vào năm 2010, tại
              Maximark 3/2 (nay là Vincom 3/2). Từ 2014,{" "}
              <strong> BHD Star Cineplex</strong> là cụm rạp của doanh nghiệp
              Việt Nam duy nhất có sức phát triển mạnh mẽ, qua việc liên tục mở
              thêm các vị trí rạp mới, ở những khu vực đắc địa của Thành phố Hồ
              Chí Minh, Hà Nội, Huế và các tỉnh thành khác.
            </p>

            <p>
              <strong>
                <span style={{ color: "#16a600" }}>BMỤC TIÊU HOẠT ĐỘNG</span>
                <hr />
              </strong>
              <i>
                Các mục tiêu này được thiết lập bởi BHD Star Cineplex như là kim
                chỉ nam cho các Ban Quản Lý Rạp để bảo đảm trải nghiệm điện ảnh
                hoàn hảo cho khách hàng.
              </i>
            </p>

            <p>
              + <strong>Phục vụ khách hàng: </strong>Chúng tôi cam kết chất
              lượng phục vụ theo tiêu chuẩn cao nhất qua việc thoả mãn các yêu
              cầu của khách hàng kịp thời,đầy đủ và chuyên nghiệp.
            </p>

            <p>
              + <strong>Không gian thoải mái: </strong>Chúng tôi cam kết mang
              đến một không gian sạch sẽ, thoải mái và thuận lợi, để khách hàng
              luôn cảm thấy được trân trọng và được phục vụ chu đáo.
            </p>

            <p>
              + <strong>Địa điểm an toàn: </strong>Chúng tôi cam kết bảo đảm một
              không gian giải trí an ninh và an toàn để khách hàng quay lại
              thường xuyên.
            </p>

            <p>
              + <strong>Âm thanh hình ảnh: </strong>Chúng tôi cam kết cung cấp
              chất lượng âm thanh và hình ảnh theo tiêu chuẩn cao nhằm gìn giữ,
              quảng bá và nâng cao trải nghiệm điện ảnh như chính sự kỳ vọng của
              các nhà làm phim và khán giả xem phim.
            </p>

            <p>
              Bên cạnh việc sẽ tiếp tục mở rộng ra các tỉnh thành khác, giá trị
              cốt lõi của thương hiệu <strong>BHD Star Cineplex </strong> là
              luôn luôn bảo đảm trải nghiệm của khách hàng qua chất lượng phục
              vụ, đồng nhất tại tất cả các cụm rạp.
            </p>

            <p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bhd-star.appspot.com/o/about-us%2Fthank-you-bhd-1.jpeg?alt=media&token=030249ad-2ac9-4ae1-8a4a-1a5ab55eb45d"
                alt="about-us"
              />
            </p>
          </div>
        </Container>
      </div>
    </ContentLayout>
  );
};

export default AboutUs;

import ContentLayout from "components/layouts/ContentLayout/ContentLayout";
import { Container } from "@mui/material";
import Promotion from "components/molecules/Promotion/Promotion";
import "./SaleOffDetailScreen.scss";

const SaleOffDetailScreen = () => {
  return (
    <ContentLayout>
      <div className="saleoff-detail pb-6">
        <Container>
          <div>
            <h1 className="saleoff--title text-3xl font-bold text-center py-6">
              ƯU ĐÃI ĐẶC BIỆT CHO U22
            </h1>
            <div class="text--content">
              <p>
                <img
                  className="alignnone size-full wp-image-11866 py-6"
                  src="https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png"
                  alt="anh"
                />
              </p>
              <p>
                <strong>– Chương trình: GIÁ VÉ ƯU ĐÃI U22</strong>
              </p>
              <p>
                <strong>– Hình thức áp dụng:</strong>&nbsp;Giá vé 2D đặc biệt
                dành cho khách hàng là thành viên và từ 22 tuổi trở xuống
              </p>
              <p>
                <strong>– Chính sách giá vé: </strong>
                <em>
                  Tùy theo mỗi cụm rạp sẽ có chính sách giá vé U22 khác
                  nhau&nbsp;
                </em>
              </p>
              <p>
                <strong>– Điều kiện áp dụng:</strong>
              </p>
              <p>
                + Chỉ áp dụng cho khách hàng&nbsp;đã kích hoạt chức năng ưu đãi
                U22 trên tài khoản thẻ thành viên.&nbsp;
                <em>
                  (Mang theo CMND hoặc Thẻ Học Sinh để kích hoạt tại rạp sau khi
                  đăng ký thành viên).
                </em>
              </p>
              <p>
                + Mỗi khách hàng U22 có thể mua với giá ưu đãi tối đa 02
                vé/ngày. Bắt buộc phải xuất trình thẻ thành viên ra trước khi
                mua vé.
              </p>
              <p>
                + Áp dụng cho tất cả các suất chiếu phim 2D trong tuần trừ các
                suất chiếu sớm đặc biệt.
              </p>
              <p>+ Không áp dụng cho ngày Lễ, Tết.</p>
              <p>
                + Áp dụng phụ thu đối với ghế Đôi, ghế Sofa, Ghế Premium. Trừ
                ngày Thứ 2 Vui Vẻ.
              </p>
              <p>+ Áp dụng phụ thu đối với phim 3D, phim bom tấn.</p>
              <p>+ Không áp dụng phòng First Class.</p>
              <p>+ Không áp dụng kèm với các chương trình giảm giá vé khác.</p>
              <p>
                Ban Quản Lý Rạp có thể thay đổi hoặc dừng chương trình mà không
                thông báo trước.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Promotion/>
    </ContentLayout>
  );
};

export default SaleOffDetailScreen;

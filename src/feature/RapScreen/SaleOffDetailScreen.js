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
          <div>
            <h1 className="saleoff--title text-3xl font-bold text-center py-6">
              HỆ THỐNG RẠP
            </h1>
            <div class="about--us-content">
              <h3 class="content--title text-3xl font-bold py-6">BHD STAR PHẠM NGỌC THẠCH</h3>
              <div class="text--content">
                <ul>
                  <li>
                    <strong>Địa điểm:</strong>&nbsp;Tầng 8, Vincom Center Phạm
                    Ngọc Thạch, 02 Phạm Ngọc Thạch, P.Trung Tự, Quận Đống Đa, Hà
                    Nội
                  </li>
                  <li>
                    <strong>Số điện thoại:&nbsp;</strong>1900 2099 bấm phím 7
                    hoặc 024 3637 3355
                  </li>
                  <li>
                    <strong>Email:&nbsp;</strong>cskh@bhdstar.vn
                  </li>
                  <li>
                    <strong>Phòng chiếu:</strong> 7&nbsp;Phòng chiếu: bao gồm 01
                    phòng chiếu First Class và 6 phòng chiếu 2D &amp; 3D
                  </li>
                </ul>
                <p className="py-6">
                  <img
                    class="alignnone size-full wp-image-11851"
                    src="https://www.bhdstar.vn/wp-content/uploads/2016/07/BHD.Star_.Ticket-Price-2022-PNT.jpg"
                    alt=""
                  />
                </p>
                <p className="py-6">
                  <strong>CÁC QUY ĐỊNH GIÁ VÉ</strong>
                </p>
                <p>
                  – Giá vé trẻ em áp dụng cho trẻ em có chiều cao dưới 1,3m. Yêu
                  cầu trẻ em có mặt khi mua vé. Trẻ em dưới 0,7m sẽ được miễn
                  phí vé khi mua cùng 01 vé người lớn đi kèm theo. Không áp dụng
                  kèm với chương trình khuyến mãi ưu đãi về giá vé khác.
                  <br />
                  – Giá vé thành viên U22 chỉ áp dụng cho thành viên dưới 22
                  tuổi khi mua vé. Không áp dụng kèm với chương trình khuyến mãi
                  ưu đãi về giá vé khác. Mỗi thẻ thành viên U22 được áp dụng giá
                  vé ưu đãi tối đa 02 vé/ngày.
                  <br />
                  – Ngày lễ: 1/1, Giổ Tổ Hùng Vương 10/3 Âm Lịch, 30/4, 1/5,
                  2/9.
                  <br />
                  – Giá vé Tết Âm Lịch sẽ được áp dụng riêng.
                  <br />– Suất chiếu đặc biệt áp dụng giá vé theo khung giờ của
                  ngày. Không áp dụng các giá vé ưu đãi dành cho U22, Privilege
                  Voucher/Staff Voucher, Happy Day. Trong trường hợp Suất chiếu
                  đặc biệt cùng ngày với Happy Day sẽ áp dụng giá vé của Thứ 3
                </p>
              </div>
            </div>
          </div>
        </div>
        </Container>
        
      </div>

      <Promotion />
    </ContentLayout>
  );
};

export default SaleOffDetailScreen;

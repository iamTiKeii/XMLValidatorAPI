# Đánh giá sự khác biệt giữa Validation Rules hiện tại và Quyết định 3176/QĐ-BYT (Rule Gap Analysis)

Tài liệu này trình bày kết quả so sánh chi tiết giữa cấu trúc dữ liệu, các validation rules hiện tại trong mã nguồn của project (nằm trong thư mục `src/parsers/rules`) với đặc tả của Quyết định 3176/QĐ-BYT (được cung cấp dưới dạng các file JSON trong thư mục `ref/`).

---

## I. Tổng quan về các thay đổi cấu trúc XML theo QĐ 3176

Quyết định 3176/QĐ-BYT đưa ra nhiều thay đổi lớn về mặt cấu trúc dữ liệu và các quy định nghiệp vụ so với các phiên bản cũ:

1. **Bổ sung các bảng dữ liệu mới:**
   - **Bảng checkin (`xmlCheckIn.json`):** Thông báo trạng thái khám chữa bệnh ngay khi phát sinh chi phí đầu tiên.
   - **Bảng XML12 (`xml12.json`):** Chỉ tiêu dữ liệu giám định y khoa (dành cho các hội đồng giám định y khoa).
2. **Thay đổi cấu trúc trường trong XML13:**
   - Đổi tên trường: `MA_NOI_DI` thành `MA_CSKCB_DI`, `MA_NOI_DEN` thành `MA_CSKCB_DEN`, `PP_DIEU_TRI` thành `TINH_TRANG_CT`.
   - Loại bỏ các trường không còn trong đặc tả: `TEN_DICH_VU`, `TEN_THUOC`, `PP_DIEU_TRI` cũ.
3. **Đồng bộ hóa kiểu dữ liệu từ Số (number) sang Chuỗi (string):**
   - Rất nhiều trường mã hóa nghiệp vụ có độ dài cố định hoặc chứa số `0` ở đầu (như `MA_LOAI_KCB`, `MA_LOAI_RV`, `KET_QUA_DTRI`, `MA_TAI_NAN`, các trường phân loại lao của `XML15`, phân loại khuyết tật của `XML12`) được quy định kiểu dữ liệu là **Chuỗi (string)** thay vì **Số (number)** để bảo toàn giá trị và định dạng gốc khi truyền tải XML.
4. **Kiểm tra độ dài và định dạng thời gian dạng Chuỗi:**
   - Các trường ngày tháng/thời điểm được quy định là **Chuỗi** với độ dài cố định 8 ký tự (`yyyymmdd`) hoặc 12 ký tự (`yyyymmddHHMM`). Việc hệ thống tự động parse chúng thành đối tượng `Date` trong TypeScript làm mất các validation rule về định dạng chuỗi gốc này.

---

## II. Đánh giá chi tiết sự khác biệt (Gap Analysis)

### 1. Quy định nghiệp vụ & Rule còn thiếu (Missing Rules)

* **Thiếu hoàn toàn Model, Parser và Validation Rules cho 2 bảng mới:**
  - **Bảng checkin (`xmlCheckIn`):** Chưa có bất kỳ cấu trúc dữ liệu, trình phân tích cú pháp (Parser) hay rule kiểm tra nào.
  - **Bảng XML12 (`xml12`):** Chưa có Model, Parser hay logic kiểm tra giám định y khoa.
* **Thiếu các Rule kiểm tra trường chi tiết cho các bảng từ XML2 đến XML15:**
  - Hiện tại, project chỉ mới viết rule kiểm tra cho **XML1** (thư mục `src/parsers/rules/xml1` có 39 rule files).
  - Đối với các bảng còn lại (`XML2` đến `XML11`, `XML13` đến `XML15`), mặc dù đã có Parser và file `xmlXRuleRunner.ts` nhưng danh sách chạy rule (`private static readonly rules`) đang **trống rỗng**.
* **Các rule cụ thể bị thiếu trong XML1 (gồm 27 trường chưa được kiểm tra):**
  - `STT`, `MA_BN`, `NHOM_MAU`, `MAHUYEN_CU_TRU`, `NGAY_VAO` (chưa có rule kiểm tra riêng), `GIAY_CHUYEN_TUYEN`, `GHI_CHU`, `NGAY_TTOAN`.
  - Thiếu rule kiểm tra tổng chi phí liên quan đến bảo hiểm: `T_TONGCHI_BH`, `T_BNTT` (Tiền người bệnh tự trả), `T_BNCCT` (Tiền cùng chi trả), `T_BHTT` (Tiền bảo hiểm thanh toán), `T_NGUONKHAC`, `T_BHTT_GDV`.
  - Thiếu rule kiểm tra `MA_LOAI_KCB`, `MA_KHOA`, `MA_CSKCB`, `MA_KHUVUC`.
  - Thiếu rule kiểm tra `CAN_NANG`, `CAN_NANG_CON` (trường hợp sinh đôi sinh ba có định dạng danh sách số phân cách bằng dấu `;` như "3000;2800"), `NAM_NAM_LIEN_TUC`, `NGAY_TAI_KHAM` (cho phép hẹn nhiều ngày cách nhau bằng dấu `;`).
  - Thiếu rule kiểm tra `MA_HSBA`, `MA_TTDV`, `DU_PHONG`.

---

### 2. Rule đã lỗi thời (Outdated Rules)

* **Sử dụng mã `MA_LOAI_KCB` cũ trong logic tính ngày điều trị:**
  - File `Check_SO_NGAY_DTRI.ts` đang kiểm tra `MA_LOAI_KCB` bằng cách so sánh với các ký tự đơn: `'1', '2', '3', '4', '6', '7', '9'`.
  - Tuy nhiên, theo đặc tả mới của QĐ3176 (và thực tế XML trả về), mã loại khám chữa bệnh đã chuyển sang dạng chuỗi 2 chữ số: `'01', '02', '03', '04', '05', '06', '07', '08', '09'`. Việc dùng mã cũ khiến rule này bị bỏ qua hoặc so sánh sai.
* **Cấu trúc trường của XML13 trong codebase đã lỗi thời:**
  - Interface `Xml13Model` và parser `xml13.parser.ts` vẫn dùng các trường cũ: `MA_NOI_DI`, `MA_NOI_DEN`, `PP_DIEU_TRI` và chứa các trường thừa không còn trong QĐ3176 như `TEN_DICH_VU`, `TEN_THUOC`. Theo đặc tả mới, chúng phải được đổi thành `MA_CSKCB_DI`, `MA_CSKCB_DEN` và `TINH_TRANG_CT`.

---

### 3. Rule bị sai (Incorrect Rules)

* **Rule tính tổng tiền vật tư y tế (`Check_T_VTYT.ts`):**
  - **Sai công thức tính tổng:** Code hiện tại tính `totalVtyt` bằng cách sum toàn bộ trường `THANH_TIEN_BV` của tất cả các bản ghi trong `xml3` (`context.xml3!.reduce(...)`). Điều này sai vì `xml3` chứa cả Dịch vụ kỹ thuật (DVKT), giường bệnh, công khám lẫn Vật tư y tế (VTYT). Rule đúng phải lọc ra các bản ghi là VTYT thực sự (các bản ghi có trường `MA_VAT_TU` khác rỗng hoặc không undefined).
  - **Bắt lỗi sai điều kiện biên:** Rule đang kiểm tra `if (value <= 0) { return this.error('T_VTYT phải lớn hơn 0'); }`. Điều này sai vì một đợt điều trị có thể chỉ phát sinh dịch vụ kỹ thuật mà hoàn toàn không sử dụng vật tư y tế ngoài danh mục định mức, khi đó `T_VTYT` bằng `0` là hoàn toàn hợp lệ.
* **Mất khả năng validate độ dài/định dạng do parse sớm thành Date/Number:**
  - Ví dụ: `Check_SO_CCCD.ts` giới hạn độ dài `15` ký tự, trong khi QĐ3176 quy định độ dài của số định danh/Giấy khai sinh/Hộ chiếu có thể linh hoạt (đặc tả ghi độ dài `n`).
  - Trường `CAN_NANG_CON` trong `Xml1Model` đang định nghĩa là `number`, nhưng đặc tả QĐ3176 quy định kiểu dữ liệu là `Chuỗi` (độ dài 100) để ghi cân nặng của nhiều con khi sinh đôi/sinh ba (ví dụ: `3100;2900`). Nếu parser dùng `this.D('CAN_NANG_CON')` để chuyển thành số, giá trị sẽ bị biến thành `NaN` và báo lỗi sai kiểu dữ liệu.
  - Tương tự, `NAM_NAM_LIEN_TUC` và `NGAY_TAI_KHAM` được định nghĩa là `number`/`Date` trong TS model nhưng thực chất là chuỗi ký tự chứa định dạng ngày tháng có thể phân tách bằng dấu chấm phẩy.

---

### 4. Rule trùng lặp hoặc chồng chéo (Duplicate/Overlapping Rules)

* **Logic tính tổng tiền trong `xml3`:**
  - Logic tính tổng chi phí bệnh viện `T_TONGCHI_BV` (tổng XML2 + XML3) và `T_VTYT` (tổng XML3) đang có sự chồng chéo do cả hai đều duyệt qua mảng `xml3`. Do `T_VTYT` tính toán sai (sum toàn bộ `xml3` thay vì lọc VTYT), dẫn đến việc hai rule này trùng khớp một phần kết quả tính toán trên cùng một tập dữ liệu nhưng trả về thông tin mâu thuẫn.

---

## III. Bảng đối chiếu và Đề xuất cập nhật chi tiết

| Bảng XML | Trường dữ liệu | Rule hiện có trong code | Quy định theo QĐ 3176 | Khác biệt / Vấn đề | Đề xuất cập nhật |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **xmlCheckIn** | Tất cả 32 trường | Chưa có | Định nghĩa bảng trạng thái KBCB đầu tiên | Thiếu hoàn toàn | Tạo `XmlCheckInModel`, `xmlCheckIn.parser.ts`, `XmlCheckInRuleRunner` và bổ sung rule kiểm tra. |
| **xml1** | `MA_LOAI_KCB` | Chưa check | Chuỗi (2), nhận các giá trị từ `'01'` đến `'09'` | Thiếu rule kiểm tra danh mục | Thêm rule check mã loại KCB thuộc danh mục. |
| **xml1** | `SO_CCCD` | Check length > 15 | Chuỗi (n), cho phép để trống | Quy định độ dài cố định 15 là sai | Cho phép độ dài linh hoạt theo định danh/hộ chiếu/giấy khai sinh. |
| **xml1** | `SO_NGAY_DTRI` | Check công thức, so sánh `MA_LOAI_KCB` với `'1', '2', '3', '4', '6', '7', '9'` | Số ngày = `NGAY_RA - NGAY_VAO + 1`. Mã loại KCB dạng 2 chữ số. | So sánh sai mã loại KCB (lỗi thời) | Cập nhật so sánh sang mã `'01', '02', '03', '04', '06', '07', '09'`. |
| **xml1** | `T_VTYT` | Check `value <= 0` và so sánh với tổng toàn bộ `xml3` | Tổng thành tiền của VTYT trong `xml3` (bản ghi có `MA_VAT_TU`) | **Sai logic nghiêm trọng:** Sum cả dịch vụ và bắt lỗi khi `T_VTYT = 0` | Chỉ sum các dòng `xml3` có `MA_VAT_TU` và cho phép bằng `0` nếu không có VTYT. |
| **xml1** | `CAN_NANG_CON` | Parser đổi thành `number` | Chuỗi (100), ghi cân nặng nhiều con phân cách bằng `;` | **Lỗi runtime:** Sẽ bị `NaN` nếu sinh đôi/sinh ba | Đổi kiểu dữ liệu trong `Xml1Model` thành `string`. Parser dùng `this.S`. |
| **xml1** | Các trường tổng chi phí (`T_BNTT`, `T_BNCCT`, `T_BHTT`...) | Chưa check | Công thức liên kết: `T_BHTT = T_TONGCHI_BH - T_BNCCT` và tổng các bảng con | Thiếu rule kiểm tra công thức tài chính | Viết các rule class để đối chiếu tổng chi phí giữa XML1 và XML2, XML3. |
| **xml2** | Tất cả các trường | Chưa có logic chạy | Chi tiết sử dụng thuốc, máu, dịch truyền | Thiếu hoàn toàn validation rules | Viết các rule cho XML2 và đăng ký chạy trong `Xml2RuleRunner`. |
| **xml3** | Tất cả các trường | Chưa có logic chạy | Chi tiết DVKT, giường bệnh, vật tư | Thiếu hoàn toàn validation rules | Viết các rule cho XML3 (bao gồm check công thức thành tiền) và đăng ký chạy. |
| **xml12** | Tất cả 35 trường | Chưa có | Chỉ tiêu dữ liệu giám định y khoa | Thiếu hoàn toàn | Tạo `Xml12Model`, `xml12.parser.ts`, `Xml12RuleRunner` và bổ sung rule kiểm tra. |
| **xml13** | Cấu trúc trường | `MA_NOI_DI`, `MA_NOI_DEN`, `PP_DIEU_TRI` | `MA_CSKCB_DI`, `MA_CSKCB_DEN`, `TINH_TRANG_CT` | Sai lệch cấu trúc trường (lỗi thời) | Cập nhật Model, Parser và viết các rule kiểm tra mới cho XML13. |
| **xml15** | Các trường mã phân loại | Định nghĩa trong TS là `string` | Kiểu Số (1 hoặc 2), mã hóa danh mục lao | Type mismatch | Đảm bảo parser và rule kiểm tra đúng kiểu nghiệp vụ Số dạng chuỗi. |

---

## IV. Kết luận & Đề xuất kế hoạch triển khai

Hệ thống hiện tại đang đáp ứng tốt phần khung (Framework) phân tích XML nhưng logic nghiệp vụ và các rule kiểm tra chi tiết theo **Quyết định 3176/QĐ-BYT** mới chỉ được viết một phần ở XML1 và vẫn còn tồn tại các lỗi logic nghiêm trọng (như rule tính `T_VTYT`, so sánh mã `MA_LOAI_KCB`).

**Kế hoạch thực hiện tiếp theo (sau khi được xác nhận):**
1. Cập nhật file [xml-models.interface.ts](file:///Users/suns/Downloads/XMLCheck/XMLCHECK_Source/XMLValidator_v2/src/interfaces/xml-models.interface.ts) để thêm 2 bảng mới, cập nhật kiểu dữ liệu của các trường Type Mismatch và đổi tên các trường trong XML13.
2. Viết bổ sung 2 Parser mới cho `xmlCheckIn` và `xml12`, cập nhật parser `xml13`.
3. Sửa triệt để các rule bị sai trong XML1 (`Check_T_VTYT`, `Check_SO_NGAY_DTRI`).
4. Viết bổ sung các rule còn thiếu cho XML1 (các rule tài chính và trường thông tin thiếu) và triển khai dần validation rules cho các bảng còn lại (XML2 đến XML15).

export type OnbroadType = {
  id: number;
  image: any;
  title: string;
  description: string;
};

export const ONBROAD_DATA: OnbroadType[] = [
  {
    id: 1,
    image: require('../assets/images/splash_1.png'),
    title: 'Xem hàng triệu video đặc sắc hấp dẫn',
    description: 'Đa dạng chủ đề Nhạc, Phim, TVShow, Tin Tức, Sao',
  },
  {
    id: 2,
    image: require('../assets/images/splash_2.png'),
    title: 'Phát sóng trực tiếp các sự kiện giải trí hot',
    description: 'Hội tụ top streamers, KOLs và giải đấu Esport đỉnh cao',
  },
  {
    id: 3,
    image: require('../assets/images/splash_3.png'),
    title: 'Đăng tải và chia sẻ video mọi lúc mọi nơi',
    description: 'Dễ dàng lưu trữ và chia sẻ video với bạn bè',
  },
];

export const TERM_DATA = {
  title: 'Điều khoản sử dụng',
  content: `
    1. Quyền sở hữu Dịch vụ
  - Dịch vụ này được phát triển và sở hữu bởi Tập đoàn Công nghiệp - Viễn thông Quân đội, tất cả các quyền sở hữu trí tuệ liên quan đến Dịch vụ (bao gồm nhưng không giới hạn mã nguồn, hình ảnh, dữ liệu, thông tin, nội dung chứa đựng trong Dịch vụ; các sửa đổi bổ sung, cập nhật của Dịch vụ) và các tài liệu hướng dẫn liên quan (nếu có) sẽ thuộc quyền sở hữu duy nhất bởi Tập đoàn Công nghiệp - Viễn thông Quân đội và không cá nhân, tổ chức nào được phép sao chép, tái tạo, phân phối, hoặc hình thức khác xâm phạm tới quyền của chủ sở hữu nếu không có sự đồng ý và cho phép bằng văn bản của Tập đoàn Công nghiệp - Viễn thông Quân đội.
  - Để sử dụng Dịch vụ bạn phải tạo một tài khoản theo hướng dẫn của chúng tôi, bạn cam kết rằng việc sử dụng tài khoản phải tuân thủ các quy định của Tập đoàn Công nghiệp - Viễn thông Quân đội, đồng thời tất cả các thông tin bạn cung cấp cho chúng tôi là chính xác, đầy đủ tại thời điểm được yêu cầu. 
  - Mọi quyền lợi và nghĩa vụ của bạn sẽ căn cứ trên thông tin tài khoản của bạn đã đăng ký, do vậy nếu có bất kỳ thông tin sai lệch nào chúng tôi sẽ không chịu trách nhiệm trong trường hợp thông tin đó làm ảnh hướng hoặc hạn chế quyền lợi của bạn.
  - Với các khách hàng không có bất kỳ gói TV360 nào có thể xem các nội dung miễn phí trên TV360.
  - Bạn có quyền sử dụng Dịch vụ TV360 và các dịch vụ khác mà chúng tôi cung cấp, tuy nhiên việc sử dụng đó sẽ không bao gồm các hành vi sau đây nếu không có sự đồng ý bằng văn bản của Tập đoàn Công nghiệp - Viễn thông Quân đội:
  + Sao chép, chỉnh sửa, tái tạo ra sản phẩm mới hoặc phiên bản tái sinh trên cơ sở Dịch vụ TV360;
  + Bán, chuyển giao, cấp quyền lại, tiết lộ hoặc hình thức chuyển giao khác hoặc đưa một phần hoặc toàn bộ Dịch vụ TV360 cho bất kỳ bên thứ ba;
  + Sử dụng Dịch vụ TV360 để cung cấp dịch vụ cho bất kỳ bên thứ ba (tổ chức, cá nhân);
  + Di chuyển, xóa bỏ, thay đổi bất kỳ thông báo chính đáng hoặc dấu hiệu nào của Dịch vụ (bao gồm nhưng không giới hạn các tuyên bố về bản quyền);
  + Thiết kế lại, biên dịch, tháo gỡ, chỉnh sửa, đảo lộn thiết kế của Dịch vụ, hoặc nội dung Dịch vụ;
  + Thay đổi hoặc hủy bỏ trạng thái ban đầu của Dịch vụ;
  + Sử dụng Dịch vụ để thực hiện bất kỳ hành động gây hại cho hệ thống an ninh mạng của Tập đoàn Công nghiệp - Viễn thông Quân đội, bao gồm nhưng không giới hạn sử dụng dữ liệu hoặc truy cập vào máy chủ hệ thống mạng để xóa bỏ, chỉnh sửa và thêm các thông tin; phát tán các chương trình độc hại, virut hoặc thực hiện bất kỳ hành động nào khác nhằm gây hại hoặc phá hủy hệ thống mạng;
  + Đăng nhập và sử dụng Dịch vụ bằng một phần mềm tương thích của bên thứ ba hoặc hệ thống không được phát triển, cấp quyền hoặc chấp thuận bởi Tập đoàn Công nghiệp - Viễn thông Quân đội;
  + Sử dụng, bán, cho mượn, sao chép, chỉnh sửa, kết nối tới, phiên dịch, phát hành, công bố các thông tin;
  + Các hình thức vi phạm khác…
  
  2. Xử lý vi phạm
  - Trường hợp bạn vi phạm bất kỳ Quy định nào trong Thỏa thuận này, Tập đoàn Công nghiệp - Viễn thông Quân đội có quyền ngay lập tức khóa tài khoản của bạn và hoặc xóa bỏ toàn bộ các thông tin, nội dung vi phạm, đồng thời tùy thuộc vào tính chất, mức độ vi phạm bạn sẽ phải chịu trách nhiệm trước cơ quan có thẩm quyền, Tập đoàn Công nghiệp - Viễn thông Quân đội và bên thứ ba về mọi thiệt hại gây ra bởi hoặc xuất phát từ hành vi vi phạm của bạn.
  
  3. Thông tin về điều kiện giao dịch
  - Giới hạn về địa lý: sử dụng xem trên lãnh thổ nước Việt Nam.
  - Giới hạn về đối tượng sử dụng: chỉ áp dụng cho thuê bao di động mạng Viettel.
  - TV360 không có chính sách hoàn trả hoặc lấy lại tiền khi giao dịch mua gói cước đã được giao dịch.
  
  4. Thông tin vận chuyển và giao nhận 
  - Hình thức mua dịch vụ là trực tuyến trên Dịch vụ TV360. 
  - Dịch vụ được cung cấp theo thời gian thực, ngay khi thực hiện mua gói cước xong sẽ sử dụng được dịch vụ theo chính sách đã công bố.
  
  5. Thông tin về các phương thức thanh toán
  - Quý khách có thể xem miễn phí nội dung là các kênh truyền hình, phim truyện hay video do TV360 cung cấp. Nội dung các chương trình này có thể kèm thêm quảng cáo.
  - Đối với nội dung mất phí, khách hàng cần trả tiền trọn gói để xem các chương trình trong gói đó, chu kỳ tính theo ngày tuần hoặc tháng.
  - Khách hàng sẽ thanh toán một lần cho một gói cước để được xem toàn bộ nội dung trong gói cước đó với khoảng thời gian nhất định của gói cước.
  - Khi đăng ký gói cước, khách hàng sẽ được hưởng ưu đãi đặc biệt là “không mất phí Data 4G Viettel khi xem trên Dịch vụ TV360”.
  - Khi thực hiện đăng ký, khách hàng sẽ thực hiện 2 bước, cụ thể:
  + Bước 1: Yêu cầu Đăng Ký, hệ thống hiển thị popup thông báo gói cước, giá cước, chu kỳ gia hạn của dịch vụ và quyền lợi liên quan.
  + Bước 2: Xác Nhận đăng ký qua tin nhắn gửi lên đầu số 1331. Khi thực hiện thành công, hệ thống sẽ thông báo kết quả qua tin nhắn với đầy đủ thông tin gói cước, giá cước và chu kỳ gia hạn, quyền lợi liên quan khi sử dụng trên TV360.
  
    `,
};

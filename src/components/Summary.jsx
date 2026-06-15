import { Quote } from 'lucide-react';

export default function Summary() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-academic-ink mb-2">Tổng kết & Suy ngẫm</h2>
        <p className="text-academic-muted text-lg">Nhìn lại hành trình học tập và cam kết phát triển.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
          <Quote className="absolute top-4 right-4 text-slate-100 rotate-180" size={80} />
          <h3 className="text-xl font-bold text-academic-hero-blue mb-4 relative z-10">Kiến thức & Kỹ năng đã đạt được</h3>
          <p className="text-slate-700 leading-relaxed relative z-10 text-justify">
            "Thông qua việc hoàn thành 6 bài tập của học phần, em đã tiếp thu được nhiều kiến thức và kỹ năng quan trọng liên quan đến công nghệ số. Em hiểu rõ hơn về các thành phần của máy tính và thiết bị ngoại vi, cách khai thác thông tin trên Internet một cách hiệu quả, cũng như các nguyên tắc đánh giá độ tin cậy của nguồn thông tin. Bên cạnh đó, em còn được tiếp cận với trí tuệ nhân tạo (AI), hiểu được những lợi ích, hạn chế và cách sử dụng AI một cách phù hợp trong học tập.
<br />
  <br />
Về kỹ năng, em đã nâng cao khả năng tìm kiếm, chọn lọc và xử lý thông tin từ nhiều nguồn khác nhau. Em biết cách xây dựng Prompt để tương tác hiệu quả với các công cụ AI, sử dụng các nền tảng số để giao tiếp và hợp tác trực tuyến, đồng thời phát triển kỹ năng sáng tạo nội dung số thông qua việc thiết kế và trình bày sản phẩm học tập. Ngoài ra, em cũng hiểu rõ hơn về an toàn thông tin, bảo vệ dữ liệu cá nhân và các nguyên tắc liêm chính học thuật trong môi trường số.
<br />
  <br />
Những kiến thức và kỹ năng này không chỉ giúp em hoàn thành tốt các yêu cầu của học phần mà còn tạo nền tảng quan trọng cho quá trình học tập và phát triển nghề nghiệp trong tương lai."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-amber-400 border-x border-b border-x-slate-200 border-b-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Khó khăn gặp phải</h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              Khó nhất với em không phải là viết từng báo cáo, mà là gom tất cả lại thành một sản phẩm hoàn chỉnh. Khi đưa lên web, em phải chỉnh lại bố cục, màu sắc, phần minh chứng, bảng rubric và cả trang in PDF.
              Trong quá trình làm, em có dùng AI để hỗ trợ viết code, gợi ý giao diện và sửa nội dung. Tuy nhiên, em không dùng nguyên mọi thứ AI tạo ra. Em vẫn phải chạy thử, kiểm tra, chỉnh lại phần sai và thay các nội dung chung chung bằng thông tin thực tế của mình.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500 border-x border-b border-x-slate-200 border-b-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Kế hoạch hoàn thiện</h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              Sau khi hoàn thành web, em sẽ kiểm tra lại toàn bộ link báo cáo PDF để chắc chắn các file mở được đúng bài. Với những bài không có sản phẩm riêng, em sẽ ghi rõ rằng sản phẩm và minh chứng đã được trình bày trong báo cáo, không tạo thêm link hoặc nội dung không có thật.
              Em cũng sẽ kiểm tra bản PDF xuất từ portfolio để đảm bảo nội dung không bị thiếu khi nộp lên hệ thống.
            </p>
          </div>
        </div>

        <div className="bg-academic-navy text-white p-8 rounded-2xl shadow-lg mt-8 text-center">
          <h3 className="text-xl font-bold text-academic-cyan mb-3">Cam kết Liêm chính Học thuật</h3>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto italic">
            Em, Chu Quỳnh Anh, cam kết các báo cáo và nội dung trong portfolio này phản ánh quá trình học tập và thực hành của bản thân. Em có sử dụng AI như một công cụ hỗ trợ, chủ yếu để gợi ý cách trình bày, sửa code và kiểm tra nội dung.

            AI chỉ nên hỗ trợ, không thể thay thế hoàn toàn việc học. Em không tạo minh chứng giả, không ghi sản phẩm không có thật và không cố tình trình bày sai quá trình làm bài của mình!
            
            <br />
            Em cảm ơn thầy cô đã dành thời gian đọc những dòng này!
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

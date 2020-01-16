const data = [
    {
        title:"CHƯƠNG TRÌNH TÍCH HỢP",
        content:`
        Dạy học theo phương pháp Montessori không chỉ đơn thuần là dạy về các sự vật, sự việc, sự kiện và các quy tắc ngữ pháp. Nó còn liên quan đến việc phát triển cho học viên các kỹ năng và từ đó có thể tự khám phá bản than tạo động lực; khơi gợi đam mê.<br/>
        Dạy học theo phương pháp Montessori phát triển tư duy phản biện, kỹ năng giải quyết vấn đề và khả năng sáng tạo của học viên bằng cách khuyến khích học viên đặt câu hỏi, không chỉ về những gì đang học, mà còn tại sao cần phải học và cách học như thế nào.<br/>
        `
    },
    {
        title:"ĐA VĂN HÓA",
        content:`SLC là nơi giao thoa nền văn hoá Việt Nam và văn hoá Thế giới, nơi xây dựng ra sự tương đồng, kiến tạo nên sự thích nghi. `
    },
    {
        title:"KIẾN THỨC CÔNG NGHỆ- STEM",
        content:`Đối với học viên thiếu nhi, thiếu niên, chúng tôi giảng dạy thêm về STEM (Khoa học, Công nghệ, Kỹ thuật, Toán học) bao gồm ngôn ngữ cho Khoa học và Toán học.<br/>
                Học STEM cung cấp cho học viên một nền tảng vững chắc cho việc học và nghề nghiệp trong thế kỷ 21.<br/>
                SLC STEM ESL giúp học viên hiểu về ngôn ngữ của STEM, để chuẩn bị cho việc theo học tại các trường quốc tế tại Việt Nam hoặc đi du học ở các nước nói tiếng Anh như Canada, Úc, Anh  và Hoa Kỳ.<br/>
                `
    },
    {
        title:"ĐỘI NGŨ GIÁO VIÊN CHUYÊN NGHIỆP",
        content:`
        Tất cả giáo viên là những người có nhiều kinh nghiệm, chuyên nghiệp và có trình độ trong lĩnh vực giảng dạy.<br/>
        Đối với giáo viên nước ngoài đều có giấy phép lao động tại Việt Nam, thẻ tạm trú tai Việt Nam.<br/>
        Tất cả giáo viên đều tham gia những khoá đào tạo, tập huấn định kỳ nhằm nâng cao trình độ chuyên môn.<br/>
        `
    }
]
export const whyusReducer = (state=data,action)=>{
    switch (action.type) {
        case "getReasonData":
            return state;
    
        default:
            break;
    }
    return state;
}



const SYLABUS = [
    {
        title:"KINDERGARTEN",
        subTitle:"Tiếng Anh Mẫu Giáo",
        img:"kindergarten/background.jpg",
        content:[
            {
                img:"kindergarten/pic1.jpg",
                header:"Mục Tiêu",
                info:"SLC sử dung phương pháp Montessori lấy trẻ em làm trọng tâm, lấy khả năng tự học là nền tảng cơ sở"
            },
            {
                img:"kindergarten/pic2.jpg",
                header:"",
                info:"Chúng tôi chú trọng vào việc khai thác tiềm năng sẵn có, không áp đặt trẻ, giáo viên gợi ý hỗ trợ khả năng tự phát triển của trẻ vì bản thân mỗi trẻ từ khi sinh ra đã có khả năng tự học tuyệt vời."
            },
            {
                img:"kindergarten/pic3.jpg",
                header:"",
                info:"SLC tập trung vào 5 lĩnh vực: Hoạt động thực hành cuộc sống Hoạt động giác quan Toán học Ngôn ngữ Nghệ thuật"
            },
            {
                img:"kindergarten/pic4.jpg",
                header:"",
                info:"Chúng tôi khơi dậy niềm đam mê, mong mỏi được khám phá, độc lập giải quyết vấn đề. Trẻ phát triển tất cả các mảng : thính giác, thị giác, vận động từ các dung cụ học tập thiết kế riêng biệt theo phương pháp giáo dục Montessori kết quả là trẻ có cảm nhận về giác quan một cách tinh tế. Trẻ hiểu biết tất cả các khía cạnh của môi trường học tập và văn hoá."
            }
        ],
        fee:"kindergarten/fee.png",  
        time:"kindergarten/lotrinh.png",
        id:"kindergarten"
    },
    {
        title:"JUNIORS",
        subTitle:"Tiếng Anh Thiếu Nhi (6 tới 11 tuổi)",
        img:"junior/background.jpg",
        content:[
            {
                img:"kindergarten/pic1.jpg",
                header:"Mục Tiêu",
                info:"Chương trình Tiếng Anh thiếu nhi dành cho học viên lứa tuổi 6-11, vừa mới bắt đầu học Tiếng Anh."
            },
            {
                img:"kindergarten/pic2.jpg",
                header:"",
                info:"Chương trình bao gồm 4 cấp độ, tương ứng với cấp độ và nội dung tương thích với các bài thi Starters, Movers, Flyers của chương trình Cambridge."
            },
            {
                img:"kindergarten/pic3.jpg",
                header:"",
                info:"Chương trình của chúng tôi giúp khả năng ngôn ngữ của học viên phát triển một cách tự nhiên: học viên nhớ bài dễ dàng hơn, học Tiếng Anh một cách vui vẻ hơn và nói Tiếng Anh tự tin hơn. Học sinh được tăng cường tối đa tương tác tiếng Anh, phát triển nền tảng tư duy toàn cầu và nâng cao toàn diện 4 kỹ năng tiếng Anh."
            },
            {
                img:"kindergarten/pic4.jpg",
                header:"",
                info:"Với đội ngũ giảng viên nhiệt huyết, chuyên môn cao, hiểu tâm lý trẻ và hệ thống theo dõi tiến độ học tập sát sao, chương trình giúp học sinh phát huy tối đa tiềm lực cá nhân."
            }
        ],
        fee:"kindergarten/fee.png",  
        time:"kindergarten/lotrinh.png",
        id:"junior"
    },
    {
        title:"SENIOR",
        subTitle:"Tiếng Anh Thiếu Niên (12 tới 16 tuổi)",
        img:"senior/background.jpg",
        content:[
            {
                img:"kindergarten/pic1.jpg",
                header:"Mục Tiêu",
                info:"SLC sử dung phương pháp Montessori lấy trẻ em làm trọng tâm, lấy khả năng tự học là nền tảng cơ sở"
            },
            {
                img:"kindergarten/pic2.jpg",
                header:"",
                info:"Chúng tôi chú trọng vào việc khai thác tiềm năng sẵn có, không áp đặt trẻ, giáo viên gợi ý hỗ trợ khả năng tự phát triển của trẻ vì bản thân mỗi trẻ từ khi sinh ra đã có khả năng tự học tuyệt vời."
            },
            {
                img:"kindergarten/pic3.jpg",
                header:"",
                info:"SLC tập trung vào 5 lĩnh vực: Hoạt động thực hành cuộc sống , Hoạt động giác quan, Toán học, Ngôn ngữ, Nghệ thuật"
            },
            {
                img:"kindergarten/pic4.jpg",
                header:"",
                info:"Chúng tôi khơi dậy niềm đam mê, mong mỏi được khám phá, độc lập giải quyết vấn đề. Trẻ phát triển tất cả các mảng : thính giác, thị giác, vận động từ các dung cụ học tập thiết kế riêng biệt theo phương pháp giáo dục Montessori kết quả là trẻ có cảm nhận về giác quan một cách tinh tế. Trẻ hiểu biết tất cả các khía cạnh của môi trường học tập và văn hoá."
            }
        ],
        fee:"kindergarten/fee.png",  
        time:"kindergarten/lotrinh.png",
        id:"senior"
    },
    // {
    //     title:"",
    //     subTitle:"",
    //     img:"",
    //     content:[
    //         {
    //             img:"",
    //             info:""
    //         }
    //     ],
    //     fee:"",  
    //     time:"",
    //     id:""
    // },
    // {
    //     title:"",
    //     subTitle:"",
    //     img:"",
    //     content:[
    //         {
    //             img:"",
    //             info:""
    //         }
    //     ],
    //     fee:"",  
    //     time:"",
    //     id:""
    // },
  ]
const dataReducer = (state = SYLABUS,action)=>{
    switch (action.type) {
        case "load":
            state = action.value;
            break;
        case "getData":
            return state;
        default:
            break;
    }
    return state;
}
export default dataReducer;
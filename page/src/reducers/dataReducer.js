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
        id:"kindergarten"
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
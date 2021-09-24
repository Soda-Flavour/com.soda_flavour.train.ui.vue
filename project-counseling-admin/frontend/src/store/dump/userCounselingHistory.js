const userCounselingHistoryList = {
  result: {
    status: 200,
    message: "리스트 입니다.",
    data: {
      list: [
        {
          user_id: "나무나무",
          hasOngoing: true,
          counseling_type: "text",
          purchase_count: "3",
          number_of_times: "10/20",
          // expiration_date: "2020.10.30",
        },
        {
          user_id: "사과나무",
          hasOngoing: false,
          counseling_type: "text",
          purchase_count: "5",
          number_of_times: "3/20",
          // expiration_date: "2020.10.30",
        },
      ],
    },
  },
};

export default userCounselingHistoryList;

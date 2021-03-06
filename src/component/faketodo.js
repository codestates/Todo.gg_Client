const dummy = [
  { //! [0]
    projectInfo: {
      id: 0,
      title: "달성도 65% 이하 프로젝트",
      description: "비회원 상태로 작성한 정보는 저장되지 않습니다",
      start_date: "2020-02-02",
      end_date: "2020-03-03",
      contributers: [ //* member
        {
          id: 0,
          project_id: 0,
          taskCard_id: 0,
          user_id: 1,
          user: {
            id: 1,
            profile: "/static/media/avt_15.b09a1586.png",
            username: "아무개1"
          }
        },
        {
          id: 1,
          project_id: 0,
          taskCard_id: 0,
          user_id: 2,
          user: {
            id: 2,
            profile: "/static/media/avt_13.58096983.png",
            username: "아무개2"
          }
        },
        {
          id: 2,
          project_id: 0,
          taskCard_id: 0,
          user_id: 3,
          user: {
            id: 3,
            profile: "/static/media/avt_9.ee26d074.png",
            username: "아무개3"
          }
        },
        {
          id: 3,
          project_id: 0,
          taskCard_id: 0,
          user_id: 4,
          user: {
            id: 4,
            profile: "/static/media/avt_5.6b67b02a.png",
            username: "아무개4"
          }
        },
        {
          id: 4,
          project_id: 0,
          taskCard_id: 0,
          user_id: 5,
          user: {
            id: 5,
            profile: "/static/media/avt_11.3e37ca43.png",
            username: "아무개5"
          }
        },
        {
          id: 5,
          project_id: 0,
          taskCard_id: 0,
          user_id: 6,
          user: {
            id: 6,
            profile: "/static/media/avt_10.4aa1a052.png",
            username: "아무개6"
          }
        },
      ],
      taskCards:
        [
          {
            id: 0,
            content: "task_card_00",
            state: "done",
            project_id: 0,
            position: 10,
            contributers: [] //* 태스크 맡은 사람, 복수 가능
          },
          {
            id: 1,
            content: "task_card_01",
            state: "inprogress",
            project_id: 0,
            position: 3,
            contributers: []
          },
          {
            id: 2,
            content: "task_card_02",
            state: "todo",
            project_id: 0,
            position: 2,
            contributers: []
          },
          {
            id: 3,
            content: "우하단 버튼을 통해 담당 인원을 추가 할 수 있수 있고 추가 된 이미지를 클릭 해 삭제 할 수 있습니다",
            state: "done",
            project_id: 0,
            position: 99,
            contributers: [
              {
                id: 5,
                project_id: 0,
                taskCard_id: 6,
                user_id: 4,
                user: {
                  id: 4,
                  profile: "/static/media/avt_0.59701f8c.png",
                  username: "아무개4"
                }
              },
              {
                id: 4,
                project_id: 0,
                taskCard_id: 6,
                user_id: 1,
                user: {
                  id: 1,
                  profile: "/static/media/avt_15.b09a1586.png",
                  username: "아무개1"
                }
              }
            ]
          },
          {
            id: 4,
            content: "task_card_04",
            state: "done",
            project_id: 0,
            position: 6,
            contributers: []
          },
          {
            id: 5,
            content: "우측의 버튼을 통해 카드의 내용을 수정/삭제 할 수 있습니다",
            state: "inprogress",
            project_id: 0,
            position: 99,
            contributers: [
            ]
          },
          {
            id: 6,
            content: "프로젝트에 참여 중인 인원은 프로젝트 관리 페이지에서 확인 할 수 있습니다",
            state: "todo",
            project_id: 0,
            position: 99,
            contributers: [
              {
                id: 2,
                project_id: 0,
                taskCard_id: 1,
                user_id: 3,
                user: {
                  id: 3,
                  profile: "/static/media/avt_9.ee26d074.png",
                  username: "아무개3"
                }
              }
            ]
          },
        ],
    },
    taskCardCount: {
      todo: 2,
      inprogress: 2,
      done: 3,
      project_id: 0
    },
  },
  { //! [1]
    projectInfo: {
      id: 1,
      title: "달성도 99% 미만 프로젝트",
      description: "비회원 상태로 작성한 정보는 저장되지 않습니다",
      start_date: "2020-02-02",
      end_date: "2020-03-03",
      contributers: [
        {
          id: 0,
          project_id: 1,
          taskCard_id: 0,
          user_id: 1,
          user: {
            id: 1,
            profile: "/static/media/avt_15.b09a1586.png",
            username: "아무개1"
          }
        },
        {
          id: 1,
          project_id: 1,
          taskCard_id: 0,
          user_id: 2,
          user: {
            id: 2,
            profile: "/static/media/avt_13.58096983.png",
            username: "아무개2"
          }
        },
        {
          id: 2,
          project_id: 1,
          taskCard_id: 0,
          user_id: 3,
          user: {
            id: 3,
            profile: "/static/media/avt_9.ee26d074.png",
            username: "아무개3"
          }
        },
        {
          id: 3,
          project_id: 1,
          taskCard_id: 0,
          user_id: 4,
          user: {
            id: 4,
            profile: "/static/media/avt_5.6b67b02a.png",
            username: "아무개4"
          }
        },
        {
          id: 4,
          project_id: 1,
          taskCard_id: 0,
          user_id: 5,
          user: {
            id: 5,
            profile: "/static/media/avt_11.3e37ca43.png",
            username: "아무개5"
          }
        },
        {
          id: 5,
          project_id: 1,
          taskCard_id: 0,
          user_id: 6,
          user: {
            id: 6,
            profile: "/static/media/avt_10.4aa1a052.png",
            username: "아무개6"
          }
        },
        {
          id: 6,
          project_id: 1,
          taskCard_id: 0,
          user_id: 7,
          user: {
            id: 7,
            profile: "/static/media/avt_0.59701f8c.png",
            username: "아무개7"
          }
        },
        {
          id: 7,
          project_id: 1,
          taskCard_id: 0,
          user_id: 8,
          user: {
            id: 8,
            profile: "/static/media/avt_13.58096983.png",
            username: "아무개8"
          }
        },
      ],
      taskCards:
      [
          {
            id: 0,
            content: "우하단 버튼을 통해 담당 인원을 추가 할 수 있수 있고 추가 된 이미지를 클릭 해 삭제 할 수 있습니다",
            state: "done",
            project_id: 1,
            position: 99,
            contributers: [
              {
                id: 5,
                project_id: 1,
                taskCard_id: 3,
                user_id: 4,
                user: {
                  id: 4,
                  profile: "/static/media/avt_9.ee26d074.png",
                  username: "아무개4"
                }
              },
              {
                id: 4,
                project_id: 1,
                taskCard_id: 3,
                user_id: 1,
                user: {
                  id: 1,
                  profile: "/static/media/avt_15.b09a1586.png",
                  username: "아무개1"
                }
              }
            ]
          },
          {
            id: 1,
            content: "task_card_01",
            state: "done",
            project_id: 1,
            position: 6,
            contributers: []
          },
          {
            id: 2,
            content: "프로젝트에 참여 중인 인원은 프로젝트 관리 페이지에서 확인 할 수 있습니다",
            state: "todo",
            project_id: 1,
            position: 5,
            contributers: []
          },
          {
            id: 3,
            content: "task_card_03",
            state: "done",
            project_id: 1,
            position: 7,
            contributers: []
          },
          {
            id: 4,
            content: "task_card_04",
            state: "done",
            project_id: 1,
            position: 4,
            contributers: []
          },
          {
            id: 5,
            content: "task_card_05",
            state: "done",
            project_id: 1,
            position: 0,
            contributers: []
          },
          {
            id: 6,
            content: "우측의 버튼을 통해 카드의 내용을 수정/삭제 할 수 있습니다",
            state: "inprogress",
            project_id: 1,
            position: 2,
            contributers: [
            ]
          },
          {
            id: 7,
            content: "task_card_07",
            state: "done",
            project_id: 1,
            position: 10,
            contributers: []
          },
          {
            id: 8,
            content: "task_card_08",
            state: "done",
            project_id: 1,
            position: 13,
            contributers: [
              {
                id: 2,
                project_id: 1,
                taskCard_id: 1,
                user_id: 3,
                user: {
                  id: 3,
                  profile: "/static/media/avt_9.ee26d074.png",
                  username: "아무개3"
                }
              }
            ]
          },
        ],
    },
    taskCardCount: {
      todo: 1,
      inprogress: 1,
      done: 7,
      project_id: 1
    },
  },
  { //! [2]
    projectInfo: {
      id: 2,
      title: "달성도 100% 프로젝트",
      description: "비회원 상태로 작성한 정보는 저장되지 않습니다",
      start_date: "2020-02-02",
      end_date: "9999-01-01",
      contributers: [
        {
          id: 0,
          project_id: 2,
          taskCard_id: 0,
          user_id: 1,
          user: {
            id: 1,
            profile: "/static/media/avt_15.b09a1586.png",
            username: "아무개1"
          }
        },
        {
          id: 1,
          project_id: 2,
          taskCard_id: 0,
          user_id: 2,
          user: {
            id: 2,
            profile: "/static/media/avt_13.58096983.png",
            username: "아무개2"
          }
        },
        {
          id: 2,
          project_id: 2,
          taskCard_id: 0,
          user_id: 3,
          user: {
            id: 3,
            profile: "/static/media/avt_9.ee26d074.png",
            username: "아무개3"
          }
        },
        {
          id: 3,
          project_id: 2,
          taskCard_id: 0,
          user_id: 4,
          user: {
            id: 4,
            profile: "/static/media/avt_5.6b67b02a.png",
            username: "아무개4"
          }
        },
        {
          id: 4,
          project_id: 2,
          taskCard_id: 0,
          user_id: 5,
          user: {
            id: 5,
            profile: "/static/media/avt_11.3e37ca43.png",
            username: "아무개5"
          }
        },
        {
          id: 5,
          project_id: 2,
          taskCard_id: 0,
          user_id: 6,
          user: {
            id: 6,
            profile: "/static/media/avt_10.4aa1a052.png",
            username: "아무개6"
          }
        },
      ],
      taskCards:
        [
          {
            id: 0,
            content: "프로젝트에 참여 중인 인원은 프로젝트 관리 페이지에서 확인 할 수 있습니다",
            state: "done",
            position: 9,
            project_id: 2,
            contributers: []
          },
          {
            id: 1,
            content: "우측의 버튼을 통해 카드의 내용을 수정/삭제 할 수 있습니다",
            state: "done",
            project_id: 2,
            position: 8,
            contributers: []
          },
          {
            id: 2,
            content: "task_card_02",
            state: "done",
            project_id: 2,
            position: 7,
            contributers: []
          },
          {
            id: 3,
            content: "task_card_03",
            state: "done",
            project_id: 2,
            position: 6,
            contributers: []
          },
          {
            id: 4,
            content: "우하단 버튼을 통해 담당 인원을 추가 할 수 있수 있고 추가 된 이미지를 클릭 해 삭제 할 수 있습니다",
            state: "done",
            project_id: 2,
            position: 99,
            contributers: [
              {
                id: 5,
                project_id: 2,
                taskCard_id: 3,
                user_id: 4,
                user: {
                  id: 4,
                  profile: "/static/media/avt_9.ee26d074.png",
                  username: "아무개4"
                }
              },
              {
                id: 4,
                project_id: 2,
                taskCard_id: 3,
                user_id: 1,
                user: {
                  id: 1,
                  profile: "/static/media/avt_15.b09a1586.png",
                  username: "아무개1"
                }
              }
            ]
          },
          {
            id: 5,
            content: "task_card_05",
            state: "done",
            project_id: 2,
            position: 4,
            contributers: []
          },
          {
            id: 6,
            content: "task_card_06",
            state: "done",
            project_id: 2,
            position: 3,
            contributers: []
          },
        ],
    },
    taskCardCount: {
      todo: 0,
      inprogress: 0,
      done: 7,
      project_id: 2
    },
  },
]

export default dummy;

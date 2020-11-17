import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);



function loadView(view) {
  // eslint-disable-next-line prettier/prettier
  return () => import( /* webpackChunkName: "view-[request]" */ `@/views${view}`);
}



const routes = [{
    path: "/",
    name: "",
    meta: {
      requiresAuth: true,
      is_admin: true,
    },

    component: () => import( /* webpackChunkName: "create" */ "../components/ContainerWithNav.vue"),
    children: [{
      path: '/',
      name: 'home',
      component: loadView("/Home.page.vue"),
    }]
  },
  {
    path: "/create",
    name: "create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "create" */ "../views/faq/Create.page.vue"),
  },
  {
    path: "/update/:id",
    name: "update",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "update" */ "../views/faq/Update.page.vue"),
  },

  {
    path: "/mypage",
    name: "mypage",
    meta: {
      requiresAuth: true,
      is_admin: true,
    },
    component: () => import( /* webpackChunkName: "create" */ "../components/ContainerWithNav.vue"),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: loadView('/login/Login.page.vue')
    children: [{
        path: "activity",
        name: "my_page-activity",
        component: loadView("/my_page/activity/Activity.page.vue"),
      },
      {
        path: "my_info",
        name: "my_page-my_info",
        component: loadView("/my_page/my_info/MyInfo.page.vue"),
      },
      {
        path: "review",
        name: "my_page-review",
        component: loadView("/my_page/review/Review.page.vue"),
      },
      {
        path: "settlement_details",
        name: "my_page-settlement_details",
        component: loadView("/my_page/settlement_details/SettlementDetails.page.vue"),
      },
    ],
  },
  {
    path: "/counseling_management",
    name: "counseling_management",
    component: () => import( /* webpackChunkName: "create" */ "../components/ContainerWithNav.vue"),
    meta: {
      requiresAuth: true,
      is_admin: true,
    },
    // component: {
    //   render(c) {
    //     return c("router-view");
    //   },
    // },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: loadView('/login/Login.page.vue')
    children: [{
        path: "consultation_detail",
        name: "counseling_management-consultation_detail",
        component: loadView("/counseling_management/consultation_detail/ConsultationDetail.page.vue"),
      },
      {
        path: "consultation_chatting",
        name: "counseling_management-consultation_chatting",
        component: loadView("/counseling_management/chatting/Chatting.page.vue"),
      },
      {
        path: "details_of_client",
        name: "counseling_management-details_of_client",
        component: loadView("/counseling_management/details_of_client/DetailsOfClient.page.vue"),
      },
      {
        path: "ongoing",
        name: "counseling_management-ongoing",
        component: loadView("/counseling_management/ongoing/Ongoing.page.vue"),
      },
      {
        path: "reservation",
        name: "counseling_management-reservation",
        component: loadView("/counseling_management/reservation/Reservation.page.vue"),
      },
      {
        path: "terminated",
        name: "counseling_management-terminated",
        component: loadView("/counseling_management/terminated/Terminated.page.vue"),
      },
    ],
  },
  {
    path: "/product_management",
    name: "product_management",
    meta: {
      requiresAuth: true,
      is_admin: true,
    },
    component: () => import( /* webpackChunkName: "create" */ "../components/ContainerWithNav.vue"),
    component: {
      render(c) {
        return c("router-view");
      },
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: loadView('/login/Login.page.vue')
    children: [{
        path: "telephone",
        name: "product_management-telephone",
        component: loadView("/product_management/telephone/Telephone.page.vue"),
      },
      {
        path: "textual",
        name: "product_management-textual",
        component: loadView("/product_management/textual/Textual.page.vue"),
      },
    ],
  },
  {
    path: "/help_center",
    name: "help_center",
    meta: {
      requiresAuth: true,
      is_admin: true,
    },
    component: () => import( /* webpackChunkName: "create" */ "../components/ContainerWithNav.vue"),
    component: {
      render(c) {
        return c("router-view");
      },
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: loadView('/login/Login.page.vue')
    children: [{
        path: "disability_report",
        name: "help_center-disability_report",
        component: loadView("/help_center/disability_report/DisabilityReport.page.page.vue"),
      },
      {
        path: "how_to_use",
        name: "help_center-how_to_use",
        component: loadView("/help_center/how_to_use/HowToUse.page.vue"),
      },
      {
        path: "notice",
        name: "help_center-notice",
        component: loadView("/help_center/notice/Notice.page.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: {
      requiresAuth: false,
      is_admin: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: loadView("/login/Login.page.vue"),
    // component: () => import('../views/login/Login.page.vue'),
    component: () => import( /* webpackChunkName: "login" */ '../views/login/Login.page.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});



router.beforeEach((to, from, next) => {


  // console.log('beforeEach')
  // console.log('to', to)
  // console.log('from', from)
  if (sessionStorage.getItem('teacher_access_token') == null) {
    if (to.name !== 'login') {
      next({
        name: "login"
      })
    }
  }
  next();






  // //requiresAuth == true 확인
  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   console.log('1')
  //   // 스토리지의 로그인 토큰 확인
  //   if (sessionStorage.getItem('teacher_access_token') == null) {
  //     //토큰 X 로그인 페이지로 이동
  //     next({
  //       path: "/login",
  //       // query: {
  //       //   redirect: to.fullPath
  //       // },
  //     })
  //   } else {
  //     //토큰 존재 진행
  //     next();
  //   }
  // } else {

  //   //로그인된 유저는 접근 금지
  //   //토큰이 있는지 확인 
  //   //토큰이 있다면 이전 페이지로 되돌리기
  //   //토큰이 없다면 로그인 페이지로 이동
  //   console.log(to.matched.some((record) => record.meta.requiresAuth))
  //   if (sessionStorage.getItem('teacher_access_token') == null) {

  //     console.log('토큰이 없습니다.')
  //   }



  //   // if (sessionStorage.getItem('teacher_access_token') == null) {
  //   //   //토큰 X 로그인 페이지로 이동
  //   //   next({
  //   //     path: "/login",
  //   //     // query: {
  //   //     //   redirect: to.fullPath
  //   //     // },
  //   //   })
  //   // } else {
  //   //   //토큰 존재 진행
  //   //   next(from.name);
  //   // }
  //   // //회원가입 페이지만 접속 가능
  //   // if (to.name !== 'login') {
  //   //   next({
  //   //     path: "/login",
  //   //     // query: {
  //   //     //   redirect: to.fullPath
  //   //     // },
  //   //   })
  //   // }
  // }
  // // next();

});



export default router;

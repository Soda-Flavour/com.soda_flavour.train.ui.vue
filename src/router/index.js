import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.page.vue";
import store from "../store/index";

Vue.use(VueRouter);

function loadView(view) {
  // eslint-disable-next-line prettier/prettier
  return () => import( /* webpackChunkName: "view-[request]" */ `@/views${view}`);
}

const rejectAuthUser = (to, from, next) => {
  const {
    isLogin
  } = store.state.auth;
  if (isLogin === "true") {
    console.log("진입");
    alert("로그인된 유저입니다.");
    next("/");
  } else {
    next();
  }
};
const onlyAuthUser = (to, from, next) => {
  const {
    isLogin
  } = store.state.auth;
  if (isLogin === "true") {
    next();
  } else {
    next("/login");
  }
};

const routes = [{
    path: "/",
    name: "home",
    beforeEnter: onlyAuthUser,
    component: Home,
  },
  {
    path: "/create",
    name: "create",
    beforeEnter: onlyAuthUser,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "create" */ "../views/faq/Create.page.vue"),
  },
  {
    path: "/update/:id",
    name: "update",
    beforeEnter: onlyAuthUser,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "update" */ "../views/faq/Update.page.vue"),
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: rejectAuthUser,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadView("/login/Login.page.vue"),
    // component: () => import( /* webpackChunkName: "login" */ '../views/login/Login.page.vue'),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    beforeEnter: onlyAuthUser,
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
    component: {
      render(c) {
        return c("router-view");
      },
    },
    beforeEnter: onlyAuthUser,
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
    component: {
      render(c) {
        return c("router-view");
      },
    },
    beforeEnter: onlyAuthUser,
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
    component: {
      render(c) {
        return c("router-view");
      },
    },
    beforeEnter: onlyAuthUser,
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
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

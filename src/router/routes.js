const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "Index"
      },
      {
        path: "monitor",
        component: () => import("pages/Monitor.vue"),
        name: "Monitor"
      },
      {
        path: "login",
        component: () => import("pages/Login.vue"),
        name: "Login"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

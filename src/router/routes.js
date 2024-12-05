export default [
  {
    path: "/",
    meta: {
      layout: "default",
      auth: true,
    },
    redirect: "/dashboard",
    component: () => import("@/pages/Home.vue"),

    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/pages/Dashboard.vue"),
      },
      {
        path: "/sponsors",
        name: "Sponsors",
        component: () => import("@/pages/Sponsors.vue"),
      },

      {
        path: "/students",
        name: "Students",
        component: () => import("@/pages/Students.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/pages/Login.vue"),
    meta: {
      layout: "auth",
      auth: false,
    },
  },
  {
    path: "/sponsors/sponsorinfo/:sponsorId",
    name: 'SponsorInfo',
    component: () => import("@/pages/Sponsor/PSponsorInfo.vue"),
    meta: {
      layout: "default",
      auth: true,
      single: false
    },
  },


  {
    path: "/students/studentinfo/:studentId",
    name: 'StudentInfo',
    component: () => import("@/pages/PStudentInfo.vue"),
    meta: {
      layout: "default",
      auth: true,
      single: false
    },
  },


  {
    path: "/students/addstudent",
    component: () => import("@/pages/AddStudent.vue"),
    meta: {
      layout: "default",
      auth: true,
      single: false
    },
  },
  {
    path: "/addstudent/studentinfo/",
    name: '',
    component: () => import("@/pages/PStudentInfo.vue"),
    meta: {
      layout: "default",
      auth: true,
      single: false
    },
  }
 
]

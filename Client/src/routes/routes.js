/* eslint-disable prettier/prettier */
import DashboardLayout from 'src/pages/Layouts/Dashboard/DashboardLayout.vue';
// import AuthLayout from 'src/pages/Layouts/Auth/AuthLayout.vue';
// Frontend Layout
import FrontendLayout from 'src/pages/Layouts/Frontend/FrontendLayout.vue';
// GeneralViews
import NotFound from 'src/pages/Layouts/NotFound/NotFoundPage.vue';

//////////////////////////////////////////////////////////////////////
///////////////////////////// MY PAGES ///////////////////////////////

const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ 'src/pages/Dashboard/Dashboard.vue');

const Courses = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/Courses/Courses.vue');

const SingleLesson = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/SingleLesson/SingleLesson.vue');

const Quiz = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/Quiz/Quiz.vue');

const Points = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/Points/Points.vue');

const CourseOverview = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/AdminSection/ManageCourses/CourseOverview.vue');

const EpisodeOverview = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/AdminSection/ManageEpisodes/EpisodeOverview.vue');

const ManageUsers = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/AdminSection/ManageUsers/ManageUsers.vue');

const BlogOverview = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/AdminSection/ManageBlogs/BlogOverview.vue');

const QuizOverview = () =>
  import(/* webpackChunkName: "extra" */ 'src/pages/AdminSection/ManageQuizzes/QuizOverview.vue');

//////////////////////////////////////////////////////////////////////
///////////////////////////// FRONTEND PAGES /////////////////////////

const Home = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/FrontendPages/Home.vue');

const PrivateClasses = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/FrontendPages/PrivateClasses.vue');

const Meetups = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/FrontendPages/Meetups.vue');

const Contact = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/FrontendPages/Contact.vue');

const OurCourses = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/FrontendPages/OurCourses.vue');

const BlogPageSample = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/FrontendPages/Components/Blog/BlogPageSample.vue');

const Terms = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/FrontendPages/Components/Terms/Terms.vue');

//////////////////////////////////////////////////////////////////////
//////////////////////////////// PAGES ///////////////////////////////

const Login = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/Login/Login.vue');

const Register = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/Register/Register.vue');

const ForgotPassword = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/Login/ForgotPassword.vue');

const Lock = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/Layouts/Lock/Lock.vue');

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

let frontendpages = {
  path: '/',
  component: FrontendLayout,
  name: 'Frontend',
  children: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/privateclasses',
      name: 'PrivateClasses',
      component: PrivateClasses
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/ourcourses',
      name: 'OurCourses',
      component: OurCourses
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/blogpagesample',
      name: 'BlogPageSample',
      component: BlogPageSample
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgotpassword',
      name: 'Forgot Password',
      component: ForgotPassword
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/lock',
      name: 'Lock',
      component: Lock
    }
  ]
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// let authPages = {
//   path: '/',
//   component: AuthLayout,
//   name: 'Authentication',
//   children: [{
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       component: Register
//     },
//     {
//       path: '/lock',
//       name: 'Lock',
//       component: Lock
//     }
//   ]
// };

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home'
  },
  frontendpages,
  // authPages,

  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    name: 'Dashboard',
    meta: {
      auth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        components: {
          default: Dashboard
        }
      },
      {
        path: 'courses',
        name: 'Courses',
        components: {
          default: Courses
        }
      },
      // {
      //   path: 'courses/:slug',
      //   name: 'Single Lesson',
      //   components: {
      //     default: SingleLesson
      //   }
      // },
      {
        path: 'SingleLesson/',
        name: 'Single Lesson',
        components: {
          default: SingleLesson
        }
      },
      {
        path: 'quiz',
        name: 'Quiz',
        components: {
          default: Quiz
        }
      },
      {
        path: 'courseoverview',
        name: 'CourseOverview',
        components: {
          default: CourseOverview
        }
      },
      {
        path: 'episodeoverview',
        name: 'EpisodeOverview',
        components: {
          default: EpisodeOverview
        }
      },
      {
        path: 'manageusers',
        name: 'Manage Users',
        components: {
          default: ManageUsers
        }
      },
      {
        path: 'blogoverview',
        name: 'Blog Overview',
        components: {
          default: BlogOverview
        }
      },
      {
        path: 'quizoverview',
        name: 'Quiz Overview',
        components: {
          default: QuizOverview
        }
      },
      {
        path: 'points',
        name: 'Points',
        components: {
          default: Points
        }
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;

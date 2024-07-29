import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const PersonalProfile = Loadable(lazy(() => import('pages/profiles/user/PersonalProfile')));

// render - sample page
const ContactsPage = Loadable(lazy(() => import('pages/contacts/contacts-page')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const BookPage = Loadable(lazy(() => import('pages/extra-pages/book-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'contacts-page',
      element: <ContactsPage />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'book-page',
      element: <BookPage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: '/profiles/user/personal',
      element: <PersonalProfile />
    },
    {
      path: 'typography',
      element: <Typography />
    }
  ]
};

export default MainRoutes;

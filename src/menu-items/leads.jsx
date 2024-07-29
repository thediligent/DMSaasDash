// assets
import { ChromeOutlined, ContactsOutlined, UsergroupAddOutlined, TableOutlined, QuestionOutlined, BookOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  TableOutlined,
  ContactsOutlined,
  UsergroupAddOutlined,
  QuestionOutlined,
  BookOutlined
};

// ==============================|| MENU ITEMS - Contacts ||============================== //

const support = {
  id: 'CRM',
  title: 'CRM',
  type: 'group',
  children: [
    {
      id: 'contacts-page',
      title: 'Contacts',
      type: 'item',
      url: '/contacts-page',
      icon: icons.TableOutlined
    },
    {
      id: 'sample-pa',
      title: 'Leads',
      type: 'item',
      url: '/sample-page',
      icon: icons.UsergroupAddOutlined
    },
    {
      id: 'sample-p',
      title: 'Customers',
      type: 'item',
      url: '/sample-page',
      icon: icons.ContactsOutlined 
    },
    {
      id: 'documention',
      title: 'Documentation',
      type: 'item',
      url: 'https://brand.diligentmarketing.solutions/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;

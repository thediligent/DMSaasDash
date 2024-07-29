// assets
import { ChromeOutlined, QuestionOutlined, BookOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  BookOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'Resources',
  title: 'Resources',
  type: 'group',
  children: [
    {
      id: 'book-page',
      title: 'Books Page',
      type: 'item',
      url: '/book-page',
      icon: icons.BookOutlined
    },
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
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

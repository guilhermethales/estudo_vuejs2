import Hello from '@/components/Hello';
import AccountsList from '../components/Accounts/list';
import AccountsView from '../components/Accounts/view';

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
  },
  {
    path: '/contas',
    name: 'List',
    component: AccountsList,
  },
  {
    path: '/contas/:id',
    name: 'View',
    component: AccountsView,
  },
];

export default routes;

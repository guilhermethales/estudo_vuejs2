import Hello from '@/components/Hello';
import AccountsList from '../components/Accounts/list';
import AccountsView from '../components/Accounts/view';
import AccountsCreate from '../components/Accounts/create';
import AccountsEdit from '../components/Accounts/edit';

const routes = [
  { path: '/', name: 'Hello', component: Hello },
  { path: '/contas', name: 'List', component: AccountsList },
  { path: '/contas/novo', name: 'Create', component: AccountsCreate },
  { path: '/contas/:id', name: 'View', component: AccountsView },
  { path: '/contas/:id/editar', name: 'Edit', component: AccountsEdit },
];

export default routes;

import Hello from '@/components/Hello';
import AccountsList from '@/components/Accounts/List';
import AccountsView from '@/components/Accounts/View';
import AccountsCreate from '@/components/Accounts/Create';
import AccountsEdit from '@/components/Accounts/Edit';
import BanksList from '@/components/Banks/List';
import Login from '@/components/Login/Form';

const routes = [
  // ACCOUTS

  { path: '/', name: 'Hello', component: Hello },
  { path: '/contas', name: 'List', component: AccountsList },
  { path: '/contas/novo', name: 'Create', component: AccountsCreate },
  { path: '/contas/:id', name: 'View', component: AccountsView },
  { path: '/contas/:id/editar', name: 'Edit', component: AccountsEdit },

  // BANKS
  { path: '/bancos', name: 'List', component: BanksList },

  // LOGIN
  { path: '/login', name: 'Login', component: Login }
];

export default routes;

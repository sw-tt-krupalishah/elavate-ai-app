export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    id: 'create your own app ',
    icon: 'iconsminds-air-balloon-1',
    label: 'Create app',
    to: '/app/pages',
  },
  {
    id: 'second-menu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'Api createtion',
    to: '/app/second-menu',
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'Marketing',
    to: '/app/blank-page'
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'Chatbot',
    to: 'https://vien-docs.coloredstrategies.com/',
    newWindow: true
  }
];
export default data;

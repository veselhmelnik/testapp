import Iconify from "components/Iconify";
import afkIcon from 'assets/images/afk.svg';
import onlineIcon from 'assets/images/online.svg';
import offlineIcon from 'assets/images/offline.svg';
//--------------------------------------------------------------------------
export const operatorsList = ['Nikita DM', 'Artem K', 'Ksenia O', 'Vadim SH', 'Victor S', 'Marina F', 'Mykola D', 'Evheniia O']

export const organizationList = ['Quiken Loans', 'Offerpad', 'AH4R', 'Invitation Homes', 'Tricon', 'Northsight Management', 'Specialized Property','Mynd','Southern Vacation','TurnKey','IH Amenities','HomeRiver Group','American Family', 'Virtuance', 'Conrex', 'Other'];

export const packageList = ['Simple Inspection','Standard', 'Marketing', 'Inspection', 'Standard Delivery', 'Pre Market', 'Disposition', 'Acquisition', 'Floor Plan', 'HDR', 'HOA', 'OCCUPIED', 'PRO'];

export const statusList = ['Ready','Check','2D in progress','Ready for QA', 'QA processing','Finished', 'Deleted', 'PAUSE', 'Blocked', ];

export const MENU_OPTIONS = [
    {
      label: 'Profile',
      icon: 'eva:person-fill',
      linkTo: '#',
    },
    {
      label: 'Settings',
      icon: 'eva:settings-2-fill',
      linkTo: '#',
    },
  ];

  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  export const navConfig = [
    {
      title: 'dashboard',
      path: '/dashboard/app',
      icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
      title: 'coordinator',
      path: '/dashboard/coordinator',
      icon: getIcon('eva:file-text-fill'),
    },
    {
      title: 'users',
      path: '/dashboard/users',
      icon: getIcon('eva:people-fill'),
    },
  
    {
      title: 'delivery',
      path: '/dashboard/delivery',
      icon: getIcon('material-symbols:question-mark'),
    },
    {
      title: 'statistic',
      path: '/dashboard/statistic',
      icon: getIcon('ion:stats-chart-sharp'),
    }
  ];

  export const WORK_STATES = [
    {
      id: '0',
      value: 'offline',
      label: 'OFFLINE',
      icon: offlineIcon,
    },
    {
      id: '1',
      value: 'online',
      label: 'ONLINE',
      icon: onlineIcon,
    },
    {
      id: '2',
      value: 'afk',
      label: 'AFK',
      icon: afkIcon,
    }
  ];
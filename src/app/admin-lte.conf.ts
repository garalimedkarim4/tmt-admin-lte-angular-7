export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {label: 'Accueil', route: 'accordion', iconClasses: 'fa fa-home'},
    {label: 'Utilisateurs', route: 'utilisateurs', iconClasses: 'fa fa-users'},
    {label: 'Medecin', route: '', iconClasses: 'fa fa-user-md'},
    {label: 'Patient', route: '', iconClasses: 'fa fa-wheelchair-alt'}, //fa-id-card
    {label: 'Agent', route: '', iconClasses: 'fa fa-male'},
    {label: 'Opération', route: '', iconClasses: 'fa fa-scissors'},
    {label: 'Voyage', route: '', iconClasses: 'fa fa-plane'},
    {label: 'Configuration', route: '', iconClasses: 'fa fa-cog'},
    {label: 'Evenement', route: '', iconClasses: 'fa fa-birthday-cake'},
    {label: 'Disponibilité Médecin', route: '', iconClasses: 'fa fa-calendar'},
    {label: 'Rendez-Vous', route: '', iconClasses: 'fa fa-handshake-o'},
    {label: 'Get Started', route: '', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
        {label: 'Configuration', route: 'layout/configuration'},
        {label: 'Custom', route: 'layout/custom'},
        {label: 'Header', route: 'layout/header'},
        {label: 'Sidebar Left', route: 'layout/sidebar-left'},
        {label: 'Sidebar Right', route: 'layout/sidebar-right'},
        {label: 'Content', route: 'layout/content'}
      ]},
    {label: 'COMPONENTS', separator: true},
    {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    {label: 'Accordiona', route: 'accordiona', iconClasses: 'fa fa-tasks'},
    {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
        {label: 'Default Box', route: 'boxs/box'},
        {label: 'Info Box', route: 'boxs/info-box'},
        {label: 'Small Box', route: 'boxs/small-box'}
      ]},
    {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    {label: 'Form', iconClasses: 'fa fa-files-o', children: [
        {label: 'Input Text', route: 'form/input-text'}
    ]},
    {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
  ]
};

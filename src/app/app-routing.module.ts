import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [  
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      }, 
      {
        path: 'accueil',
        loadChildren: './accueil/accueil.module#AccueilModule',
        data: {
          title: 'Accueil'
        }
      },  
      {
        path: 'utilisateurs',
        loadChildren: './utilisateurs/utilisateurs.module#UtilisateursModule',
        data: {
          title: 'Utilisateurs',
        }
      },
      {
        path: 'medecin',
        loadChildren: './medecin/medecin.module#MedecinModule',
        data: {
          title: 'Medecin',
        }
      },
      {
        path: 'patient',
        loadChildren: './patient/patient.module#PatientModule',
        data: {
          title: 'Patient',
        }
      },    
      {
        path: 'agent',
        loadChildren: './agent/agent.module#AgentModule',
        data: {
          title: 'Agent',
        }
      },   
      {
        path: 'operation',
        loadChildren: './operation/operation.module#OperationModule',
        data: {
          title: 'Operation',
        }
      },   
      {
        path: 'voyage',
        loadChildren: './voyage/voyage.module#VoyageModule',
        data: {
          title: 'Voyage',
        }
      },   
      {
        path: 'configuration',
        loadChildren: './configuration/configuration.module#ConfigurationModule',
        data: {
          title: 'Configuration',
        }
      },
      {
        path: 'evenement',
        loadChildren: './evenement/evenement.module#EvenementModule',
        data: {
          title: 'Evenement',
        }
      },   
      {
        path: 'disponibilite-medecin',
        loadChildren: './disponibilite-medecin/disponibilite-medecin.module#DisponibiliteMedecinModule',
        data: {
          title: 'Disponibilité Medecin',
        }
      },   
      {
        path: 'rendez-vous',
        loadChildren: './rendez-vous/rendez-vous.module#RendezVousModule',
        data: {
          title: 'Rendez-vous',
        }
      },            
      {
        path: 'accordiona',
        loadChildren: './+accordiona/accordiona.module#AccordionaModule',
        data: {
          title: 'Accordiona'
        }
      },        
    ]
  },
  {
    path: 'login',
    // canActivate: [LoginGuard],
    loadChildren: './+login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  }, {
    path: 'register',
    loadChildren: './+register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  },    
  { path: '',   redirectTo: 'accueil', pathMatch: 'full' }, 
  { path: '**',   redirectTo: 'accueil', pathMatch: 'full' }, 

  // {
  // path: '',
  // children: [
  //   {
  //     path: '',
  //     component: HomeComponent
  //   },
  //    {
  //     path: 'accordion',
  //     loadChildren: './+accordion/accordion.module#AccordionModule',
  //     data: {
  //       title: 'Accordionsss'
  //     }
  //   },
  
  //   {
  //     path: 'utilisateurs',
  //     loadChildren: './utilisateurs/utilisateurs.module#UtilisateursModule',
  //     data: {
  //       title: 'utilisateurs'
  //     }
  //   }, {
  //     path: 'alert',
  //     loadChildren: './+alert/alert.module#AlertModule',
  //     data: {
  //       title: 'Alert',
  //     }
  //   }, {
  //     path: 'layout',
  //     data: {
  //       title: 'Layout',
  //     },
  //     children: [
  //       {
  //         path: 'configuration',
  //         loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',
  //         data: {
  //           title: 'Configuration'
  //         }
  //       }, {
  //         path: 'custom',
  //         loadChildren: './+layout/custom/custom.module#CustomModule',
  //         data: {
  //           title: 'Disable Layout'
  //           // disableLayout: true
  //         }
  //       }, {
  //         path: 'content',
  //         loadChildren: './+layout/content/content.module#ContentModule',
  //         data: {
  //           title: 'Content'
  //         }
  //       }, {
  //         path: 'header',
  //         loadChildren: './+layout/header/header.module#HeaderModule',
  //         data: {
  //           title: 'Header'
  //         }
  //       }, {
  //         path: 'sidebar-left',
  //         loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',
  //         data: {
  //           title: 'Sidebar Left'
  //         }
  //       }, {
  //         path: 'sidebar-right',
  //         loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule',
  //         data: {
  //           title: 'Sidebar Right'
  //         }
  //       },
  //     ]
  //   }, {
  //     path: 'boxs',
  //     data: {
  //       title: 'Boxs',
  //     },
  //     children: [
  //       {
  //         path: 'box',
  //         loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule',
  //         data: {
  //           title: 'Box'
  //         }
  //       }, {
  //         path: 'info-box',
  //         loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule',
  //         data: {
  //           title: 'Info Box'
  //         }
  //       }, {
  //         path: 'small-box',
  //         loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule',
  //         data: {
  //           title: 'Small Box'
  //         }
  //       }
  //     ]}, {
  //       path: 'dropdown',
  //       loadChildren: './+dropdown/dropdown.module#DropdownModule',
  //       data: {
  //         title: 'Dropdown',
  //       }
  //     }, {
  //       path: 'tabs',
  //       loadChildren: './+tabs/tabs.module#TabsModule',
  //       data: {
  //         title: 'Tabs',
  //       }
  //     }
  //   ]
  // }, {
  //   path: 'form',
  //   data: {
  //     title: 'Form',
  //   },
  //   children: [
  //     {
  //       path: 'input-text',
  //       loadChildren: './+form/input-text/input-text.module#InputTextModule',
  //       data: {
  //         title: 'Input Text',
  //       }
  //     }
  //   ]
  // }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

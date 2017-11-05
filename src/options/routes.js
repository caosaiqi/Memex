import ImportContainer from './imports'
import SettingsContainer from './containers/settings'
import PrivacyContainer from './privacy/index'
import HelpContainer from './help/index'
import Acknowledgements from './acknowledgement/components/content'
import TutorialContainer from './tutorial'
import newInstallContainer from './new_install'

export default [
    {
        name: 'New install',
        pathname: '/new_install',
        component: newInstallContainer,
        hideSidebar: true,
        hideFromSidebar: true,
    },
    {
        name: 'Go back to Search',
        pathname: '/overview/overview.html',
        component: 'faq',
        icon: 'search',
    },
    {
        name: 'Import',
        pathname: '/import',
        component: ImportContainer,
        icon: 'file_download',
    },
    {
        name: 'Blacklist',
        pathname: '/blacklist',
        component: SettingsContainer,
        icon: 'block',
    },
    {
        name: 'Privacy',
        pathname: '/privacy',
        component: PrivacyContainer,
        icon: 'security',
    },
    {
        name: 'Acknowledgements',
        pathname: '/acknowledgements',
        component: Acknowledgements,
        icon: 'perm_identity',
    },
    {
        name: 'Help Me Please',
        pathname: '/help',
        component: HelpContainer,
        icon: 'help',
    },
    {
        name: 'Tutorial',
        pathname: '/tutorial',
        component: TutorialContainer,
        icon: 'info',
    },
]

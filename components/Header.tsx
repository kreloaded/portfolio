import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  let headerClass = 'flex items-center justify-end py-8'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto pr-2 sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="m-1 block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

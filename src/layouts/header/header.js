import { useRouter } from 'next/router'

import Link from 'next/link'
import NavLink from '../../components/links/nav-link/nav-link'
import Option from '../../components/options/option'

const Header = () => {
  const router = useRouter()

  const onSubNavChange = (e) => {
    e.preventDefault()
    router.push(e.target.value)
  }
  return (
    <div id="headerWrapper">
      <header id="header">
        <div id="headerInfo">
          <h1 className="logo image">
            <Link href="/">
              <a title="Lindsey Carrillo Design Portfolio" role="bookmark">
                <span className="placed-logo-image">
                  <img
                    src="/assets/header.png?format=1500w"
                    alt="Lindsey Carrillo Design Portfolio"
                  />
                </span>
              </a>
            </Link>
          </h1>

          <div id="navBlock" role="navigation">
            <nav className="main-nav">
              <ul>
              <NavLink
                  label="ACTIVEWEAR"
                  hrefChild={[
                    { href: '/kids-swim' },
                    { href: '/ordstrom-kids-sleep-2020' },
                  ]}
                  className="folder-collection folder"
                  href=""
                >
                  <NavLink
                    label="NO FILTER"
                    className="gallery-collection"
                    href="/no-filter"
                  />
                  <NavLink
                    label="GIRLFRIEND"
                    className="gallery-collection"
                    href="/girlfriend"
                  />
                  <NavLink
                    label="BUFF PUPS"
                    className="gallery-collection"
                    href="/buff-pups"
                  />
                  <NavLink
                    label="BUTTER"
                    className="gallery-collection"
                    href="/butter"
                  />
                     <NavLink
                    label="JUICY"
                    className="gallery-collection"
                    href="/juicy"
                  />
                     <NavLink
                    label="DEADLIFT"
                    className="gallery-collection"
                    href="/deadlift"
                  />
                     <NavLink
                    label="SNACK"
                    className="gallery-collection"
                    href="/snack"
                  />
                </NavLink>
                
               <NavLink
                  label="HANDBAGS"
                  hrefChild={[{ href: '/handbags' }]}
                  className="folder-collection folder"
                  href=""
                >
                  <NavLink
                    label="HANDBAGS"
                    className="page-collection"
                    href="/handbags"
                  />
                </NavLink>
                <NavLink
                  label="WOMENS APPAREL DESIGN WORK"
                  hrefChild={[
                    { href: '/designer-project' },
                    { href: '/chelsea-28' },
                    { href: '/treasure-bond-2020' },
                  ]}
                  className="folder-collection folder"
                  href=""
                >
                  <NavLink
                    label="DESIGNER PROJECT"
                    className="gallery-collection"
                    href="/designer-project"
                  />
                  <NavLink
                    label="CHELSEA 28"
                    className="gallery-collection"
                    href="/chelsea-28"
                  />
                  <NavLink
                    label="TREASURE &amp; BOND WOMEN'S WOVENS 2020"
                    className="gallery-collection"
                    href="/treasure-bond-2020"
                  />
                </NavLink>
                <NavLink
                  label="KIDS APPAREL DESIGN WORK"
                  hrefChild={[
                    { href: '/treasure-bond-kids-2021' },
                    { href: '/nordstrom-big-girl-2021' },
                    { href: '/nordstrom-swim-2021' },
                    { href: '/melrose-market-kids-2021' },
                    { href: '/nordstrom-2022' },
                    { href: '/treasure-bond-2022' },
                    { href: '/associate-kids-designer-project' },
                    { href: '/kids-swim' },
                    { href: '/nordstrom-kids-sleep-2020' },
                  ]}
                  className="folder-collection folder"
                  href=""
                >
                  <NavLink
                    label="TREASURE &amp; BOND KIDS 2021"
                    className="gallery-collection"
                    href="/treasure-bond-kids-2021"
                  />
                  <NavLink
                    label="NORDSTROM BIG GIRL 2021"
                    className="gallery-collection"
                    href="/nordstrom-big-girl-2021"
                  />
                  <NavLink
                    label="NORDSTROM KIDS SWIM 2021"
                    className="gallery-collection"
                    href="/nordstrom-swim-2021"
                  />
                  <NavLink
                    label="MELROSE &amp; MARKET KIDS 2021"
                    className="gallery-collection"
                    href="/melrose-market-kids-2021"
                  />
                  <NavLink
                    label="NORDSTROM 2022"
                    className="gallery-collection"
                    href="/nordstrom-2022"
                  />
                  <NavLink
                    label="TREASURE &amp; BOND 2022"
                    className="gallery-collection"
                    href="/treasure-bond-2022"
                  />
                  <NavLink
                    label="ASSOCIATE KIDS DESIGNER PROJECT"
                    className="gallery-collection"
                    href="/associate-kids-designer-project"
                  />
                     <NavLink
                    label="KIDS SWIM"
                    className="gallery-collection"
                    href="/kids-swim"
                  />
                  <NavLink
                    label="NORDSTROM KIDS SLEEP 2020"
                    className="gallery-collection"
                    href="/nordstrom-kids-sleep-2020"
                  />
                </NavLink>
                <NavLink label="About" className="page-collection" href="/" />
                <NavLink
                  label="Contact"
                  hrefChild={[{ href: '/contact' }]}
                  className="folder-collection folder"
                  href=""
                >
                  <NavLink
                    label="Contact"
                    className="page-collection"
                    href="/contact"
                  />
                </NavLink>
              </ul>

              <select
                onChange={(e) => onSubNavChange(e)}
                id="mobileSelect"
                name="mobileSelect"
              >
                   <optgroup label="ACTIVEWEAR">
                   ACTIVEWEAR
                  <Option
                    label="BUFF PUPS"
                    className="gallery-collection"
                    href="/buff-pups"
                  />
                  <Option
                    label="BUTTER"
                    className="gallery-collection"
                    href="/butter"
                  />
                   <Option
                    label="DEADLIFT"
                    className="gallery-collection"
                    href="/deadlift"
                  />
                  <Option
                    label="GIRLFRIEND"
                    className="gallery-collection"
                    href="/girlfriend"
                  />
                   <Option
                    label="JUICY"
                    className="gallery-collection"
                    href="/juicy"
                  />
                   <Option
                    label="NO FILTER"
                    className="gallery-collection"
                    href="/no-filter"
                  />
                   <Option
                    label="SNACK"
                    className="gallery-collection"
                    href="/snack"
                  />
                </optgroup>
                <optgroup label="HANDBAGS">
                  HANDBAGS
                  <Option
                    label="HANDBAGS"
                    className="page-collection"
                    href="/handbags"
                  />
                
                </optgroup>

                <optgroup label="WOMENS APPAREL DESIGN WORK">
                  WOMENS APPAREL DESIGN WORK
                  <Option
                    label="DESIGNER PROJECT"
                    className="gallery-collection"
                    href="/designer-project"
                  />
                  <Option
                    label="CHELSEA 28"
                    className="gallery-collection"
                    href="/chelsea-28"
                  />
                  <Option
                    label="TREASURE &amp; BOND WOMEN'S WOVENS 2020"
                    className="gallery-collection"
                    href="/treasure-bond-2020"
                  />
                </optgroup>

                <optgroup label="KIDS APPAREL DESIGN WORK">
                  KIDS APPAREL DESIGN WORK
                  <Option
                    label="TREASURE &amp; BOND KIDS 2021"
                    className="gallery-collection"
                    href="/treasure-bond-kids-2021"
                  />
                  <Option
                    label="NORDSTROM BIG GIRL 2021"
                    className="gallery-collection"
                    href="/nordstrom-big-girl-2021"
                  />
                  <Option
                    label="NORDSTROM KIDS SWIM 2021"
                    className="gallery-collection"
                    href="/nordstrom-swim-2021"
                  />
                  <Option
                    label="MELROSE &amp; MARKET KIDS 2021"
                    className="gallery-collection"
                    href="/melrose-market-kids-2021"
                  />
                  <Option
                    label="NORDSTROM 2022"
                    className="gallery-collection"
                    href="/nordstrom-2022"
                  />
                  <Option
                    label="TREASURE &amp; BOND 2022"
                    className="gallery-collection"
                    href="/treasure-bond-2022"
                  />
                  <Option
                    label="ASSOCIATE KIDS DESIGNER PROJECT"
                    className="gallery-collection"
                    href="/associate-kids-designer-project"
                  />
                  <Option
                    label="KIDS SWIM"
                    className="gallery-collection"
                    href="/kids-swim"
                  />
                  <Option
                    label="NORDSTROM KIDS SLEEP 2020"
                    className="gallery-collection"
                    href="/nordstrom-kids-sleep-2020"
                  />
                </optgroup>

                {/* <Option label="About" className="page-collection" href="/" /> */}

                <optgroup label="Contact">
                  Contact
                  <Option
                    label="Contact"
                    className="page-collection"
                    href="/contact"
                  />
                </optgroup>
              </select>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Header

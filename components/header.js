
import styles from '../styles/components/header.module.scss'
import Link from 'next/link';

export default function Header({pagename}) {
  const navList = [
    {
      slug: '/about/',
      label: 'ABOUT',
    },
    {
      slug: '/news/',
      label: 'NEWS',
    },
    {
      slug: 'menu-3',
      label: 'Menu3',
    },
    {
      slug: 'menu-4',
      label: 'Menu4',
    },
  ];
  return (
    <header className={styles.header}>
      <>
        {(pagename === 'home') ? <h1 className={styles.header__logo}>NEXT DEMO</h1> : <p className={styles.header__logo}><Link href="/">NEXT DEMO</Link></p>}
      </>
      <nav>
        <ul className={styles.header__nav}>
          {
            navList.map( (navItem,i) =>
              <li className={styles.header__navItem} key={`${navItem.id}-${i}`}>
                <Link  href={navItem.slug}>
                  <a className={styles.header__navBtn}>{navItem.label}</a>
                </Link>
              </li>
            )
          }
        </ul>
      </nav>

    </header>
  )

}

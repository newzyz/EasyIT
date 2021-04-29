import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
      <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
          <nav className="navbar-nav mr-auto">
            <div className={classes.logo}><Link href="/">Easy IT</Link></div>
          </nav>
          <nav className="navbar-nav ml-auto">
              <li className={classes.LoginLogo}>
                <Link href="#">Login</Link>
              </li>
              <li className={classes.CartLogo}>
                <Link href="#">Cart</Link>
              </li>
          </nav>
      </nav>
  );
}

export default MainNavigation;

import MainNavigation from './MainNavigation';
import Footer from './Footer';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.bgColor}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

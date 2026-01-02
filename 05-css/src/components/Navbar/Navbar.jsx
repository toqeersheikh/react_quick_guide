import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h4>Alpha Spark</h4>
      <button>Login</button>
    </div>
  );
};

export default Navbar;

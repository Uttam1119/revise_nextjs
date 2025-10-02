// the folder which have parenthesis around it, are known as groupism.
// basically, they will not be visible in the routes , means there will be no /auth, but there will be /login

import styles from "./login.module.css";
const loginPage = () => {
  return <div className={styles.login}>loginPage</div>;
};

export default loginPage;

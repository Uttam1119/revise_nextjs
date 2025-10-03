// the folder which have parenthesis around it, are known as groupism.
// basically, they will not be visible in the routes , means there will be no /auth, but there will be /login

// import styles from "./login.module.css";
// const loginPage = () => {
//   return <div className={styles.login}>loginPage</div>;
// };

// export default loginPage;
import Link from "next/link";
import LoginForm from "../../_components/LoginForm";

const loginPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <LoginForm />
      <p className="mt-4 text-center">
        First time here ?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register Yourself
        </Link>
      </p>
    </div>
  );
};

export default loginPage;

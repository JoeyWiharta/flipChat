import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-2">Register Page</h1>
      <p className="text-muted-foreground">
        Form register akan ditambahkan di sini.
      </p>
      <Link
        to="/login"
        className="underline underline-offset-4 hover:text-primary"
      >
        Sign up
      </Link>
    </div>
  );
};

export default RegisterPage;

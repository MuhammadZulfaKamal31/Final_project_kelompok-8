function Validation(login) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\. [^\s@]+$/;
  const password_pattern = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (login.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(login.email)) {
    error.email = "Email didnt match";
  } else {
    error.email = "";
  }
  if (login.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(login.password)) {
    error.password = "password didnt match";
  } else {
    error.password = "";
  }
  return error;
}
export default Validation;

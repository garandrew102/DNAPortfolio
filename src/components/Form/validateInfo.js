export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.number) {
    errors.number = "Number is required";
  } else if (values.number.length < 10) {
    errors.number = "Number needs to be at least 10 numbers or more";
  }

  return errors;
}

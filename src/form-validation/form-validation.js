export default function validate(values) {
  let errors = {};
  if (!values.title) {
    errors.title = "Title is required";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}

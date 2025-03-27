import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SearchMovies({ onSubmit }) {
  const validationSchema = Yup.object({
    searchMovies: Yup.string()
      .trim()
      .min(1, 'Please enter a search term')
      .required('Search field cannot be empty'),
  });

  return (
    <Formik
      initialValues={{ searchMovies: '' }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, actions) => {
        if (!values.searchMovies.trim()) {
          toast.error('Please enter a search term');
          return;
        }
        onSubmit(values.searchMovies);
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          type="text"
          name="searchMovies"
          autoComplete="off"
          autoFocus
          placeholder="Search"
        />
        <button type="submit">Search</button>
        <ErrorMessage name="searchMovies" component="div" />
      </Form>
    </Formik>
  );
}

export default SearchMovies;

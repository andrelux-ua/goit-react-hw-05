import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SearchMovies.module.css';

function SearchMovies({ onSubmit }) {
  const validationSchema = Yup.object({
    searchMovies: Yup.string()
      .trim()
      .min(1, 'Please enter a search term')
      .required('Search field cannot be empty'),
  });

  return (
    <div className={styles.search}>
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
        <Form className={styles.form}>
          <Field
            type="text"
            name="searchMovies"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            className={styles.input}
          />
          <button className={styles.button} type="submit">
            Search
          </button>

          <div>
            <ErrorMessage
              className={styles.error}
              name="searchMovies"
              component="div"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SearchMovies;

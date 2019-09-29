import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'
import { Formik } from 'formik'
import validationSchema from './validationSchema.js'
import Button from '../Button'
import Input from '../Input'
import Gutter from '../Gutter'

const Login = ({
  className, background, color, style,
  onSubmit
}) => {
  return (
    <div
      className={concat('login', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(
            values,
            () => {
              setSubmitting(false)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            <Input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email && errors.email}
            />

            <Gutter disabled={(errors.password && touched.password && errors.password) !== undefined}/>

            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password && errors.password}
            />

            <Gutter disabled={(errors.password && touched.password && errors.password) !== undefined}/>

            <Button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%'
              }}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

Login.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  onSubmit: PropTypes.func
}

export default Login

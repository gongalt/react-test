// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

const LoginForm = () => (
	<div className={classNames('w-full', 'max-w-xs', 'm-2')}>
		<h1>Any place in your app!</h1>
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = 'Invalid email address';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting }) => (
				<Form
					className={classNames(
						'bg-white',
						'shadow-md',
						'rounded',
						'px-8',
						'pt-6',
						'pb-8',
						'mb-4'
					)}
				>
					<div className={classNames('mb-4')}>
						<Field type="email" name="email" label="Email" />
						<ErrorMessage name="email" component="div" />
					</div>

					<div className={classNames('mb-4')}>
						<Field type="password" name="password" label="Password" />
						<ErrorMessage name="password" component="div" />
					</div>
					<div className={classNames('mb-4')}>
						<label>Language</label>

						<ErrorMessage name="email" component="div" />
					</div>

					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	</div>
);

export default LoginForm;

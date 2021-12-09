// Render Prop
import React, { useState, useEffect, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import intl from 'react-intl-universal';

import classNames from 'classnames';

// app locale data
const locales = {
	'en-US': require('../../locales/en-US.json'),
	'fil-PH': require('../../locales/fil-PH.json'),
};

const SignupForm = () => {
	const [language, setLanguage] = useState('en-US');
	const [, setInitDone] = useState(false);

	const options = [
		{ value: 'en-US', label: 'English' },
		{ value: 'fil-PH', label: 'Filipino' },
	];
	const loadLocales = useCallback(() => {
		console.log('language', language);
		setInitDone(false);
		let currentLocale = language;
		intl
			.init({
				currentLocale,
				locales,
			})
			.then(() => {
				// After loading CLDR locale data, start to render
				setInitDone(true);
			});
	}, [language]);

	useEffect(() => {
		// Your code here
		loadLocales();
	}, [loadLocales]);

	return (
		<div className={classNames('w-full', 'max-w-sm')}>
			<h1>{intl.get('HELLO', { name: 'Tony' })}</h1>
			<div className={classNames('md:flex', ' md:items-center', 'mb-6')}>
				<Formik
					initialValues={{ name: '', email: '', password: '' }}
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
							values = { ...values, locale: language };
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<Field
								type="text"
								name="name"
								placeholder="Name"
								className={classNames(
									'shadow ',
									'appearance-none ',
									'border ',
									'rounded ',
									'w-full ',
									'py-2 ',
									'px-3',
									'text-gray-700 ',
									'leading-tight',
									'focus:outline-none',
									'focus:shadow-outline'
								)}
							/>
							<ErrorMessage name="name" component="div" />
							<Field
								type="email"
								name="email"
								placeholder="Email Address"
								className={classNames(
									'shadow ',
									'appearance-none ',
									'border ',
									'rounded ',
									'w-full ',
									'py-2 ',
									'px-3',
									'text-gray-700 ',
									'leading-tight',
									'focus:outline-none',
									'focus:shadow-outline'
								)}
							/>
							<ErrorMessage name="email" component="div" />
							<Field
								type="password"
								name="password"
								placeholder="Password"
								className={classNames(
									'shadow ',
									'appearance-none ',
									'border ',
									'rounded ',
									'w-full ',
									'py-2 ',
									'px-3',
									'text-gray-700 ',
									'leading-tight',
									'focus:outline-none',
									'focus:shadow-outline'
								)}
							/>
							<ErrorMessage name="password" component="div" />
							<Select
								defaultValue={language}
								onChange={(lang) => {
									console.log('lang.value', lang.value);
									setLanguage(lang.value);
								}}
								options={options}
								placeholder="Select Language"
							/>
							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default SignupForm;

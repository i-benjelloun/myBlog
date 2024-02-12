import ContactForm from '@/components/contact/ContactForm';
import Head from 'next/head';
import React, { Fragment } from 'react';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;

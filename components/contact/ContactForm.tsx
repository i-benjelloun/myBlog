import type { FormEvent } from 'react';
import React, {
  type ComponentProps,
  type PropsWithChildren,
  useState,
  useEffect,
} from 'react';
import { RequestStatus, type ContactDetails } from './types';
import Notification from '../ui/notifications';

async function sendContactData(contactDetails: ContactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState<RequestStatus | null>(
    null
  );
  const [requestError, setRequestError] = useState('');

  useEffect(() => {
    if (
      requestStatus === RequestStatus.Success ||
      requestStatus === RequestStatus.Error
    ) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();

    setRequestStatus(RequestStatus.Pending);

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus(RequestStatus.Success);
    } catch (e) {
      if (typeof e === 'string') {
        setRequestError(e.toUpperCase());
      } else if (e instanceof Error) {
        setRequestError(e.message);
      }
      setRequestStatus(RequestStatus.Error);
    }
  };

  let notification;

  if (requestStatus === RequestStatus.Pending) {
    notification = {
      status: RequestStatus.Pending,
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === RequestStatus.Success) {
    notification = {
      status: RequestStatus.Success,
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === RequestStatus.Error) {
    notification = {
      status: RequestStatus.Error,
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className="tw-mx-auto tw-my-8 tw-w-11/12 tw-max-w-[50rem] tw-rounded-md tw-bg-gray-100 tw-p-4 tw-shadow-md ">
      <h1 className="tw-mx-0 tw-my-4 tw-text-center tw-text-2xl md:tw-text-6xl">
        How can I help you?
      </h1>
      <form onSubmit={sendMessageHandler}>
        <div className="tw-flex tw-flex-wrap tw-gap-x-4">
          <FormControl>
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="name">Your name</Label>
            <Input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </FormControl>
        </div>
        <FormControl>
          <Label htmlFor="message">Your message</Label>
          <TextArea
            id="message"
            required
            rows={5}
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></TextArea>
        </FormControl>
        <div className="tw-mt-4 tw-text-right">
          <Button>Send message</Button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;

function FormControl({ children }: PropsWithChildren) {
  return <div className="tw-min-w-[10rem] tw-flex-1">{children}</div>;
}

function Label({
  children,
  ...props
}: PropsWithChildren & ComponentProps<'label'>) {
  return (
    <label className="tw-mb-1 tw-mt-2 tw-block tw-font-bold" {...props}>
      {children}
    </label>
  );
}

function Input(props: ComponentProps<'input'>) {
  return (
    <input
      className="tw-w-full tw-rounded-md tw-border tw-border-grey-400 tw-bg-grey-50 tw-p-1 tw-font-inherit"
      {...props}
    />
  );
}

function TextArea(props: ComponentProps<'textarea'>) {
  return (
    <textarea
      className="tw-w-full tw-rounded-md tw-border tw-border-grey-400 tw-bg-grey-50 tw-p-1 tw-font-inherit"
      {...props}
    />
  );
}

function Button(props: ComponentProps<'button'> & PropsWithChildren) {
  return (
    <button
      className="tw-cursor-pointer tw-rounded-md tw-border tw-border-primary-700 tw-bg-primary-700 tw-p-2 tw-font-inherit tw-text-primary-50 tw-shadow-md hover:tw-border-primary-500 hover:tw-bg-primary-500 "
      {...props}
    >
      {props.children}
    </button>
  );
}

// @media (min-width: 768px) {
//   .contact h1 {
//     font-size: var(--size-16);
//     text-align: center;
//   }
// }

import React from 'react';
import ReactDOM from 'react-dom';

type NotificationProps = {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
};

function Notification(props: NotificationProps) {
  const { title, message, status } = props;

  const successClasses = 'tw-bg-green-500 tw-text-grey-800';
  const errorClasses = 'tw-bg-red-500';
  const defaultClasses = 'tw-bg-grey-800';

  let statusClasses = defaultClasses;

  if (status === 'success') {
    statusClasses = successClasses;
  }

  if (status === 'error') {
    statusClasses = errorClasses;
  }

  const notificationClasses =
    'tw-flex tw-justify-between tw-items-center tw-text-grey-100  tw-py-0 tw-px-8 tw-shadow-md tw-fixed tw-h-20 tw-bottom-0 tw-w-full tw-left-0 tw-border-t-2 tw-border-grey-100 tw-border-opacity-50';

  const cssClasses = `${notificationClasses} ${statusClasses}`;

  const root = document.getElementById('notifications');

  if (!root) {
    throw new Error('No notifications root found!');
  }

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2 className="tw-m-0 tw-text-base">{title}</h2>
      <p className="tw-m-0">{message}</p>
    </div>,
    root
  );
}

export default Notification;

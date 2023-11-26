import React, { type ComponentProps, type PropsWithChildren } from 'react';

function ContactForm() {
  return (
    <section className="tw-mx-auto tw-my-8 tw-w-11/12 tw-max-w-[50rem] tw-rounded-md tw-bg-gray-100 tw-p-4 tw-shadow-md ">
      <h1 className="tw-mx-0 tw-my-4 tw-text-center tw-text-2xl md:tw-text-6xl">
        How can I help you?
      </h1>
      <form>
        <div className="tw-flex tw-flex-wrap tw-gap-x-4">
          <FormControl>
            <Label htmlFor="email">Your Email</Label>
            <Input type="email" id="email" required />
          </FormControl>
          <FormControl>
            <Label htmlFor="name">Your name</Label>
            <Input type="text" id="name" required />
          </FormControl>
        </div>
        <FormControl>
          <Label htmlFor="message">Your message</Label>
          <TextArea id="message" rows={5}></TextArea>
        </FormControl>
        <div className="tw-mt-4 tw-text-right">
          <Button>Send message</Button>
        </div>
      </form>
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
      className="tw-font-inherit tw-w-full tw-rounded-md tw-border tw-border-grey-400 tw-bg-grey-50 tw-p-1"
      {...props}
    />
  );
}

function TextArea(props: ComponentProps<'textarea'>) {
  return (
    <textarea
      className="tw-font-inherit tw-w-full tw-rounded-md tw-border tw-border-grey-400 tw-bg-grey-50 tw-p-1"
      {...props}
    />
  );
}

function Button(props: ComponentProps<'button'> & PropsWithChildren) {
  return (
    <button
      className="tw-font-inherit tw-cursor-pointer tw-rounded-md tw-border tw-border-primary-700 tw-bg-primary-700 tw-p-2 tw-text-primary-50 tw-shadow-md hover:tw-border-primary-500 hover:tw-bg-primary-500"
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

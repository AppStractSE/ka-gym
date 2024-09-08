"use client";
import { encode } from "querystring";
import { useForm } from "react-hook-form";

interface IContactForm {
  FullName: string;
  Email: string;
  PhoneNumber: string;
  Message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Message: "",
    },
    mode: "onTouched",
  });
  const onSubmit = async (data: IContactForm) => {
    const formData = {
      "form-name": "contact-form",
      name: data.FullName,
      email: data.Email,
      tel: data.PhoneNumber,
      message: data.Message,
    };

    fetch("/forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error))
      .then(() => reset());
  };

  const baseClasses = "contactform ";

  const errorClass =
    " outline outline-1 outline-offset-0 outline-red-700 placeholder:text-red-500 ";
  const errorTextBaseClass =
    " text-red-500 text-xs tracking-widest transition-all duration-500 ease-in-out ";
  const errorTextHiddenClasses = " opacity-0 max-h-0 ";
  const errorTextVisibleClasses = " mt-2 mb-6 opacity-100 max-h-full ";

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="contact-form">
      <input type="hidden" name="required-field" value="contact-form" />
      <div className="mb-3 w-full">
        <input
          className={baseClasses
            .concat(" ")
            .concat(errors["FullName"] ? errorClass : "")}
          type="text"
          placeholder="För- och efternamn *"
          {...register("FullName", {
            required: "Fullständigt namn krävs",
            minLength: {
              value: 2,
              message: "Namnet måste vara minst 2 tecken",
            },
            maxLength: {
              value: 50,
              message: "Namnet får vara högst 50 tecken",
            },
          })}
        />
        <p
          role="alert"
          className={errorTextBaseClass
            .concat(" ")
            .concat(
              errors["FullName"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
        >
          {errors.FullName?.message}
        </p>
      </div>
      <div className="flex gap-3">
        <div className="mb-3 w-full">
          <input
            className={baseClasses
              .concat(" ")
              .concat(errors["Email"] ? errorClass : "")}
            type="email"
            placeholder="Email *"
            {...register("Email", {
              required: "E-post krävs",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Ogiltig e-postadress",
              },
            })}
          />
          <p
            role="alert"
            className={errorTextBaseClass
              .concat(" ")
              .concat(
                errors["Email"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
          >
            {errors.Email?.message}
          </p>
        </div>
        <div className="w-full">
          <input
            className={baseClasses
              .concat(" ")
              .concat(errors["PhoneNumber"] ? errorClass : "")}
            type="tel"
            placeholder="Telefonnummer"
            {...register("PhoneNumber", {
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              },
              required: "Telefonnummer krävs",
              pattern: {
                value: /^[0-9]+$/,
                message: "Ange ett nummer",
              },
              minLength: {
                value: 10,
                message: "Telefonnumret måste vara minst 10 tecken",
              },
              maxLength: {
                value: 15,
                message: "Telefonnumret får vara högst 15 tecken",
              },
            })}
          />
          <p
            role="alert"
            className={errorTextBaseClass
              .concat(" ")
              .concat(
                errors["PhoneNumber"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
          >
            {errors.PhoneNumber?.message}
          </p>
        </div>
      </div>
      <div className="mb-3">
        <textarea
          maxLength={500}
          placeholder="Meddelande *"
          className={"contactform min-h-[150px] resize-none transition-all duration-200 ease-in-out focus-visible:min-h-[200px]"
            .concat(" ")
            .concat(baseClasses)
            .concat(" ")
            .concat(errors["Message"] ? errorClass : "")}
          {...register("Message", {
            required: "Meddelande krävs",
            minLength: {
              value: 10,
              message: "Meddelandet måste vara minst 10 tecken",
            },
            maxLength: {
              value: 500,
              message: "Meddelandet får vara högst 500 tecken",
            },
          })}
        ></textarea>
        <p
          role="alert"
          className={errorTextBaseClass
            .concat(" ")
            .concat(
              errors["Message"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
        >
          {errors.Message?.message}
        </p>
      </div>
      <button
        // disabled={!isDirty || !isValid}

        type="submit"
        className="contactform font-base font-medium hover:bg-night-500 hover:text-vanilla-powder-500"
      >
        Skicka
      </button>
    </form>
  );
};

export default ContactForm;

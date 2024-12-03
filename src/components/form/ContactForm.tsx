"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsFillInfoCircleFill } from "react-icons/bs";

interface IContactForm {
  FullName: string;
  Email: string;
  PhoneNumber: string;
  Message?: string;
  DateOfBirth?: {
    day?: string;
    month?: string;
    year?: string;
  };
  Address?: string;
}

const ContactForm = () => {
  const [becomeMember, setBecomeMember] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const minimumAge = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18),
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitted },
  } = useForm({
    defaultValues: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Message: "",
      DateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
      Address: "",
    },
    mode: "onTouched",
  });

  function generateEmailHTML(data: IContactForm, becomeMember: boolean) {
  return `<div>Namn:<br>${data.FullName}<br>Meddelande:<br>${data.Message}<br>Telefonnummer:<br>${data.PhoneNumber}<br>${becomeMember ? `Ansöker om medlemskap:<br>Födelsedata:<br>${data.DateOfBirth?.day}-${data.DateOfBirth?.month}-${data.DateOfBirth?.year}<br>Adress:<br>${data.Address}` : ""}</div>`;
}


  const onSubmit = async (data: IContactForm) => {
    const formData = {
      name: data.FullName,
      email: data.Email,
      subject: `Kontaktformulär ${becomeMember ? "- Medlemsförfrågan" : ""}`,
      message: data.Message,
      messageHtml: generateEmailHTML(data, becomeMember),
    };

    toast
      .promise(
        fetch("/api/contact-form", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }),
        {
          loading: "Skickar meddelande...",
          success: "Meddelande skickat! Vi återkommer så snart vi kan.",
          error: "Något gick fel med att skicka meddelandet. Försök igen.",
        },
        {
          style: {
            minWidth: "250px",
          },
          position: "bottom-center",
          className: "!bg-night-500 !text-vanilla-powder-500",
          success: {
            duration: 8000,
            icon: "💪",
          },
        },
      )
      .catch((error) => {
        console.log(error.message);
      })
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          reset();
        }, 250);
      });
  };

  const baseClasses = "contactform ";

  const errorClass =
    " outline outline-1 outline-offset-0 outline-red-700 placeholder:text-red-500 ";
  const errorTextBaseClass =
    " text-red-500 text-xs tracking-widest transition-all duration-500 ease-in-out ";
  const errorTextHiddenClasses = " opacity-0 max-h-0 ";
  const errorTextVisibleClasses = " mt-2 opacity-100 max-h-full ";

  return (
    <div className="relative">
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
              placeholder="Telefonnummer *"
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
            placeholder={`Meddelande ${becomeMember ? "" : "*"}`}
            className={"contactform min-h-[150px] resize-none transition-all duration-200 ease-in-out focus-visible:min-h-[200px]"
              .concat(" ")
              .concat(baseClasses)
              .concat(" ")
              .concat(errors["Message"] ? errorClass : "")}
            {...register("Message", {
              required: becomeMember ? false : "Meddelande krävs",
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
        <div className="mb-3 flex items-center gap-2">
          <input
            checked={becomeMember}
            onChange={() => setBecomeMember(!becomeMember)}
            type="checkbox"
            id="becomeMember"
            name="becomeMember"
            value="becomeMember"
            className="h-5 w-5"
          />
          <label htmlFor="becomeMember">Jag vill bli medlem</label>
        </div>
        {becomeMember ? (
          <>
            <div className="mb-3 flex w-full items-center gap-3 rounded-md bg-blue-500 p-4 text-sm text-white">
              <BsFillInfoCircleFill className="text-xl" />
              <p>
                För att ansöka om medlemskap behöver du ange ditt födelsedatum
                och adress.
              </p>
            </div>
            <div className="mb-3">
              <div className="flex gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="DD *"
                    maxLength={2}
                    className={baseClasses
                      .concat(" ")
                      .concat(errors["DateOfBirth"] ? errorClass : "")}
                    {...register("DateOfBirth.day", {
                      required: "Fyll i dag",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Ange ett nummer",
                      },
                      minLength: {
                        value: 2,
                        message: "Fyll i dag",
                      },
                      maxLength: {
                        value: 2,
                        message: "Fyll i dag",
                      },
                    })}
                  />
                  <p
                    role="alert"
                    className={errorTextBaseClass
                      .concat(" ")
                      .concat(
                        errors["DateOfBirth"]
                          ? errorTextVisibleClasses
                          : errorTextHiddenClasses,
                      )}
                  >
                    {errors.DateOfBirth?.day?.message}
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="MM *"
                    maxLength={2}
                    className={baseClasses
                      .concat(" ")
                      .concat(errors["DateOfBirth"] ? errorClass : "")}
                    {...register("DateOfBirth.month", {
                      required: "Fyll i månad",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Ange ett nummer",
                      },
                      minLength: {
                        value: 2,
                        message: "Fyll i månad",
                      },
                      maxLength: {
                        value: 2,
                        message: "Fyll i månad",
                      },
                    })}
                  />
                  <p
                    role="alert"
                    className={errorTextBaseClass
                      .concat(" ")
                      .concat(
                        errors["DateOfBirth"]
                          ? errorTextVisibleClasses
                          : errorTextHiddenClasses,
                      )}
                  >
                    {errors.DateOfBirth?.month?.message}
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="ÅÅÅÅ *"
                    maxLength={4}
                    className={baseClasses
                      .concat(" ")
                      .concat(errors["DateOfBirth"] ? errorClass : "")}
                    {...register("DateOfBirth.year", {
                      required: "Fyll i år",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Ange ett nummer",
                      },
                      minLength: {
                        value: 4,
                        message: "Fyll i år",
                      },
                      maxLength: {
                        value: 4,
                        message: "Fyll i år",
                      },
                    })}
                  />
                  <p
                    role="alert"
                    className={errorTextBaseClass
                      .concat(" ")
                      .concat(
                        errors["DateOfBirth"]
                          ? errorTextVisibleClasses
                          : errorTextHiddenClasses,
                      )}
                  >
                    {errors.DateOfBirth?.year?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-3 w-full">
              <input
                className={baseClasses
                  .concat(" ")
                  .concat(errors["Address"] ? errorClass : "")}
                type="text"
                placeholder="Adress *"
                {...register("Address", {
                  required: "Adress krävs",
                })}
              />
              <p
                role="alert"
                className={errorTextBaseClass
                  .concat(" ")
                  .concat(
                    errors["Address"]
                      ? errorTextVisibleClasses
                      : errorTextHiddenClasses,
                  )}
              >
                {errors.Address?.message}
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
        <button
          disabled={isSubmitting || submitted}
          type="submit"
          className="contactform font-base font-medium hover:bg-night-500 hover:text-vanilla-powder-500"
        >
          Skicka
        </button>
      </form>

      <div
        className={"bg-charcoal-800/50 absolute inset-0 left-0 top-0 -m-2 overflow-hidden rounded border-[#a286688e] backdrop-blur-sm transition-all delay-75 duration-500 ease-in-out lg:backdrop-blur-sm"
          .concat(" ")
          .concat(submitted ? "visible opacity-100" : "invisible opacity-0")}
      >
        <div
          className={"flex h-full transform flex-col items-center justify-center space-y-4 transition-all duration-500 ease-in-out"
            .concat(" ")
            .concat(submitted ? "translate-y-0" : "translate-y-[125%]")}
        >
          <h6 className="text-3xl lg:text-center lg:text-2xl">
            Tack för ditt meddelande!
          </h6>
          <p className="text-balance whitespace-pre-line text-xl lg:text-center lg:text-xl">
            Vi kommer att kontakta dig inom kort.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setTimeout(() => {
                setBecomeMember(false);
              }, 250);
            }}
            className="block w-fit place-self-center rounded border border-night-500 bg-night-500 px-6 py-2.5 text-vanilla-powder-500 hover:bg-vanilla-powder-500 hover:text-night-500"
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

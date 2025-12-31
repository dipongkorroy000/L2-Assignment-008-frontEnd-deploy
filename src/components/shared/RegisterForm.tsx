/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {useActionState, useEffect} from "react";
import {registerTourist} from "@/src/services/authentication/registerUser";
import {toast} from "sonner";
import {Field, FieldDescription, FieldGroup, FieldLabel} from "../ui/field";
import {Input} from "../ui/input";
import {Button} from "../ui/button";
import {inputFieldError} from "@/src/lib/inputFieldError";
import Link from "next/link";
import {registerGuide} from "@/src/services/authentication/registerGuide";

const RegisterForm = ({params}: any) => {
  const [state, formAction, isPending] = useActionState(params?.role === "guide" ? registerGuide : registerTourist, null);

  useEffect(() => {
    if (state && !state.success && state.message) toast.error(state.message);
  });

  return (
    <form action={formAction}>
      <FieldGroup>
        <div className="flex flex-col gap-4 max-md:gap-2">
          {/* Name */}
          <Field className="max-md:gap-0">
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" name="name" type="text" placeholder="Enter your full name" className="max-md:text-sm" />
            {inputFieldError("name", state) && <FieldDescription className="text-red-600">{inputFieldError("name", state)}</FieldDescription>}
          </Field>

          {/* Address */}
          <Field className="max-md:gap-0">
            <FieldLabel htmlFor="contactNumber">Contact Number</FieldLabel>
            <Input id="contactNumber" name="contactNumber" type="text" placeholder="Enter your contact number" className="max-md:text-sm" />

            {inputFieldError("contactNumber", state) && <FieldDescription className="text-red-600">{inputFieldError("contactNumber", state)}</FieldDescription>}
          </Field>

          {/* Email */}
          <Field className="max-md:gap-0">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="Enter your email" className="max-md:text-sm" />

            {inputFieldError("email", state) && <FieldDescription className="text-red-600">{inputFieldError("email", state)}</FieldDescription>}
          </Field>

          {/* Password */}
          <Field className="max-md:gap-0">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" className="max-md:text-sm" />

            {inputFieldError("password", state) && <FieldDescription className="text-red-600">{inputFieldError("password", state)}</FieldDescription>}
          </Field>

          {/* Confirm Password */}
          <Field className="md:col-span-2 max-md:gap-0">
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <Input id="confirmPassword" name="confirmPassword" type="password" className="max-md:text-sm" />

            {inputFieldError("confirmPassword", state) && (
              <FieldDescription className="text-red-600">{inputFieldError("confirmPassword", state)}</FieldDescription>
            )}
          </Field>
        </div>

        <FieldGroup className="mt-4 max-md:mt-0">
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>

            <FieldDescription className="px-6 text-center flex flex-col items-center">
              Already have an account?
              <Link href="/login" className="text-primary mt-1">
                Sign in
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default RegisterForm;

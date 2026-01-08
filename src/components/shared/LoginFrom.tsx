/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {useActionState, useEffect} from "react";
import {Field, FieldDescription, FieldGroup, FieldLabel} from "@/src/components/ui/field";
import {toast} from "sonner";
import {Button} from "@/src/components/ui/button";
import {Input} from "@/src/components/ui/input";
import {loginUser} from "@/src/services/authentication/loginUser";
import {inputFieldError} from "@/src/lib/inputFieldError";
import Link from "next/link";

const LoginForm = ({redirect}: {redirect: string | undefined}) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state && !state.success && state.message) toast.error(state.message);
  });

  return (
    <form action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={`explore-tours/${redirect}`}></input>}
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="m@example.com" className="max-md:text-sm" />

            {inputFieldError("email", state) && <FieldDescription className="text-red-600">{inputFieldError("email", state)}</FieldDescription>}
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" placeholder="Enter your password" className="max-md:text-sm" />
            {inputFieldError("password", state) && <FieldDescription className="text-red-600">{inputFieldError("password", state)}</FieldDescription>}
          </Field>
        </div>

        <FieldGroup className="mt-4 max-md:mt-2">
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>

            <FieldDescription className="px-6 text-center flex flex-col items-center">
              Don&apos;t have an account?
              <Link href="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;

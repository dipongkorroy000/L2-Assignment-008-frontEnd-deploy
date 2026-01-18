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
import {startTransition} from "react";

const demoUsers = {
  admin: "superadmin@gmail.com",
  tourist: "touristone@gmail.com",
  guide: "guideone@gmail.com",
};

const LoginForm = ({redirect, tourId}: {redirect: string | undefined; tourId: string | undefined}) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state && !state.success && state.message) toast.error(state.message);
  });

  // helper to trigger demo login

  const handleDemoLogin = (email: string) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", "123456");

    if (tourId) {
      formData.append("redirect", `/explore-tours/${tourId}`);
    } else if (redirect) {
      formData.append("redirect", `${redirect}`);
    }

    startTransition(() => formAction(formData));
  };

  return (
    <form action={formAction} className="space-y-4">
      {/* {redirect && <input type="hidden" name="redirect" value={`/explore-tours/${redirect}`} />} */}
      {tourId && <input type="hidden" name="redirect" value={`/explore-tours/${tourId}`} />}
      {redirect && <input type="hidden" name="redirect" value={`${redirect}`} />}

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

        {/* Submit button */}
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

      {/* Demo login buttons */}
      <div className="flex flex-col gap-2 mt-6">
        <Button type="button" variant="outline" onClick={() => handleDemoLogin(demoUsers.admin)}>
          Demo Admin Login
        </Button>
        <Button type="button" variant="outline" onClick={() => handleDemoLogin(demoUsers.tourist)}>
          Demo Tourist Login
        </Button>
        <Button type="button" variant="outline" onClick={() => handleDemoLogin(demoUsers.guide)}>
          Demo Guide Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;

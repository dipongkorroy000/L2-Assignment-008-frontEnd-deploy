import LoginForm from "@/src/components/shared/LoginFrom";
import React from "react";

const LoginPage = async ({searchParams}: {searchParams?: Promise<{redirect?: string}>}) => {
  const param = await searchParams;

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="flex min-h-screen max-md:min-h-fit max-md:py-10 items-center justify-center ">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg max-md:mx-10 max-md:p-5">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold max-md:text-2xl">Welcome Back</h1>
            <p className="text-gray-500 max-md:text-sm">Enter your credentials to access your account</p>
          </div>
          <LoginForm redirect={param?.redirect} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

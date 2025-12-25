import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/src/components/ui/card";
import RegisterForm from "@/src/components/shared/RegisterForm";

const RegisterPage = async ({searchParams}: {searchParams: Promise<URLSearchParams>}) => {
  const params = await searchParams;

  return (
    <section className="min-h-screen bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>Enter your information below to create your account</CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm params={params} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;

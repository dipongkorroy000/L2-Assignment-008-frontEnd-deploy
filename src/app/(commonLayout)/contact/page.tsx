import {Card, CardHeader, CardTitle, CardContent} from "@/src/components/ui/card";
import {Mail, Phone, MapPin} from "lucide-react";
import ContactForm from "@/src/components/shared/ContactForm";

const ContactPage = () => {
  return (
    <section className="min-h-screen" style={{backgroundImage: "var(--gradient-primary-foreground)"}}>
      <div className="max-w-7xl mx-auto py-16 space-y-10 max-md:py-10 max-xl:mx-10 max-md:mx-0 px-5">
        {/* Page Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold max-md:text-xl">Contact Us</h1>
          <p className="text-muted-foreground max-md:text-sm">We’d love to hear from you. Reach out anytime!</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-6 lg:grid-cols-3 max-md:gap-3">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground max-md:text-sm">dipongkorroy000@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground max-md:text-sm">+880 1799 760 840</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground max-md:text-sm">Dinajpur, Bangladesh</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default ContactPage;

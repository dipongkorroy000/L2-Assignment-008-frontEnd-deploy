import ContactBtn from "@/src/components/static/ContactBtn";
import {Card, CardHeader, CardTitle, CardContent} from "@/src/components/ui/card";
import {Input} from "@/src/components/ui/input";
import {Textarea} from "@/src/components/ui/textarea";
import {Mail, Phone, MapPin} from "lucide-react";

const ContactPage = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 space-y-10">
      {/* Page Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">We’d love to hear from you. Reach out anytime!</p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" /> Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">support@localguide.com</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" /> Phone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">+880 1234 567 890</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Dinajpur, Bangladesh</p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input placeholder="Your Name" />
          </div>
          <div className="space-y-2">
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="space-y-2">
            <Textarea placeholder="Your Message" rows={5} />
          </div>
          <ContactBtn></ContactBtn>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactPage;
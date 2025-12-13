"use client";

import {useState} from "react";
import {Input} from "@/src/components/ui/input";
import {Textarea} from "@/src/components/ui/textarea";
import {Button} from "@/src/components/ui/button";
import {postContactMessage} from "@/src/services/tourist/tourist.service";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters long ❌");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address ❌");
      return false;
    }

    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount < 10) {
      setError("Message must contain at least 10 words ❌");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      await postContactMessage({name, email, message});
      setSuccess("Message sent successfully ✅");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      <div className="space-y-2">
        <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Textarea placeholder="Your Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <Button onClick={handleSubmit} disabled={loading} className="w-full">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </div>
  );
};

export default ContactForm;

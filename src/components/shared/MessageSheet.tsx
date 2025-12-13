"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";

interface IMessage {
  name: string;
  email: string;
  message: string;
}

const MessageSheetComponent = ({ name, email, message }: IMessage) => {
  return (
    <Card className="shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Message from {name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-sm leading-relaxed">
          <strong>Message:</strong> {message}
        </p>
      </CardContent>
    </Card>
  );
};

export default MessageSheetComponent;
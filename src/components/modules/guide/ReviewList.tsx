"use client";

import {Card, CardHeader, CardTitle, CardContent} from "@/src/components/ui/card";
import {Separator} from "@/src/components/ui/separator";

interface ReviewsListProps {
  tourForms: {
    review: {
      comment: string;
      rating: number;
      updatedAt: string;
    };
    tour: {title: string};
  }[];
}

export const ReviewsList = ({tourForms}: ReviewsListProps) => {
  if (!tourForms || tourForms.length === 0) {
    return (
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No reviews yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Latest Tour Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tourForms.map(
          (tourForm, idx) =>
            tourForm?.review && (
              <div key={idx} className="rounded-md border bg-muted/30 p-4 shadow-sm hover:bg-muted/50 transition-colors">
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground">{tourForm.tour.title}</p>
                  <p className="text-sm text-muted-foreground">{new Date(tourForm.review?.updatedAt).toLocaleDateString("en-GB")}</p>
                </div>
                <Separator className="my-2" />
                <p className="font-medium">{tourForm.review?.comment}</p>
                <p className="text-xs text-primary mt-2">⭐ {tourForm.review?.rating}/5</p>
              </div>
            )
        )}
      </CardContent>
    </Card>
  );
};

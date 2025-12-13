"use client";

import {Card, CardHeader, CardTitle, CardContent} from "@/src/components/ui/card";
import {Separator} from "@/src/components/ui/separator";

interface ReviewsListProps {
  reviews: {
    comment: string;
    rating: number;
    updatedAt: string;
  }[];
}

export const ReviewsList: React.FC<ReviewsListProps> = ({reviews}) => {
  if (!reviews || reviews.length === 0) {
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
        <CardTitle>Latest Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="rounded-md border bg-muted/30 p-4 shadow-sm hover:bg-muted/50 transition-colors">
            <p className="text-sm text-muted-foreground">{new Date(review.updatedAt).toLocaleDateString("en-GB")}</p>
            <Separator className="my-2" />
            <p className="font-medium">{review.comment}</p>
            <p className="text-xs text-primary mt-2">⭐ {review.rating}/5</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

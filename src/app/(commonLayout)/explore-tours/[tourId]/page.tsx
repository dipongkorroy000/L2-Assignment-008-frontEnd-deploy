import {getTour} from "@/src/services/public/tours.service";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/src/components/ui/avatar";
import {Badge} from "@/src/components/ui/badge";
import Image from "next/image";
import RequestModal from "@/src/components/modules/tours/RequestedTourModal";
import {getCookie} from "@/src/utils/serverToken";
import Link from "next/link";
import BackBtn from "@/src/components/static/BackBtn";

interface Guide {
  id: number;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber: string;
  languages: string[];
}

interface RequestForm {
  review: {
    comment: string;
    rating: number;
  };
  tourist: {
    email: string;
  };
}

interface ITour {
  averageRating: number;
  category: {id: number; title: string};
  city: string;
  createdAt: string;
  description: string;
  destination: string;
  duration: string;
  groupMembers: number;
  guide: Guide;
  image: string;
  meetingPoint: string;
  requestForm: RequestForm[];
  title: string;
}

const TourDetails = async ({params}: {params: Promise<{tourId: string}>}) => {
  const {tourId: id} = await params;

  const accessToken = await getCookie("accessToken");

  const tour: ITour = await getTour(Number(id));

  return (
    <section className="py-20 bg-gradient-to-r from-primary-foreground via-white to-primary-foreground max-md:py-5">
      <div className="max-w-4xl mx-auto bg-clip-border max-lg:mx-10 max-md:mx-0 px-5">
        <Card className="shadow-sm bg-clip-border">
          {/* Tour Header */}
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-chart-4 max-md:text-xl">{tour.category?.title}</CardTitle>
            <CardDescription className="text-black dark:text-white">
              • City: {tour.city} • Since from: {new Date(tour.createdAt).toLocaleDateString()}
            </CardDescription>
          </CardHeader>

          {/* Tour Image */}
          <CardContent>
            <Image
              width={300}
              height={300}
              loading="eager"
              src={tour.image}
              alt={tour.title || "tour image"}
              className="w-full h-64 object-cover rounded-md mb-6 max-md:mb-2 max-md:h-40"
            />

            <p className="text-xl font-bold max-md:text-lg">{tour.title}</p>
            <p className="text-muted-foreground mb-5 max-md:text-sm">{tour.description}</p>

            <div className="space-y-2 max-md:space-y-1 max-md:text-sm">
              <p>
                <strong>Destination: </strong> {tour.destination}
              </p>
              <p>
                <strong>Meeting Point: </strong> {tour.meetingPoint}
              </p>
              <p>
                <strong>Max Group Size: </strong> {tour.groupMembers}
              </p>
              <p>
                <strong>Duration: </strong>
                {tour.duration}
              </p>
              <div className="flex gap-5 items-center">
                <strong>Languages: </strong>
                {tour?.guide.languages?.map((language, idx) => (
                  <p key={idx} className="border rounded-2xl px-3 py-1">
                    {language}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>

          {/* Guide Info */}
          <CardContent>
            <h3 className="text-lg font-semibold mb-3 max-md:mb-1">Guide Information</h3>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={tour.guide?.profilePhoto} alt={tour.guide?.name} />
                <AvatarFallback>{tour.guide?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{tour.guide?.name}</p>
                <p className="text-sm text-muted-foreground">{tour.guide?.email}</p>
                <p className="text-sm text-muted-foreground">{tour.guide?.contactNumber}</p>
              </div>
            </div>
          </CardContent>

          {/* Request Modal */}
          <CardContent>
            {accessToken ? (
              <RequestModal guideId={tour.guide.id} tourId={Number(id)} />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 p-6 border rounded-lg bg-muted/30">
                <p className="text-sm text-muted-foreground">Please login to request tour</p>
                <Link href={`/login?tourId=${id}`} className="text-chart-5 underline">
                  Login
                </Link>
              </div>
            )}
          </CardContent>

          {/* Reviews */}
          <CardFooter className="flex flex-col items-start gap-2 py-10 max-md:py-5">
            <div className="">
              <h3 className="text-lg font-semibold">Reviews</h3>
              <p>
                <strong>Average Rating: </strong> {tour.averageRating}
              </p>
            </div>
            {tour.requestForm?.length > 0 ? (
              tour.requestForm.map(
                (form, idx) =>
                  form.review && (
                    <div key={idx} className="space-y-3 border p-5 rounded-sm w-full mb-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">⭐ {form.review?.rating} / 5</Badge>
                        <p className="bg-chart-1 px-3 rounded-sm">{form.tourist.email}</p>
                      </div>
                      <p className="p-2">{form.review?.comment}</p>
                    </div>
                  )
              )
            ) : (
              <p className="text-muted-foreground mt-5">No reviews yet.</p>
            )}
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto bg-clip-border mt-5 max-lg:mx-10 max-md:mx-0 px-5">
        <BackBtn></BackBtn>
      </div>
    </section>
  );
};

export default TourDetails;

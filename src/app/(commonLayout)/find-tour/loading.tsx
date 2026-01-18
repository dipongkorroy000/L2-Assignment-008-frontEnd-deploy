import TourListSkeleton from "@/src/components/shared/skeletons/TourListSkeleton";

const loading = () => {
  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="max-w-7xl max-xl:mx-10 max-md:mx-0 px-5 mx-auto min-h-dvh py-10 max-md:py-5">
        <TourListSkeleton></TourListSkeleton>
      </div>
    </section>
  );
};

export default loading;

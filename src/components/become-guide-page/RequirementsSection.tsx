export default function RequirementsSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 max-md:py-10 max-xl:mx-10 max-md:mx-0 px-5">
      <h2 className="text-4xl font-semibold text-chart-4 mb-6 max-xl:text-2xl max-md:text-xl">Requirements</h2>
      <ul className="space-y-3 text-gray-700 dark:text-muted-foreground list-disc list-inside max-md:text-sm">
        <li>Must be 18+ years old</li>
        <li>Valid ID (NID/Passport)</li>
        <li>Ability to communicate in Bangla or English</li>
        <li>Knowledge about local culture, history, or nature</li>
      </ul>
    </section>
  );
}

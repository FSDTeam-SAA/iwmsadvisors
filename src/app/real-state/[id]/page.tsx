import RealStateMain from "@/components/website/real-state/RealStateMain";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <RealStateMain id={id} />
    </div>
  );
};

export default Page;

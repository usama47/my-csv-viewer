import DynamicDetailPage from "@/components/DynamicDetailPage";

// Mocked function to simulate fetching available names
export async function generateStaticParams() {
  // Replace this array with your actual names dataset
  const names = [
    { name: "John Doe" },
    { name: "Jane Smith" },
  ];

  return names.map((item) => ({
    name: encodeURIComponent(item.name), // Static paths must be encoded
  }));
}

export default function DetailPage({ params }) {
  return <DynamicDetailPage name={params.name} />;
}

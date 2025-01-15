import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { ContentCard } from "@/components/ContentCard";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

// Mock data - replace with your Strapi API endpoint
const fetchContent = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: "First Post", excerpt: "This is the first post content..." },
    { id: 2, title: "Second Post", excerpt: "This is the second post content..." },
    { id: 3, title: "Third Post", excerpt: "This is the third post content..." },
  ];
};

export default function Content() {
  const { data: content, isLoading } = useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
  });

  return (
    <DashboardLayout>
      <div className="fade-in">
        <h1 className="text-4xl font-bold mb-6">Content</h1>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content?.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                excerpt={item.excerpt}
                onClick={() => console.log("Clicked:", item.title)}
              />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
import { DashboardLayout } from "@/components/DashboardLayout";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="fade-in">
        <h1 className="text-4xl font-bold mb-6">Welcome to Your CMS Dashboard</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Manage and view your content from Strapi CMS.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-primary/5 rounded-lg">
            <h2 className="font-semibold mb-2">Quick Start</h2>
            <p className="text-sm text-muted-foreground">
              Navigate to the Content section to view and manage your Strapi content.
            </p>
          </div>
          <div className="p-6 bg-primary/5 rounded-lg">
            <h2 className="font-semibold mb-2">Search</h2>
            <p className="text-sm text-muted-foreground">
              Use the search feature to quickly find specific content.
            </p>
          </div>
          <div className="p-6 bg-primary/5 rounded-lg">
            <h2 className="font-semibold mb-2">Settings</h2>
            <p className="text-sm text-muted-foreground">
              Configure your dashboard preferences and Strapi connection.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
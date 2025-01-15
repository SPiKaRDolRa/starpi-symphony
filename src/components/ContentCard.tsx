import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  excerpt?: string;
  onClick?: () => void;
}

export function ContentCard({ title, excerpt, onClick }: ContentCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      {excerpt && (
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        </CardContent>
      )}
    </Card>
  );
}
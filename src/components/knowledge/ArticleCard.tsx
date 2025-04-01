import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  slug: string;
  readingTime?: string;
}

const ArticleCard = ({
  title,
  excerpt,
  category,
  categorySlug,
  slug,
  readingTime = "3 min read",
}: ArticleCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      <CardContent className="p-6 flex flex-col flex-1">
        <Link to={`/category/${categorySlug}/${slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-kb-blue">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 flex-1">{excerpt}</p>
        
        <div className="flex items-center justify-between mt-2 text-sm">
          <Link 
            to={`/category/${categorySlug}`} 
            className="text-kb-blue hover:underline"
          >
            {category}
          </Link>
          
          <div className="flex items-center text-gray-500">
            <Clock size={14} className="mr-1" />
            <span>{readingTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
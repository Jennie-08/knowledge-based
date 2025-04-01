import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  articles?: { title: string; link: string }[];
}

const CategoryCard = ({
  title,
  description,
  icon,
  link,
  articles = [],
}: CategoryCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="bg-kb-lightBlue p-3 rounded-lg text-kb-blue mr-4">
            {icon}
          </div>
          <div>
            <Link to={link}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-kb-blue">{title}</h3>
            </Link>
            <p className="text-gray-600 mb-4">{description}</p>
            
            {articles.length > 0 && (
              <ul className="space-y-2 border-t border-gray-100 pt-3 mt-3">
                {articles.slice(0, 3).map((article, index) => (
                  <li key={index}>
                    <Link 
                      to={article.link} 
                      className="text-sm text-gray-700 hover:text-kb-blue flex items-center"
                    >
                      <ChevronRight size={14} className="mr-1" />
                      <span>{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            
            {articles.length > 0 && (
              <Link 
                to={link} 
                className="text-sm text-kb-blue font-medium flex items-center mt-3 hover:underline"
              >
                View all articles
                <ChevronRight size={16} className="ml-1" />
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
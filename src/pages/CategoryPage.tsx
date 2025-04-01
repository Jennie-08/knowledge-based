import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/knowledge/Breadcrumb";
import ArticleCard from "@/components/knowledge/ArticleCard";
import { categories, getArticlesByCategory } from "@/data/knowledgeData";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Find the current category
  const category = categories.find(cat => cat.slug === categorySlug);
  
  // Get articles for this category
  const categoryArticles = getArticlesByCategory(categorySlug || "");
  
  // Filter articles based on search term
  const filteredArticles = categoryArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  if (!category) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h2>
          <p>The category you're looking for doesn't exist or has been moved.</p>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb 
          items={[
            { label: category.title, link: undefined }
          ]} 
        />
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{category.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{category.description}</p>
          
          <div className="relative mb-8 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder={`Search in ${category.title}...`}
              className="pl-10 pr-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredArticles.map(article => (
                <ArticleCard 
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category}
                  categorySlug={article.categorySlug}
                  slug={article.slug}
                  readingTime={article.readingTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600">
                {searchTerm 
                  ? `No articles matching "${searchTerm}" in this category.` 
                  : "There are currently no articles in this category."}
              </p>
              {searchTerm && (
                <button 
                  className="mt-4 text-kb-blue hover:underline"
                  onClick={() => setSearchTerm("")}
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoryPage;

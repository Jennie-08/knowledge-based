import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/knowledge/Hero";
import CategoryCard from "@/components/knowledge/CategoryCard";
import ArticleCard from "@/components/knowledge/ArticleCard";
import { categories, getRecentArticles, getPopularArticles } from "@/data/knowledgeData";
import { BookOpen, LayoutDashboard, HelpCircle, Users, RefreshCw } from "lucide-react";

const getIconComponent = (iconName: string) => {
  const icons = {
    "BookOpen": <BookOpen size={24} />,
    "LayoutDashboard": <LayoutDashboard size={24} />,
    "HelpCircle": <HelpCircle size={24} />,
    "Users": <Users size={24} />,
    "RefreshCw": <RefreshCw size={24} />
  };
  
  return icons[iconName as keyof typeof icons] || <BookOpen size={24} />;
};

const Index = () => {
  const recentArticles = getRecentArticles(3);
  const popularArticles = getPopularArticles(3);
  
  return (
    <MainLayout>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Browse Knowledge Base Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id}
                title={category.title}
                description={category.description}
                icon={getIconComponent(category.icon)}
                link={`/category/${category.slug}`}
                articles={getRecentArticles(3)
                  .filter(article => article.categorySlug === category.slug)
                  .map(article => ({
                    title: article.title,
                    link: `/category/${article.categorySlug}/${article.slug}`
                  }))}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Articles */}
      <section className="py-20 bg-kb-gray">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Recent Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
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
        </div>
      </section>
      
      {/* Popular Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Popular Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
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
        </div>
      </section>
      
      {/* Help Banner */}
      <section className="py-16 bg-kb-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="mb-8">Contact our support team and we'll get back to you as soon as possible.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#" className="bg-kb-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Contact Support
            </a>
            <a href="#" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors">
              Submit a Ticket
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

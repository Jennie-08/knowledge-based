import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/knowledge/Breadcrumb";
import TableOfContents from "@/components/knowledge/TableOfContents";
import { getArticleBySlug, getArticlesByCategory } from "@/data/knowledgeData";
import ArticleCard from "@/components/knowledge/ArticleCard";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Clock, Calendar, Tag, PlayCircle } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { useState } from "react";

const ArticlePage = () => {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const articleSlug = params.articleSlug as string;
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  
  // Find the current article
  const article = getArticleBySlug(articleSlug || "");
  
  // Get related articles (other articles in the same category)
  const relatedArticles = getArticlesByCategory(categorySlug || "")
    .filter(a => a.slug !== articleSlug)
    .slice(0, 3);
  
  if (!article) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h2>
          <p>The article you're looking for doesn't exist or has been moved.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb 
          items={[
            { label: article.category, link: `/category/${article.categorySlug}` },
            { label: article.title }
          ]} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <article className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
              
              <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{article.readingTime}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>Updated: {article.lastUpdated}</span>
                </div>
              </div>
              
              {article.videoUrl && (
                <div className="mb-8 rounded-lg overflow-hidden bg-gray-100">
                  {!videoPlaying ? (
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => setVideoPlaying(true)}
                    >
                      <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                        {article.thumbnailUrl ? (
                          <img 
                            src={article.thumbnailUrl} 
                            alt={`${article.title} video thumbnail`} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                            <PlayCircle size={64} className="text-blue-600 opacity-70" />
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-blue-600 text-white rounded-full p-4 shadow-lg transform transition-transform group-hover:scale-110">
                            <PlayCircle size={32} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video">
                      <iframe
                        src={article.videoUrl}
                        title={`Video guide for ${article.title}`}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              )}
              
              <div className="prose max-w-none">
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <div key={index} className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 mb-4">Was this article helpful?</p>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ThumbsUp size={16} />
                    Yes
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ThumbsDown size={16} />
                    No
                  </Button>
                </div>
              </div>
            </article>
            
            {relatedArticles.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map(article => (
                    <ArticleCard 
                      key={article.id || article.slug}
                      {...article}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            {article.headings?.length > 0 && <TableOfContents headings={article.headings} />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticlePage;

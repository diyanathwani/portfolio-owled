import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Define the article data in a central location
const ARTICLE_DATA = {
  'meesho-dropshipping': {
    id: 'meesho-dropshipping',
    title: 'How Big Is Meesho Dropshipping In India?',
    externalLink: 'https://amz.ninja/meesho-dropshipping-india/',
    publication: 'AMZ Ninja',
    date: '2023',
    role: 'Author & Researcher',
    technologies: 'E-commerce, Market Analysis',
    achievements: 'Reached 10k+ readers, featured in industry newsletters',
    type: 'article' as const
  },
  'indian-ecommerce-marketplaces': {
    id: 'indian-ecommerce-marketplaces',
    title: 'Best Indian E-Commerce Marketplaces',
    externalLink: 'https://sellersheaven.com/indian-e-commerce-marketplaces/',
    publication: 'Sellers Heaven',
    date: '2023',
    role: 'Contributing Writer',
    technologies: 'E-commerce, Content Strategy',
    achievements: 'Top performing article of the month',
    type: 'article' as const
  },
  'kourtney-kardashian-fetal-surgery': {
    id: 'kourtney-kardashian-fetal-surgery',
    title: 'Kourtney Kardashian\'s URGENT Fetal Surgery: Women\'s Go-To Guide To A Safe Pregnancy',
    externalLink: 'https://www.shefinds.com/2023/kourtney-kardashian-fetal-surgery-pregnancy/',
    publication: 'SheFinds',
    date: '2023',
    role: 'Press Release Author',
    technologies: 'Content Writing, Health Journalism',
    achievements: 'Provided essential safety guidelines for expectant mothers.',
    type: 'pdf' as const,
    pdfLink: 'https://drive.google.com/file/d/1gidf7R0EulJGAIXkawM8vKQQasaGkO7iEiOECb7Dj7I/preview'
  }
};

type ArticleType = typeof ARTICLE_DATA[keyof typeof ARTICLE_DATA];

// Mock function to fetch article data
const getArticleById = async (id: string | undefined): Promise<ArticleType | null> => {
  if (!id) return null;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ARTICLE_DATA[id as keyof typeof ARTICLE_DATA] || null);
    }, 100);
  });
};

const ArticleLoadingSkeleton = () => (
  <div className="min-h-screen bg-gray-900 p-8">
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="h-8 bg-gray-800 rounded w-48"></div>
      <div className="h-12 bg-gray-800 rounded w-3/4"></div>
      <div className="h-4 bg-gray-800 rounded w-1/2"></div>
      <div className="h-96 bg-gray-800 rounded-lg"></div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-800 rounded w-full"></div>
      ))}
    </div>
  </div>
);

// Error component
const ArticleError = ({ error, onRetry }: { error: string | null, onRetry: () => void }) => (
  <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">
        {error?.includes('not found') ? 'Article Not Found' : 'Something Went Wrong'}
      </h1>
      <p className="text-gray-300 mb-8">
        {error || 'Unable to load the article. Please try again.'}
      </p>
      <div className="space-x-4">
        <button
          onClick={onRetry}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Go Back
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  </div>
);

const ArticlePage = () => {
  // Get the ID from the URL parameter (matches :id in the route)
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const getArticleContent = (article: ArticleType) => (
    article.type === 'pdf' 
      ? '<p class="mb-4">This is an interactive PDF document. You can view it in the embedded viewer below.</p>'
      : `
        <p class="mb-4">This is a preview of the article content. In a production environment, 
        this would be the full content of the article fetched from the original source.</p>
        <p class="mb-4">The actual implementation would include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Proper HTML structure of the original article</li>
          <li>Images and media with proper attribution</li>
          <li>Maintained formatting and styling</li>
          <li>Responsive design</li>
        </ul>
        <p class="mb-4">For now, please visit the original article using the button below to read the full content.</p>
      `
  );

  useEffect(() => {
    let isMounted = true;
    
    const fetchArticle = async () => {
      if (!id) {
        setError('Article ID is missing from the URL');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        const articleData = await getArticleById(id);
        
        if (!isMounted) return;
        
        if (!articleData) {
          throw new Error('Article not found');
        }

        // Set the article data
        setArticle(articleData);
        
      } catch (err) {
        console.error('Error loading article:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load article. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchArticle();
    
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <ArticleLoadingSkeleton />;
  }

  if (error) {
    return <ArticleError error={error} onRetry={() => window.location.reload()} />;
  }

  if (!article) {
    return <ArticleError error="Article not found" onRetry={() => window.location.reload()} />;
  }
  
  // Generate content based on article type
  const content = getArticleContent(article);
  
  // Handle PDF case
  if (article.type === 'pdf') {
    // Create a direct download link for the PDF
    const pdfDownloadUrl = article.pdfLink;
    // Use the direct preview URL for the iframe
    const pdfViewerUrl = pdfDownloadUrl || '';
    return (
      <div className="min-h-screen bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate('/')} 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </button>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
            <div 
              className="prose prose-invert max-w-none mb-8" 
              dangerouslySetInnerHTML={{ __html: content }} 
            />
            <div className="w-full h-[800px] bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
              <div className="bg-gray-200 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Document Viewer</span>
                <a
                  href={pdfViewerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center"
                  title="Open in new tab"
                >
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </a>
              </div>
              <iframe
                src={pdfViewerUrl}
                className="w-full h-full border-0"
                title="PDF Viewer"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-12 xl:px-16">
      <Helmet>
        <title>{article.title} | My Portfolio</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={article.externalLink} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/')} 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </button>
        
        <article className="bg-gray-800 rounded-lg p-6 md:p-8 lg:p-10 mb-8 border border-gray-700">
          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                {article.publication}
              </span>
              <span className="mx-2">•</span>
              <time dateTime={article.date}>{article.date}</time>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>
            
            {article.role && (
              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-gray-400">Role:</span>{' '}
                  <span className="text-white">{article.role}</span>
                </div>
                {article.technologies && (
                  <div>
                    <span className="text-gray-400">Technologies:</span>{' '}
                    <span className="text-white">{article.technologies}</span>
                  </div>
                )}
                {article.achievements && (
                  <div>
                    <span className="text-gray-400">Achievements:</span>{' '}
                    <span className="text-white">{article.achievements}</span>
                  </div>
                )}
              </div>
            )}
          </header>

          <div 
            className="prose prose-invert max-w-none mb-10"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-700">
            <a
              href={article.externalLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Read full article on {article.publication}
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;

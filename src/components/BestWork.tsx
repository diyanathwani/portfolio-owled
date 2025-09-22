import { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { getOgImage } from '../utils/ogImageFetcher';

// Lazy load the image component
const LazyImage = lazy(() => import('./ui/LazyImage'));

// Predefined placeholder images for better loading experience
const placeholderImages = [
  'https://via.placeholder.com/800x400/1f2937/ffffff?text=Loading+Article',
  'https://via.placeholder.com/800x400/1f2937/ffffff?text=PDF+Document',
  'https://via.placeholder.com/800x400/1f2937/ffffff?text=Loading+Article'
];

interface Project {
  id: string | number;
  title: string;
  description: string;
  thumbnail?: string | null;
  externalLink?: string;
  link: string;
  tag: string;
  type?: 'article' | 'pdf';
  pdfLink?: string;
  loading?: boolean;
}

const BestWork = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to get a placeholder image based on project index
  const getPlaceholderImage = useCallback((index: number) => {
    // Inline placeholder SVG to avoid external requests
    const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%231f2937'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23ffffff'%3ELoading...%3C/text%3E%3C/svg%3E`;
    return placeholderSvg;
  }, []);

  useEffect(() => {
    const projectsData: Project[] = [
      {
        id: 'meesho-dropshipping',
        title: 'How Big Is Meesho Dropshipping In India?',
        description: 'An in-depth analysis of Meesho\'s dropshipping potential in the Indian market. Conducted market research, competitive analysis, and growth strategy formulation.',
        externalLink: 'https://amz.ninja/meesho-dropshipping-india/',
        link: '/article/meesho-dropshipping',
        tag: 'E-commerce Analysis',
        type: 'article',
        thumbnail: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        loading: false
      },
      {
        id: 'kourtney-kardashian-fetal-surgery',
        title: 'Kourtney Kardashian\'s URGENT Fetal Surgery',
        description: 'Press release covering Kourtney Kardashian\'s pregnancy journey and essential safety guidelines for expectant mothers.',
        externalLink: 'https://www.shefinds.com/2023/kourtney-kardashian-fetal-surgery-pregnancy/',
        link: '/article/kourtney-kardashian-fetal-surgery',
        tag: 'Press Release',
        type: 'pdf',
        pdfLink: 'https://drive.google.com/file/d/1gidf7R0EulJGAIXkawM8vKQQasaGkO7iEiOECb7Dj7I/preview',
        thumbnail: '/src/components/Assets/Gemini_Generated_Image_9xa8pn9xa8pn9xa8.png',
        loading: false
      },
      {
        id: 'indian-ecommerce-marketplaces',
        title: 'Best Indian E-Commerce Marketplaces',
        description: 'Comprehensive guide to top e-commerce platforms in India for online sellers. Includes platform analysis, fee structures, and growth strategies.',
        externalLink: 'https://sellersheaven.com/indian-e-commerce-marketplaces/',
        link: '/article/indian-ecommerce-marketplaces',
        tag: 'Market Research',
        type: 'article',
        thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        loading: false
      }
    ];

    // Set initial state with placeholders
    setProjects(projectsData);
    setLoading(false);

    // Fetch thumbnails in the background
    const fetchThumbnails = async () => {
      const updatedProjects = await Promise.all(
        projectsData.map(async (project) => {
          if (project.type === 'article' && project.externalLink) {
            try {
              const thumbnail = await getOgImage(project.externalLink);
              return { ...project, thumbnail, loading: false };
            } catch (error) {
              console.error(`Failed to fetch thumbnail for ${project.title}:`, error);
              return { ...project, loading: false };
            }
          }
          return { ...project, loading: false };
        })
      );
      setProjects(updatedProjects);
    };

    // Don't wait for thumbnails to load before showing content
    fetchThumbnails();
  }, [getPlaceholderImage]);

  // Show loading skeleton if still loading
  if (loading) {
    return (
      <section className="py-20 px-4 md:px-8 lg:px-12 xl:px-16 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-lg mb-2 inline-block">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Best Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gray-700 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6 mb-4 animate-pulse"></div>
                  <div className="h-8 bg-blue-600 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-12 xl:px-16 bg-gray-900" id="best-work">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h2 className="text-[10rem] font-black text-white select-none">
          PORTFOLIO
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-lg mb-2 inline-block">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Best Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projectItem, index) => (
            <div 
              key={projectItem.id} 
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Link 
                to={projectItem.type === 'pdf' ? projectItem.pdfLink || '#' : projectItem.link} 
                className="block h-full group-hover:no-underline"
                target={projectItem.type === 'pdf' || projectItem.externalLink ? '_blank' : undefined}
                rel={projectItem.type === 'pdf' || projectItem.externalLink ? 'noopener noreferrer' : undefined}
              >
                <div className="h-48 bg-gray-700 overflow-hidden relative">
                  <Suspense fallback={<div className="w-full h-full bg-gray-700 animate-pulse"></div>}>
                    <LazyImage 
                      src={projectItem.thumbnail || getPlaceholderImage(index)}
                      alt={projectItem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={800}
                      height={400}
                    />
                  </Suspense>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <div className="bg-blue-600/90 text-white px-4 py-2 rounded-full flex items-center">
                      <span>{projectItem.type === 'pdf' ? 'View PDF' : 'View Article'}</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full z-10">
                    {projectItem.tag}
                  </div>
                  {projectItem.type === 'pdf' && (
                    <div className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {projectItem.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {projectItem.description}
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestWork;

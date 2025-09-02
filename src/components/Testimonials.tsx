import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    // Tier 1 – Clients & Leadership
    {
      id: '1',
      name: 'Piyush Badme',
      role: 'Digital Marketing Expert',
      company: 'March 3, 2025 – Worked with Diya on the same team',
      content: 'Diya is an exceptional Content Strategist with a unique blend of creativity and analytical skills. Her ability to craft data-driven content strategies that align with business goals and engage audiences is remarkable. Diya excels in SEO optimization, audience analysis, and storytelling, consistently delivering impactful results. She\'s a collaborative team player with excellent communication skills, making complex ideas clear and actionable. Diya\'s innovative approach and attention to detail make her a standout professional. I highly recommend her to any organization looking to elevate its content strategy and achieve measurable success. She\'s a true asset to any team!',
      avatar: '',
      rating: 5
    },
    {
      id: '2',
      name: 'Sagar Bhatt',
      role: 'Client',
      company: 'March 4, 2025 – Diya\'s Client',
      content: 'Diya is a highly talented and dedicated freelance content writer. She approaches every project with determination, creativity, and a strong commitment to meeting deadlines. Her ability to craft engaging and high-quality content sets her apart. I highly recommend her for anyone looking for a skilled and reliable writer.',
      avatar: '',
      rating: 5
    },
    {
      id: '3',
      name: 'Arohan Paul',
      role: 'Data Scientist',
      company: 'Johnson Electric – February 1, 2024 – Managed Diya directly',
      content: 'I\'m delighted to provide a glowing recommendation for Diya, a stellar content creator who reported directly to me for a period of 3 months. She created captivating content for our website, project stakeholders, and presentations. During her time on my team, Diya showcased an unparalleled talent for converting highly technical content related to the water industry into an engaging body of work accessible to a wider and non-technical audience. This helped us tremendously in our project discussions and presentations across various platforms. One of Diya\'s greatest strengths is her ability to adapt and thrive in a fast-paced environment. She joined my team for a short span of three months and it required her to quickly adapt to our team environment and understand project deliverables. She managed to pull this off using her exceptional communication and collaboration skills. I wish her all the best in her future endeavors and I am sure she will keep improving her writing and communication skills and reach great heights in her career.',
      avatar: '',
      rating: 5
    },
    // Tier 2 – Events, Projects & Team Leads
    {
      id: '4',
      name: 'Owais Shaikh',
      role: 'Founding Engineer',
      company: 'Nanneer Global – November 9, 2024 – Worked with Diya at Paradox 2023',
      content: 'I had the absolute pleasure of working with Diya for Paradox 2023 (our university fest), and I can confidently attest that she is an exceptional content creator! Here are a few highlights from our experience: Her unique perspective and ideas brought in engaging and high-quality content for the fest promotion. Her ability to work under pressure and meet deadlines was impressive. Her collaborative spirit and open communication made the entire process smooth and enjoyable. I wholeheartedly recommend her and can\'t wait to collaborate with her again in the future.',
      avatar: '',
      rating: 5
    },
    {
      id: '5',
      name: 'Aman Kankriya',
      role: 'IIT Madras, Paradox Team',
      company: 'August 1, 2023 – Reported directly to Diya',
      content: 'I am delighted to recommend Diya Nathwani, my classmate at IIT Madras and colleague at Paradox, 2023. As the leader of the content team, Diya demonstrated outstanding content management and strategic skills in handling events of significant scale. Her ability to create captivating event descriptions, catchy slogans, and engaging media articles contributed greatly to the fest\'s success. Diya\'s strategic approach to event management and her exceptional leadership in motivating and guiding the team make her an invaluable asset for any position requiring content creation and event management expertise.',
      avatar: '',
      rating: 5
    },
    {
      id: '6',
      name: 'Dev Khatri',
      role: 'Brand & Graphics Designer',
      company: 'IIT Madras \'25 – April 11, 2023 – Managed Diya directly',
      content: 'Diya is a gifted writer with a keen eye for detail and an impressive ability to craft compelling and engaging copy. She is also an excellent communicator and collaborator, always willing to go the extra mile to ensure that the final product meets or exceeds expectations. During her time on my team, she consistently demonstrated exceptional writing skills and an unwavering dedication to producing high-quality content. In addition to her exceptional writing skills, Diya is also a pleasure to work with. She is a team player who is always willing to lend a hand and offer valuable insights and feedback. Her positive attitude and strong work ethic make her an asset to any team. Overall, I would highly recommend Diya for any content writing position. She is a talented writer, a skilled collaborator, and a pleasure to work with. Any team would be lucky to have her on board.',
      avatar: '',
      rating: 5
    },
    {
      id: '7',
      name: 'Sharad Nathwani',
      role: 'MBA @ NIT Trichy \'26',
      company: 'Mentor – September 19, 2023 – Mentor & Collaborator',
      content: 'I had the pleasure of working closely with Diya on a university-level project, where we not only achieved the 2nd runner-up title but also created something truly exceptional. While the project idea was initially mine, I must credit Diya for being the driving force behind its success. Her dedication, out-of-the-box thinking, and exceptional cooperation were the main ingredients that made our project stand out. Furthermore, I\'ve had the privilege of witnessing Diya\'s tireless work ethic firsthand, especially during her role as the \'super coordinator\' of the content team for our college\'s annual events. Her efforts were nothing short of extraordinary. As her brother, I\'ve seen Diya grow and evolve, breaking out of her shell to achieve the recognition and success she rightfully deserves. Her passion and determination are bound to take her to even greater heights.',
      avatar: '',
      rating: 5
    },
    // Tier 3 – Peers & Collaborators
    {
      id: '8',
      name: 'Akankssha Singh',
      role: 'Health & Food Writer',
      company: 'CenturySoft Pvt. Ltd. – November 8, 2024 – Worked with Diya',
      content: 'I am pleased to offer my highest recommendation for Diya as a creative professional. Having worked with her on multiple projects, I have witnessed firsthand her incredible talent, vision, and ability to deliver truly impactful work. Diya possesses a unique blend of creativity and strategic thinking that allows her to transform complex ideas into clear, compelling written content that resonates with audiences. What sets Diya apart is her ability to approach every project with both artistic innovation and a deep understanding of the audience\'s needs. Her attention to detail and commitment to excellence are evident in every piece of writing she produces. Beyond her technical skill, Diya\'s passion for storytelling and her collaborative spirit make her an invaluable asset to any team.',
      avatar: '',
      rating: 5
    },
    {
      id: '9',
      name: 'Vedant Mathankar',
      role: 'Aspiring Architect',
      company: 'BIM Modelling Enthusiast – September 26, 2024 – Studied with Diya',
      content: 'I am delighted to recommend Diya Nathwani, an exceptional creative writer who consistently demonstrates perfectionism, creativity, and attention to detail in every project she undertakes. Her approach to writing is both unique and refined, with an ability to communicate crystal-clear ideas that perfectly align with the demands of any given project. Having worked alongside Diya, I can confidently say that her work ethic and professionalism are second to none.',
      avatar: '',
      rating: 5
    },
    {
      id: '10',
      name: 'Akshay Mair',
      role: 'Content Writer & Strategist',
      company: 'CenturySoft Pvt. Ltd. – November 9, 2024 – Worked with Diya for 6 months',
      content: 'Diya and I worked alongside for 6 months. She was helpful, jolly, always keen to learn something new every day, and always provided the best quality in her work. It was a memorable time, Diya had great connections with everyone in the company. She was a very instrumental part of the team.',
      avatar: '',
      rating: 5
    },
    {
      id: '11',
      name: 'Saurabh Chahal',
      role: 'Everyday Learner',
      company: 'CenturySoft Pvt. Ltd. – February 2, 2024 – Collaborated with Diya',
      content: 'Diya & I worked for a very short time; however, I have no doubt that she is one of the best content writers I have worked with. You don\'t have to sit with her to explain what to write & what not. Her writing skill is a good mix of current trends & traditional, which makes the content worth reading.',
      avatar: '',
      rating: 5
    },
    {
      id: '12',
      name: 'Ashwin Hebbar',
      role: 'Product Engineer – AI',
      company: 'August 1, 2023 – Collaborated with Diya',
      content: 'Formidable work ethic, excellent leader and team member.',
      avatar: '',
      rating: 5
    },
    {
      id: '13',
      name: 'Aditya Jaiswal',
      role: 'Ph.D Scholar',
      company: 'IIT Kanpur – August 3, 2023 – Worked with Diya on same team',
      content: 'I highly recommend Diya Nathwani for her exceptional skills in content coordination and management. During our time working together, she consistently demonstrated a keen eye for detail, creativity, and a deep understanding of target audiences. Diya excelled in crafting engaging and relevant content across various platforms, effectively driving engagement and brand visibility. Her ability to collaborate with cross-functional teams, meet deadlines, and adapt to evolving strategies is truly commendable.',
      avatar: '',
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="text-9xl font-black font-montserrat text-gray-800 select-none">
          TESTIMONIALS
        </span>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-black font-montserrat mb-4 glow-text">
            CLIENT <span className="text-pink-400">TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-gray-400">
            What people say about working with me
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-pink-500/20 text-white p-4 rounded-full transition-all hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-pink-500/20 text-white p-4 rounded-full transition-all hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial cards */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl p-8 mx-auto max-w-4xl hover-card">
                  <div className="flex flex-col items-center text-center">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500 bg-gradient-to-br from-pink-500/20 to-blue-500/20 flex items-center justify-center">
                        {testimonial.avatar ? (
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-pink-400 text-xs font-medium">IMG</span>
                        )}
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-pink-400 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-pink-400 to-blue-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
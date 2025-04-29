import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, GraduationCap, Award, Lightbulb, Play, Linkedin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import SEO from '../components/common/SEO';
import VIVEK from '../assets/images/VIVEK.jpg';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    if (isAuthenticated) {
      navigate('/booking');
    } else {
      navigate('/login', { state: { from: '/booking' } });
    }
  };

  const domains = [
    { title: 'Web Development', icon: <BookOpen className="w-12 h-12 text-blue-600" /> },
    { title: 'App Development', icon: <GraduationCap className="w-12 h-12 text-teal-600" /> },
    { title: 'Data Science', icon: <Lightbulb className="w-12 h-12 text-orange-600" /> },
    { title: 'AI & ML', icon: <Award className="w-12 h-12 text-purple-600" /> }
  ];

  const testimonials = [
    
    {
      id: 1,
      name: "Preethi",
      course: "Web Development",
      videoUrl: "/videos/VID-20250426-WA0002.mp4",
      thumbnail: "/videos/VID-20250426-WA0002.mp4",
      quote: "Their sessions provided valuable resources and insightful webinars that greatly enhanced my learning experience and broadened my understanding of the subject."
    },
    {
      id: 2,
      name: "Padma Sree", 
      course: "Technical Skills",
      videoUrl: "/videos/VID-20250426-WA0003.mp4",
      thumbnail: "/videos/VID-20250426-WA0003.mp4",
      quote: "The sessions greatly strengthened my aptitude skills and provided additional resources that helped me improve my overall problem-solving abilities."
    },
    
    {
      id: 3,
      name: "Dipansh Choudhary",
      course: "Competitative Coding", 
      videoUrl: "/videos/VID-20250426-WA0005.mp4",
      thumbnail: "/videos/VID-20250426-WA0005.mp4",
      quote: "The coding classes led by Mr. Ragavendra were extremely valuable, with well-organized sessions and hands-on exercises that simplified complex programming topics."
    },
    {
      id: 4,
      name: "Prajin",
      course: "CP",
      videoUrl: "/videos/WhatsApp Video 2025-04-26 at 12.19.02_0908540c.mp4",
      thumbnail: "/videos/WhatsApp Video 2025-04-26 at 12.19.02_0908540c.mp4",
      quote: "Attending the coding classes conducted by Mr. Ragavendra was an enriching experience. The sessions were well-structured, and the hands-on exercises made complex programming concepts easy to graspded my expectations. The curriculum was comprehensive and the practical assignments helped me understand complex concepts easily."
    },
    /*
     {
      id: 5,
      name: "",
      course: "Technical Skills",
      videoUrl: "/videos/VID-20250426-WA0004.mp4",
      thumbnail: "/videos/VID-20250426-WA0004.mp4",
      quote: "The AI course exceeded my expectations. The curriculum was comprehensive and the practical assignments helped me understand complex concepts easily."
    },
    */
  ];

  return (
    <>
      <SEO 
        title="Engiversee - Empowering Engineering Students with Practical Skills"
        description="Join Engiversee to bridge the gap between academic theory and industry practice. Free workshops, programming tutorials, and career guidance for engineering students."
        keywords="engineering education, programming tutorials, technical workshops, career guidance, student development, practical skills, web development, data science, AI ML"
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Empowering Engineers of Tomorrow
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Embark on a journey of knowledge and growth with Engiversee. We bridge the gap between theoretical education and practical industry skills.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button 
                  onClick={handleBookAppointment} 
                  className="btn btn-primary bg-white text-blue-700 hover:bg-blue-50"
                  aria-label="Book an appointment for personalized guidance"
                >
                  Book an Appointment
                </button>
                <Link 
                  to="/about" 
                  className="btn btn-outline border-white text-white hover:bg-white/10"
                  aria-label="Learn more about Engiversee's mission and vision"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-gray-50" aria-labelledby="features-heading">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="mb-4">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our community focuses on offering a variety of educational resources and opportunities to help you excel in your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div className="card p-8" whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-4">Free Workshops</h3>
                <p className="text-gray-600">
                  Participate in our hands-on workshops designed to enhance your technical skills across various domains.
                </p>
              </motion.div>

              <motion.div className="card p-8" whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-teal-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Support</h3>
                <p className="text-gray-600">
                  Join a thriving community of like-minded individuals who share knowledge and support each other's growth.
                </p>
              </motion.div>

              <motion.div className="card p-8" whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-4">Industry Events</h3>
                <p className="text-gray-600">
                  Connect with industry experts through webinars, seminars, and networking events tailored for engineers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section className="section" aria-labelledby="domains-heading">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="domains-heading" className="mb-4">Explore Our Domains</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover educational resources across various technical domains
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domains.map((domain, index) => (
                <motion.div 
                  key={index}
                  className="card p-6 text-center"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className="flex justify-center mb-4">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                  <Link 
                    to="/search" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    aria-label={`View ${domain.title} sessions`}
                  >
                    View Sessions →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Member Spotlight */}
        <section className="section bg-gray-50" aria-labelledby="team-spotlight-heading">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="team-spotlight-heading" className="mb-4">Meet Our Lead Web Developer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get to know the expert behind our web development workshops
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={VIVEK} 
                      alt="Vivek Deshmukh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2">Vivek Deshmukh</h3>
                    <p className="text-blue-600 font-medium mb-4">Lead Web Developer</p>
                    <p className="text-gray-600 mb-6">
                      Vivek leads our web development workshops and creates engaging content for students looking to excel in front-end and back-end technologies. With his expertise and passion for teaching, he helps students bridge the gap between academic knowledge and industry requirements.
                    </p>
                    <a 
                      href="http://www.linkedin.com/in/vivekdeshmukhsoftwaredeveloper"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label="Connect with Vivek on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Student Testimonials Section */}
        <section className="section bg-gray-50" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="mb-4">Student Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our students about their learning journey with Engiversee
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <video 
                      src={testimonial.thumbnail} 
                      className="w-full h-48 object-cover" 
                      muted 
                      loop 
                      playsInline 
                      autoPlay 
                      aria-label={`Video testimonial from ${testimonial.name}`}
                    />
                    <a 
                      href={testimonial.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity hover:bg-opacity-40"
                      aria-label={`Watch ${testimonial.name}'s full testimonial`}
                    >
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-blue-600 ml-1" aria-hidden="true" />
                      </div>
                    </a>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{testimonial.course}</p>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join Engiversee today and take the first step towards enhancing your skills and advancing your career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleBookAppointment}
                className="btn bg-white text-blue-800 hover:bg-blue-50"
                aria-label="Book an appointment to start your learning journey"
              >
                Book an Appointment
              </button>
              <Link 
                to="/signup" 
                className="btn border border-white text-white hover:bg-white/10"
                aria-label="Create your Engiversee account"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
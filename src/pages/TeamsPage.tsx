import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import SEO from '../components/common/SEO';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
  category: 'founder' | 'cofounder' | 'team';
}

const TeamsPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Raghavendra V",
      role: "Founder",
      image: "https://tse4.mm.bing.net/th?id=OIP.NDE_qBmOavpeezBouVhS3QHaHa&pid=Api&P=0&h=180",
      bio: "Raghavendravis a passionate educator in the ed-tech industry. He founded Engiversee with the vision to bridge the gap between academia and industry.",
      linkedin: "https://www.linkedin.com/in/raghavendrav1505/",
      email: "raghavendra@engiversee.com",
      category: "founder"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Co-Founder ",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Priya brings her technical expertise and industry connections to Engiversee. She leads our technical workshops and curriculum development.",
      linkedin: "https://www.linkedin.com/company/engiversee/",
      email: "priya@engiversee.com",
      category: "cofounder"
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Co-Founder & COO",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Rahul oversees the day-to-day operations at Engiversee, ensuring our programs run smoothly and our community receives the best experience.",
      linkedin: "https://www.linkedin.com/company/engiversee/",
      email: "rahul@engiversee.com",
      category: "cofounder"
    },
    {
      id: 4,
      name: "Ananya Gupta",
      role: "Lead Web Developer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Ananya leads our web development workshops and creates engaging content for students looking to excel in front-end and back-end technologies.",
      linkedin: "https://www.linkedin.com/company/engiversee/",
      category: "team"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Data Science Instructor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Vikram specializes in data science and machine learning. He conducts workshops on Python, data analysis, and AI applications.",
      linkedin: "https://www.linkedin.com/company/engiversee/",
      category: "team"
    },
    {
      id: 6,
      name: "Neha Kapoor",
      role: "Career Counselor",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Neha provides career guidance to students, helping them navigate job opportunities, interviews, and professional development.",
      linkedin: "https://www.linkedin.com/company/engiversee/",
      category: "team"
    },
    {
      id: 7,
      name: "Karthik Raj",
      role: "Mobile App Developer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Karthik conducts workshops on mobile app development, covering both Android and iOS platforms with Flutter and React Native.",
      linkedin: "https://www.linkedin.com/company/engiversee/",
      category: "team"
    }
  ];

  const founders = teamMembers.filter(member => member.category === 'founder');
  const cofounders = teamMembers.filter(member => member.category === 'cofounder');
  const team = teamMembers.filter(member => member.category === 'team');

  return (
    <>
      <SEO 
        title="Our Team" 
        description="Meet the dedicated team behind Engiversee who are passionate about empowering students with knowledge and skills."
      />
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Team</h1>
            <p className="text-xl text-blue-100">
              Meet the passionate individuals behind Engiversee who are dedicated to empowering the next generation of engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionaries who established Engiversee with a mission to transform engineering education
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {founders.map(member => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Co-Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the key individuals who joined our mission early and helped shape Engiversee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {cofounders.map(member => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals who make our vision a reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map(member => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                      <span>Connect</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Are you passionate about education and technology? We're always looking for talented individuals to join our mission.
          </p>
          <a 
            href="/contact" 
            className="btn bg-white text-blue-800 hover:bg-blue-50"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default TeamsPage;

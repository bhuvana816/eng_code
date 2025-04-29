import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
<<<<<<< HEAD
=======
  phone?: string;
  location?: string;
  occupation?: string;
  education?: string;
  github?: string;
  linkedin?: string;
  appointments?: {
    id: string;
    date: string;
    time: string;
    purpose: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  }[];
  sessions?: {
    id: string;
    title: string;
    domain: string;
    date: string;
    time: string;
    instructor: string;
    status: 'UPCOMING' | 'COMPLETED';
  }[];
>>>>>>> 77f9098 (Made changes to XYZ)
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
<<<<<<< HEAD
=======
  updateProfile: (data: Partial<User>) => Promise<boolean>;
>>>>>>> 77f9098 (Made changes to XYZ)
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // This is a mock implementation. In a real app, you would call an API
    if (email && password.length >= 6) {
      const mockUser = {
        id: '1',
        name: email.split('@')[0],
        email,
<<<<<<< HEAD
=======
        phone: '+1234567890',
        location: 'New York, USA',
        occupation: 'Software Engineer',
        education: 'B.S. Computer Science',
        github: 'https://github.com/username',
        linkedin: 'https://linkedin.com/in/username',
        appointments: [
          {
            id: '1',
            date: '2025-05-01',
            time: '10:00 AM',
            purpose: 'Career Guidance',
            status: 'COMPLETED' as const
          },
          {
            id: '2',
            date: '2025-05-15',
            time: '2:00 PM',
            purpose: 'Technical Interview Preparation',
            status: 'PENDING' as const
          }
        ],
        sessions: [
          {
            id: '1',
            title: 'Advanced React with Redux',
            domain: 'Web Development',
            date: '2025-04-20',
            time: '10:00 AM - 1:00 PM',
            instructor: 'Ananya Gupta',
            status: 'COMPLETED' as const
          },
          {
            id: '2',
            title: 'Deep Learning with TensorFlow',
            domain: 'AI & ML',
            date: '2025-05-02',
            time: '2:00 PM - 5:00 PM',
            instructor: 'Vikram Singh',
            status: 'UPCOMING' as const
          }
        ]
>>>>>>> 77f9098 (Made changes to XYZ)
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // This is a mock implementation. In a real app, you would call an API
    if (name && email && password.length >= 6) {
      const mockUser = {
        id: '1',
        name,
        email,
<<<<<<< HEAD
=======
        appointmentsCount: 0,
        sessionsCount: 0
>>>>>>> 77f9098 (Made changes to XYZ)
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

<<<<<<< HEAD
=======
  const updateProfile = async (data: Partial<User>): Promise<boolean> => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return true;
    }
    return false;
  };

>>>>>>> 77f9098 (Made changes to XYZ)
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
<<<<<<< HEAD
=======
    updateProfile
>>>>>>> 77f9098 (Made changes to XYZ)
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
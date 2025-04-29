import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Sessions: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Please log in to view your sessions</h2>
            <Link
              to="/login"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const completedSessions = user.sessions?.filter(session => session.status === 'COMPLETED') || [];
  const upcomingSessions = user.sessions?.filter(session => session.status === 'UPCOMING') || [];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">My Sessions</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">View and manage your learning sessions</p>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium text-gray-900 mb-4">Upcoming Sessions</h4>
              {upcomingSessions.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {upcomingSessions.map((session) => (
                    <li key={session.id} className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{session.title}</p>
                          <p className="text-sm text-gray-500">
                            {session.date} at {session.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            Instructor: {session.instructor}
                          </p>
                          <p className="text-sm text-gray-500">
                            Domain: {session.domain}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Upcoming
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No upcoming sessions</p>
              )}
            </div>
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
              <h4 className="text-md font-medium text-gray-900 mb-4">Completed Sessions</h4>
              {completedSessions.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {completedSessions.map((session) => (
                    <li key={session.id} className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{session.title}</p>
                          <p className="text-sm text-gray-500">
                            {session.date} at {session.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            Instructor: {session.instructor}
                          </p>
                          <p className="text-sm text-gray-500">
                            Domain: {session.domain}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No completed sessions</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sessions; 
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Appointments: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Please log in to view your appointments</h2>
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

  const completedAppointments = user.appointments?.filter(apt => apt.status === 'COMPLETED') || [];
  const upcomingAppointments = user.appointments?.filter(apt => apt.status === 'PENDING') || [];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">My Appointments</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">View and manage your appointments</p>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-md font-medium text-gray-900 mb-4">Upcoming Appointments</h4>
              {upcomingAppointments.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {upcomingAppointments.map((apt) => (
                    <li key={apt.id} className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{apt.purpose}</p>
                          <p className="text-sm text-gray-500">
                            {apt.date} at {apt.time}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No upcoming appointments</p>
              )}
            </div>
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
              <h4 className="text-md font-medium text-gray-900 mb-4">Completed Appointments</h4>
              {completedAppointments.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {completedAppointments.map((apt) => (
                    <li key={apt.id} className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{apt.purpose}</p>
                          <p className="text-sm text-gray-500">
                            {apt.date} at {apt.time}
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
                <p className="text-sm text-gray-500">No completed appointments</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments; 
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Dashboard() {
  const [showCelebration, setShowCelebration] = useState(false);

  const stats = [
    { id: 1, label: 'Active Courses', value: '3', icon: 'book', color: 'blue' },
    { id: 2, label: 'Skills Mastered', value: '8', icon: 'award', color: 'purple' },
    { id: 3, label: 'Interview Score', value: '85%', icon: 'target', color: 'green' },
    { id: 4, label: 'Job Matches', value: '24', icon: 'briefcase', color: 'amber' },
  ];

  const recommendedActions = [
    {
      id: 1,
      title: 'Complete Advanced React Course',
      description: "You're 65% done - finish to unlock certification",
      progress: 65,
      buttonText: 'Continue',
      color: 'from-blue-600 to-purple-700',
    },
    {
      id: 2,
      title: 'Update Your Portfolio',
      description: 'Add 2 more projects to increase profile visibility',
      progress: 40,
      buttonText: 'Add Projects',
      color: 'from-blue-600 to-purple-700',
    },
    {
      id: 3,
      title: 'Practice Mock Interviews',
      description: 'Improve your confidence score by 10%',
      progress: 75,
      buttonText: 'Start Practice',
      color: 'from-blue-600 to-purple-700',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: 'Completed: React Hooks Deep Dive',
      time: '2 hours ago',
      icon: 'book',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Earned: TypeScript Expert Badge',
      time: '1 day ago',
      icon: 'award',
      color: 'amber',
    },
    {
      id: 3,
      title: 'Applied to: Senior Frontend Developer',
      time: '2 days ago',
      icon: 'briefcase',
      color: 'green',
    },
    {
      id: 4,
      title: 'Completed AI Interview Practice',
      time: '3 days ago',
      icon: 'target',
      color: 'purple',
    },
  ];

  const upcomingSessions = [
    { id: 1, title: 'AI Interview Practice', time: 'Tomorrow, 3:00 PM' },
    { id: 2, title: 'System Design Workshop', time: 'Oct 5, 2:00 PM' },
  ];

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  const iconComponents = {
    book: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    award: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    target: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    briefcase: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  const colorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    amber: 'bg-amber-500',
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, Alex!</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Ready to continue your learning journey?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 ${colorClasses[stat.color]} rounded-xl flex items-center justify-center text-white mb-3`}>
              {iconComponents[stat.icon]}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recommended Actions</h2>
            </div>
            <div className="space-y-4">
              {recommendedActions.map((action) => (
                <div key={action.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{action.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{action.description}</p>
                    </div>
                    <button className={`px-4 py-2 bg-gradient-to-r ${action.color} text-white rounded-lg font-medium hover:shadow-lg transition-shadow`}>
                      {action.buttonText}
                    </button>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${action.color} transition-all duration-500`}
                        style={{ width: `${action.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className={`w-10 h-10 ${colorClasses[activity.color]} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    {iconComponents[activity.icon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              <div className="text-right">
                <div className="text-4xl font-bold">12</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Day Streak!</h3>
            <p className="text-green-100 mb-4">You're on fire! Keep learning every day to maintain your streak.</p>
            <p className="text-sm text-green-100">Next milestone: 30 days</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Upcoming Sessions</h3>
            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="font-medium text-gray-900 dark:text-white">{session.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{session.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Learning Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Weekly Goal</span>
                  <span className="font-semibold text-gray-900 dark:text-white">18/20h</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500" style={{ width: '90%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Monthly XP</span>
                  <span className="font-semibold text-gray-900 dark:text-white">8,420/10,000</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500" style={{ width: '84%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 className="text-2xl font-bold mb-2">Career Readiness</h3>
            <div className="text-5xl font-bold mb-3">86%</div>
            <p className="text-blue-100">You're almost job-ready! Complete 2 more courses to reach 90%.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

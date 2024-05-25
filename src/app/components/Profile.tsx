import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchUserProfile } from '@/lib/api';
import { UserProfile } from '@/types/user';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profileData = await fetchUserProfile();
        setProfile(profileData);
      } catch(error){
        console.error('Failed to fech user profile', error);
        if (error.response.statsu === 401) {
          router.push('/login');
        }
      }finally{
        setLoading(false);
      }
    };
    getUserProfile();
  },[router]);

  if(loading){
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (!profile) {
    return <p className="text-center mt-4">Failed to load profile</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">User Information</h2>
        <p className="text-gray-600 mb-2"><strong>Username:</strong> {profile.user.username}</p>
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {profile.user.email}</p>
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">Liked Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.liked_articles.map(article => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-2">Tags: {article.tag_list}</p>
            <p className="text-gray-600 mb-2">Likes: {article.likes_count}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
import React from 'react';
import Section from './section';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: '準備中',
      content: '現在開業に向けて鋭意準備中',
    },

  ];

  return (
    <Section
      title="お知らせ"
      subTitle="最新情報をチェックしてください"
      className="bg-pink-200 p-4 sm:p-8 rounded-3xl my-8 mx-4"
    >
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-lg text-pink-600">{announcement.title}</h3>
            <p className="text-gray-600">{announcement.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Announcements;
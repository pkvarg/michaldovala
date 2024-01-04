import React from 'react';

const FollowUs = () => {
  return (
    <a
      className="mt-4 flex flex-row items-center justify-center gap-2 text-[#0476b7]"
      href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=michaldovala"
      target="_blank"
    >
      <img className="ml-4 w-[35px]" src="linkedin.webp" alt="linkedin" />
      <p>Sledujte ma</p>
    </a>
  );
};

export default FollowUs;

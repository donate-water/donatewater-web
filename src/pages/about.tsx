import Image from 'next/image';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Donate Water Surveys"
        description="Review Surveys from Donate water project"
      />
    }
  >
    <div className="h-auto bg-gray-900">
      <div className="relative isolate h-screen overflow-hidden  ">
        <Image
          width="2592"
          height="1728"
          src="/1.jpg"
          loading="lazy"
          alt=""
          className="absolute inset-0 -z-10 h-screen w-full object-cover"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          <div className="bg-black/20 p-4 pb-8 text-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              About Donate Water Reviewer
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Reviewers can login to this application to see the surveys
              submitted by the mobile application. The reviewer can see the
              images uploaded and verify the survey and accept. The reviwer can
              either accept, reject or skip the survey and submit the results.
              Also the reviwer can assign the score which can be alloted for
              each survey submission. The rules and score sturcture will be
              provided in detail later.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default About;

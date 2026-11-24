import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-blue-100 via-blue-50 to-white px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#00267C]">
            Get to Know Us
          </span>

          <h1 className="text-3xl font-bold text-[#00267C] sm:text-4xl lg:text-5xl">
            About VYREX
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            A learning marketplace where knowledge creates opportunities and
            skills open new possibilities.
          </p>
        </div>

        {/* Main Content */}
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8 md:p-10">
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#00267C] sm:text-2xl">
                Who We Are
              </h2>

              <p className="leading-8 text-gray-600">
                VYREX is an online learning marketplace built to connect people
                who want to learn with people who have knowledge and skills to
                share.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We believe everyone should have the opportunity to learn
                something valuable, develop their abilities, and turn their
                knowledge into opportunities. That's why we're building a
                platform where learners can discover courses across different
                fields while instructors can share their expertise and earn from
                what they know.
              </p>
            </div>

            {/* For Learners */}
            <div className="rounded-xl bg-blue-50 p-5 sm:p-7">
              <h2 className="mb-3 text-xl font-semibold text-[#00267C] sm:text-2xl">
                For Learners
              </h2>

              <p className="leading-8 text-gray-600">
                Learning shouldn't be limited by location, access, or the
                difficulty of finding the right resources. VYREX aims to make
                discovering and learning practical skills easier by bringing
                courses from different instructors and fields into one place.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Whether you're looking to develop a new skill, improve your
                knowledge, or explore a new career path, VYREX gives you the
                opportunity to learn at your own pace.
              </p>
            </div>

            {/* For Instructors */}
            <div className="rounded-xl bg-blue-50 p-5 sm:p-7">
              <h2 className="mb-3 text-xl font-semibold text-[#00267C] sm:text-2xl">
                For Instructors
              </h2>

              <p className="leading-8 text-gray-600">
                We believe knowledge has value, and people who have something
                valuable to teach should have the opportunity to earn from it.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                VYREX provides instructors with a platform to showcase their
                courses, reach potential learners, share their expertise, and
                turn their knowledge into income.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#00267C] sm:text-2xl">
                Learning and Earning, Together
              </h2>

              <p className="leading-8 text-gray-600">
                VYREX is built around two connected opportunities: making
                quality learning more accessible to students while helping
                instructors reach people who are willing to learn from them.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                By bringing both sides together, we aim to create an environment
                where learners gain valuable knowledge and instructors have more
                opportunities to grow through what they teach.
              </p>
            </div>

            {/* Our Goal */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#00267C] sm:text-2xl">
                Our Vision
              </h2>

              <p className="leading-8 text-gray-600">
                Our vision is to build a learning marketplace where anyone can
                discover a course worth learning and anyone with valuable
                knowledge can have the opportunity to teach and earn.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                From creative skills like mobile video editing to technology,
                business, and other fields, we want VYREX to become a place
                where knowledge is shared, skills are developed, and
                opportunities are created.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-10 rounded-xl bg-[#00267C] p-6 text-center text-white sm:p-8">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Learn. Teach. Grow.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              Whether you come to gain knowledge or share what you know, there's
              a place for you at VYREX.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} VYREX. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default page;

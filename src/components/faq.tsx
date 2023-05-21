import React from 'react'

export const FAQ = () => {
  return (
    <section className="min-w-screen animation-fade animation-delay tails-selected-element relative bg-white py-16" id="faq">
        <div className="container mx-auto px-0 px-8 sm:px-12 xl:px-5">
          <h3 className="mt-1 text-left text-2xl font-bold text-gray-800 sm:mx-0 sm:mx-6 sm:text-center sm:text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h3>
          <div
            className="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <h3
              className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl"
              data-primary="purple-500"
            >
              How does it work?
            </h3>
            <p className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
              Our platform works with your content to provides insights and
              metrics on how you can grow your business and scale your
              infastructure.
            </p>
          </div>
          <div
            className="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <h3
              className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl"
              data-primary="purple-500"
            >
              Do you offer team pricing?
            </h3>
            <p className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
              Yes, we do! Team pricing is available for any plan. You can take
              advantage of 30% off for signing up for team pricing of 10 users
              or more.
            </p>
          </div>
          <div
            className="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <h3
              className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl"
              data-primary="purple-500"
            >
              How do I make changes and configure my site?
            </h3>
            <p className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
              You can easily change your site settings inside of your site
              dashboard by clicking the top right menu and clicking the settings
              button.
            </p>
          </div>
          <div
            className="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <h3
              className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl"
              data-primary="purple-500"
            >
              How do I add a custom domain?
            </h3>
            <p className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
              You can easily change your site settings inside of your site
              dashboard by clicking the top right menu and clicking the settings
              button.
            </p>
          </div>
        </div>
      </section>
  );
};

import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-blue-100 via-blue-50 to-white px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#00267C]">
            VYREX Policies
          </span>

          <h1 className="text-3xl font-bold text-[#00267C] sm:text-4xl lg:text-5xl">
            Refund Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last Updated: November 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8 md:p-10">
          <p className="mb-8 leading-7 text-gray-600">
            VYREX provides digital educational products, including online
            video editing courses and related learning materials.
            Because our products are delivered digitally, the following
            refund policy applies to all course purchases.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                1. No Refunds After Course Access
              </h2>

              <p className="leading-7 text-gray-600">
                Once payment has been successfully completed and access
                to the purchased course has been granted, the purchase
                is non-refundable.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                This applies whether or not the purchaser has watched
                all of the available lessons after receiving access.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                By purchasing a VYREX course, you acknowledge and agree
                to this policy.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                2. Payment or Access Issues
              </h2>

              <p className="leading-7 text-gray-600">
                If you have completed a payment but have not received
                access to the course due to a technical issue, please
                contact VYREX support.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                We will investigate the payment and account status and,
                where appropriate, provide access to the purchased
                course or resolve the issue.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                3. Duplicate Payments
              </h2>

              <p className="leading-7 text-gray-600">
                If you believe you have been charged more than once
                for the same purchase, please contact us with the
                relevant payment information.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                We will review the transaction and take appropriate
                action if a duplicate payment is confirmed.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                4. Unauthorized Transactions
              </h2>

              <p className="leading-7 text-gray-600">
                If you believe a payment was made through your payment
                method without your authorization, please contact
                VYREX as soon as possible.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                We may request information necessary to investigate
                the transaction.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                5. Contact Us
              </h2>

              <p className="leading-7 text-gray-600">
                If you experience a payment or course-access problem,
                please contact us through the contact information
                provided on the VYREX website.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                We recommend contacting us as soon as possible so
                that payment and access issues can be investigated
                promptly.
              </p>
            </div>
          </div>

          {/* Closing Notice */}
          <div className="mt-10 rounded-xl bg-blue-50 p-5">
            <p className="text-sm leading-7 text-[#00267C]">
              By purchasing a VYREX course, you acknowledge that you
              have read and agreed to this Refund Policy.
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

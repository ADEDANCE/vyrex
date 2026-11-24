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
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last Updated: November 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8 md:p-10">
          <p className="mb-8 leading-7 text-gray-600">
            VYREX respects your privacy and is committed to handling your
            personal information responsibly. This Privacy Policy explains the
            information we may collect when you use VYREX, how we use it, and
            the choices available to you.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                1. Information We Collect
              </h2>

              <p className="mb-3 leading-7 text-gray-600">
                When you create an account, purchase a course, or use VYREX, we
                may collect information such as:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>Your name</li>
                <li>Email address</li>
                <li>Account information</li>
                <li>Course purchases and access information</li>
                <li>Course progress and completion information</li>
                <li>Payment transaction information</li>
                <li>Information you provide when contacting us for support</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                2. Payment Information
              </h2>

              <p className="leading-7 text-gray-600">
                Payments for VYREX courses are processed through third-party
                payment providers.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                VYREX does not directly store your complete debit or credit card
                details. Payment providers may collect and process payment
                information according to their own privacy and security
                practices.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                3. How We Use Your Information
              </h2>

              <p className="mb-3 leading-7 text-gray-600">
                We may use your information to:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>Create and manage your VYREX account.</li>
                <li>Provide access to courses you purchase.</li>
                <li>Process and verify transactions.</li>
                <li>Track course progress and completion.</li>
                <li>Provide certificates where applicable.</li>
                <li>Respond to support requests.</li>
                <li>Maintain and improve the VYREX platform.</li>
                <li>
                  Protect the platform against fraud, abuse, and unauthorized
                  access.
                </li>
                <li>
                  Communicate important information about your account or
                  purchases.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                4. Sharing of Information
              </h2>

              <p className="leading-7 text-gray-600">
                VYREX does not sell your personal information.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                We may share necessary information with trusted service
                providers that help us operate the platform, such as payment
                processing, hosting, database, authentication, email, and other
                technical service providers.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                We may also disclose information when required by law or when
                reasonably necessary to protect VYREX, our users, or others.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                5. Cookies and Similar Technologies
              </h2>

              <p className="leading-7 text-gray-600">
                VYREX may use cookies or similar technologies to maintain login
                sessions, provide platform functionality, understand website
                usage, and improve the user experience.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                Your browser may allow you to control or disable certain
                cookies.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                6. Data Security
              </h2>

              <p className="leading-7 text-gray-600">
                We take reasonable measures to protect personal information from
                unauthorized access, loss, misuse, or disclosure.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                However, no internet-based service can guarantee absolute
                security.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                7. Data Retention
              </h2>

              <p className="leading-7 text-gray-600">
                We may retain personal information for as long as reasonably
                necessary to provide our services, maintain transaction and
                account records, resolve disputes, comply with legal
                obligations, and protect the platform.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                8. Your Choices and Rights
              </h2>

              <p className="leading-7 text-gray-600">
                You may contact VYREX to request information about your personal
                data or to request correction or deletion where applicable.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                Certain information may need to be retained when required for
                legal, security, fraud-prevention, or transaction-record
                purposes.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                9. Third-Party Services
              </h2>

              <p className="leading-7 text-gray-600">
                VYREX may use third-party services to operate parts of the
                platform, including payment processing and website
                infrastructure.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                These third parties may process information according to their
                respective privacy policies.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                10. Changes to This Privacy Policy
              </h2>

              <p className="leading-7 text-gray-600">
                We may update this Privacy Policy when our services or practices
                change.
              </p>

              <p className="mt-3 leading-7 text-gray-600">
                The latest version will be made available on the VYREX website
                with an updated revision date.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#00267C] sm:text-xl">
                11. Contact Us
              </h2>

              <p className="leading-7 text-gray-600">
                If you have questions or concerns about this Privacy Policy or
                how your information is handled, please contact us using the
                contact information provided on the VYREX website.
              </p>
            </div>
          </div>

          {/* Closing Notice */}
          <div className="mt-10 rounded-xl bg-blue-50 p-5">
            <p className="text-sm leading-7 text-[#00267C]">
              By using VYREX, you acknowledge that you have read this Privacy
              Policy.
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

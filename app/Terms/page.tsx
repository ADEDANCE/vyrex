const page = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-blue-100 via-blue-50 to-white px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Legal
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            VYREX Terms of Use
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Last Updated: October 2026
          </p>
        </div>

        {/* Terms */}
        <div
          className="
            rounded-2xl border border-gray-200 
            px-6 py-8 shadow-sm sm:px-10 sm:py-10

            [&>h3]:mt-10
            [&>h3]:mb-3
            [&>h3]:text-xl
            [&>h3]:font-semibold
            [&>h3]:text-gray-900

            [&>h4]:mt-4
            [&>h4]:mb-2
            [&>h4]:font-medium
            [&>h4]:text-gray-800

            [&>p]:mb-4
            [&>p]:leading-7
            [&>p]:text-gray-600

            [&>ul]:mb-6
            [&>ul]:ml-6
            [&>ul]:list-disc
            [&>ul]:space-y-2
            [&>ul]:text-gray-600

            [&_li]:pl-1
            [&_li]:leading-7
          "
        >
          <p>
            Welcome to VYREX. By creating an account, purchasing a course, or
            using the VYREX platform, you agree to these Terms of Use.
          </p>

          <h3>1. About VYREX</h3>

          <p>
            VYREX is an online learning platform that provides digital
            educational content, including video editing courses, tutorials,
            learning resources, and related materials. Our courses are delivered
            digitally and are accessed through the VYREX platform.
          </p>

          <h3>2. Account Registration</h3>

          <p>
            To access certain VYREX features and courses, you may need to create
            an account.
          </p>

          <p>You agree to:</p>

          <ul>
            <li>Provide accurate information when creating your account.</li>
            <li>Keep your login credentials secure.</li>
            <li>Not share your account with another person.</li>
            <li>
              Notify us if you believe your account has been accessed without
              your permission.
            </li>
          </ul>

          <p>
            You are responsible for activity that occurs through your account.
          </p>

          <h3>3. Course Purchases and Access</h3>

          <h4>VYREX courses are digital products.</h4>

          <p>
            After a successful payment, access to the purchased course or level
            will be provided through your VYREX account, subject to the
            applicable course access conditions. Course access is intended for
            the individual who purchased the course. You may not share, resell,
            redistribute, or transfer your course access to another person.
            VYREX may restrict or terminate access if an account is found to be
            involved in unauthorized sharing, redistribution, copying, or other
            misuse of course materials.
          </p>

         <h3 className=" font-semibold">4. Course Content</h3>
        <p>
          VYREX course materials may include video lessons, downloadable
          resources, projects, and other educational materials. All course
          content is provided for educational purposes. VYREX does not guarantee
          that completing a course will result in employment, clients, income,
          or any specific professional outcome.
        </p>
        <h3 className=" font-semibold">5. Intellectual Property</h3>
        <p>
          All VYREX course materials, including videos, graphics, written
          materials, downloadable resources, branding, and other original
          content, are owned by or licensed to VYREX. You may use the materials
          for your personal learning.
        </p>
        <p>You may not:</p>
        <ul>
          <li>
            Copy or reproduce course materials for commercial distribution.
          </li>
          <li>Upload VYREX lessons or resources to other platforms.</li>
          <li>Resell or redistribute course materials.</li>
          <li>Share paid course content publicly.</li>
          <li>Claim VYREX's original materials as your own.</li>
        </ul>
        <h3 className=" font-semibold">6. Payments</h3>
        <p>
          All course prices displayed on the VYREX website are stated in
          Nigerian Naira (₦), unless otherwise indicated. Payments are processed
          through our designated payment provider. A successful payment does not
          grant ownership of VYREX's course materials. It grants the purchaser
          access to the applicable digital course according to these Terms.
        </p>
        <h3 className=" font-semibold">7. Refunds</h3>
        <p>
          Because VYREX courses are digital products, refund eligibility may
          depend on whether course access or content has already been provided.
          Please review the VYREX Refund Policy before making a purchase.
        </p>
        <h3 className=" font-semibold">8. Prohibited Use</h3>
        <p>You agree not to use VYREX to:</p>
        <ul>
          <li>
            Attempt to gain unauthorized access to another user's account.
          </li>
          <li>Circumvent payment or course-access restrictions.</li>
          <li>Copy, distribute, or resell paid course content.</li>
          <li>Interfere with the operation or security of the platform.</li>
          <li>Use the platform for unlawful activities.</li>
        </ul>
        <h3 className=" font-semibold">9. Platform Availability</h3>
        <p>
          We aim to keep VYREX available and functioning properly, but we cannot
          guarantee uninterrupted access at all times. Temporary interruptions
          may occur because of maintenance, technical issues, internet
          connectivity, third-party services, or circumstances outside our
          control.
        </p>
        <h3 className=" font-semibold">10. Changes to These Terms</h3>
        <p>
          VYREX may update these Terms of Use from time to time. When
          significant changes are made, the updated version will be made
          available on the website. Continued use of VYREX after the changes
          take effect means you accept the updated Terms.
        </p>
        <h3 className=" font-semibold">11. Contact</h3>
        <p>
          If you have questions about these Terms or your VYREX account, please
          contact us through the contact information provided on the VYREX
          website. By using VYREX or purchasing a VYREX course, you acknowledge
          that you have read and agree to these Terms of Use.
        </p>
      
        </div>
      </div>
    </section>
  );
};

export default page;
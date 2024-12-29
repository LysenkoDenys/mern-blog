import CallToAction from '../components/CallToAction';

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font font-semibold text-center my-7 ">
            Terms and Conditions
          </h1>
          <div className="text-md  flex flex-col gap-2">
            <p className="text-left">
              <strong>Denys Lysenko Blog</strong>
            </p>
            <p className="text-left">Last Updated: 2024</p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Introduction
            </h2>
            <p className="text-left">
              By accessing or using the <strong>Denys Lysenko Blog</strong> (the
              &quot;Site&quot;), you agree to comply with and be bound by the
              following Terms and Conditions. If you do not agree with these
              terms, please do not use our Site.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Use of the Site
            </h2>
            <p className="text-left">
              You may use the Site for lawful purposes only. You agree not to
              use the Site in any way that could damage, disable, or impair the
              Site, or interfere with any other party’s use of the Site.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Intellectual Property
            </h2>
            <p className="text-left">
              All content on the Site, including text, images, and graphics, is
              owned or licensed by <strong>Denys Lysenko Blog</strong> and is
              protected by copyright laws. You may not reproduce, distribute, or
              otherwise use any content from the Site without prior written
              permission.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              User Content
            </h2>
            <p className="text-left">
              By submitting any content (e.g., comments, articles, or images) to
              the Site, you grant us a worldwide, royalty-free license to use,
              display, and modify such content for any purpose related to the
              Site.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Limitation of Liability
            </h2>
            <p className="text-left">
              In no event will <strong>Denys Lysenko Blog</strong> be liable for
              any damages arising from the use of the Site, including but not
              limited to direct, indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Third-Party Links
            </h2>
            <p className="text-left">
              The Site may contain links to third-party websites. We are not
              responsible for the content or practices of these websites.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Governing Law
            </h2>
            <p className="text-left">
              These Terms and Conditions are governed by the laws of [Your
              Country], and any disputes will be resolved in the courts of [Your
              Country].
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Changes to Terms and Conditions
            </h2>
            <p className="text-left">
              We may update these Terms and Conditions periodically to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. Please check this page regularly for updates.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Contact Us
            </h2>
            <p className="text-left">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="text-left">
              Denys Lysenko: Email:{' '}
              <a href="mailto:lysenkoden@gmail.com">lysenkoden@gmail.com</a>
            </p>
          </div>
        </div>
        <CallToAction />
      </div>
    </div>
  );
};

export default TermsConditions;

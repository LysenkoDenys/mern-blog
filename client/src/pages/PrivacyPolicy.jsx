import CallToAction from '../components/CallToAction';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font font-semibold text-center my-7 ">
            Privacy Policy
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
              Your privacy is important to us. This Privacy Policy explains how
              the <strong>Denys Lysenko Blog</strong> collects, uses, and
              protects your personal information when you visit or interact with
              our site.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Information We Collect
            </h2>
            <p className="text-left">
              We may collect the following information:
            </p>
            <ul className="text-left">
              <li>Name (if provided voluntarily)</li>
              <li>
                Email address (e.g., for subscribing to newsletters or posting
                comments)
              </li>
              <li>IP address</li>
              <li>
                Cookies and usage data (e.g., for analytics or advertisements)
              </li>
            </ul>

            <h2 className="text-lg font font-semibold text-center my-1">
              How We Use Your Information
            </h2>
            <p className="text-left">
              We collect and use your information for the following purposes:
            </p>
            <ul className="text-left">
              <li>To send newsletters, updates, or respond to inquiries</li>
              <li>To analyze website traffic and improve content</li>
              <li>To display relevant ads and personalized content</li>
            </ul>

            <h2 className="text-lg font font-semibold text-center my-1">
              Third-Party Services
            </h2>
            <p className="text-left">
              To enhance your experience, we use third-party tools and services
              that may collect and process your data. These include:
            </p>
            <ul className="text-left">
              <li>
                <strong>Google Analytics:</strong> For tracking website traffic
                and understanding user behavior
              </li>
              <li>
                <strong>Google AdSense:</strong> For displaying personalized
                advertisements
              </li>
            </ul>
            <p className="text-left">
              These third-party services have their own privacy policies, which
              we recommend reviewing.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-left">We use cookies to:</p>
            <ul className="text-left">
              <li>Improve user experience</li>
              <li>Deliver relevant content and advertisements</li>
              <li>Analyze site performance</li>
            </ul>
            <p className="text-left">
              You can manage or disable cookies in your browser settings.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Your Data Rights
            </h2>
            <p className="text-left">
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="text-left">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate
                information.
              </li>
              <li>
                <strong>Deletion:</strong> Request that we delete your personal
                data.
              </li>
            </ul>
            <p className="text-left">
              If you wish to exercise these rights, contact us at{' '}
              <a href="mailto:lysenkoden@gmail.com">lysenkoden@gmail.com</a>.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Data Security
            </h2>
            <p className="text-left">
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no data
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Changes to This Privacy Policy
            </h2>
            <p className="text-left">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for other operational, legal, or regulatory
              reasons. Please check this page regularly for updates.
            </p>

            <h2 className="text-lg font font-semibold text-center my-1">
              Contact Us
            </h2>
            <p className="text-left">
              If you have any questions about this Privacy Policy or your
              personal data, please contact us at:
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

export default PrivacyPolicy;

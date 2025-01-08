import AuthSystem from "@/components/AuthSystem";
import Navbar from "@/components/Navbar";

export default function Privacy() {
  return (
    <div className="w-full flex flex-col">
      <Navbar>
        <AuthSystem className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" />
      </Navbar>
      <div className="bg-red-300 px-4 py-3 text-white w-full">
        <p className="text-center text-sm font-medium">
          Welcome to younifind, endorsed by the Peel
          District School Board.
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-3/5 flex mx-auto flex-col mt-8 gap-4 items-center">
          <h1 className="text-center my-2 font-bold text-2xl">
            Privacy Policy
          </h1>
          <p className="text-lg font-medium text-left">
            Thank you for using younifind, a search engine dedicated to helping
            youth find job opportunities. This Privacy Policy is designed to
            help you understand how we collect, use, and safeguard your
            information when you use our services.
            <br />
            <br />
            <span className="font-bold">1. Information We Collect:</span>
            <br /> a. Google Account Information: To provide a personalized
            experience, younifind collects your Google account name and profile
            picture. b. Cookies: To give you a more personal and convenient
            website experience. c. No Additional Information: We do not collect,
            store, or process any other personal information. We respect your
            privacy and aim to provide a minimalistic and secure experience.
            <br />
            <span className="font-bold"> 2. How We Use Your Information:</span>
            <br />
            a. Personalization: We use your Google account name and profile
            picture to personalize your younifind experience. b. Service
            Improvement: Aggregated and anonymized data may be used to analyze
            usage patterns and enhance our services. <br />
            <span className="font-bold"> 3. Information Sharing:</span>
            <br />
            a. No Third-Party Sharing: We do not share your personal information
            with third parties.
            <br />
            <span className="font-bold"> 4. Security Measures:</span>
            <br /> a. Data Security: We employ industry-standard security
            measures to protect your information from unauthorized access,
            disclosure, alteration, and destruction. b. Data Access: Access to
            your information is restricted to younifind personnel who require it
            for the provision of services. <br />
            <span className="font-bold"> 5. Data Retention:</span>
            <br />
            a. Limited Retention: We retain your Google account name and profile
            picture only for as long as necessary to provide you with our
            services.
            <br />
            <span className="font-bold"> 6. Updates to Privacy Policy:</span>
            <br /> a. Policy Changes: We may update this Privacy Policy to
            reflect changes in our practices. You are encouraged to review this
            page periodically. <br />
            <span className="font-bold"> 7. Your Choices:</span>
            <br />
            a. Profile Information: You can update or remove your Google account
            name and profile picture by adjusting your settings. <br />
            <span className="font-bold"> 8. Contact Information:</span>
            <br />
            If you have any questions, concerns, or requests regarding your
            privacy or this Privacy Policy, please contact us at
            [contact@younifind.ca]. <br />
            <span className="font-bold"> 9. Consent:</span>
            <br />
            By using younifind, you consent to the terms outlined in this
            Privacy Policy. Thank you for trusting younifind with your
            opportunity search. We are committed to providing a secure and
            transparent experience for our users.
            <br />
            <br />
            By using younifind, you acknowledge that you have read, understood,
            and agreed to this Privacy Policy. Thank you for using younifind!
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

import AuthSystem from "@/components/AuthSystem";
import Navbar from "@/components/Navbar";

export default function TOS() {
  return (
    <div className="w-full flex flex-col">
      <Navbar>
        <AuthSystem className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" />
      </Navbar>
      <div className="bg-red-300 px-4 py-3 text-white w-full">
        <p className="text-center text-sm font-medium">
          Welcome to younifind's Pilot Program, in partnership with the Peel
          District School Board.
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-3/5 flex mx-auto flex-col mt-8 gap-4 items-center">
          <h1 className="text-center my-2 font-bold text-2xl">
            Terms of Service
          </h1>
          <p className="text-lg font-medium text-left">
            Effective Date: [2024-02-03]
            <br></br> <br></br> <br></br>Welcome to younifind, a search engine
            dedicated to providing job opportunities for youth. By accessing or
            using our services, you agree to comply with and be bound by the
            following Terms of Service. Please read these terms carefully before
            using younifind.
            <br />
            <br></br>
            <span className="font-bold">1. Acceptance of Terms</span>
            <br /> By accessing or using younifind, you agree to be bound by
            these Terms of Service. If you do not agree with any part of these
            terms, you may not use our services.
            <br />
            <span className="font-bold"> 2. User Information</span>
            <br />
            a. Collection: younifind collects only the user&apos;s Google
            account name and profile picture. No additional information is
            collected. b. Storage: We do not store any user information beyond
            the Google account name and profile picture. If provided, we may
            store the job listing contact email in our database and make it
            publicly available for users to use to get more information. <br />
            <span className="font-bold"> 3. Use of Services</span>
            <br />
            a. Eligibility: You must be at least 13 years old to use younifind.
            By using our services, you affirm that you are at least 13 years old
            and meet any other eligibility requirements. b. Prohibited Conduct:
            Users are prohibited from engaging in any conduct that may interfere
            with the proper functioning of younifind or compromise its security.
            <br />
            <span className="font-bold"> 4. Intellectual Property</span>
            <br /> a. Content: All content provided through younifind, including
            but not limited to text, graphics, logos, images, and software, is
            the property of younifind and protected by intellectual property
            laws. <br />
            <span className="font-bold"> 5. Third-Party Links</span>
            <br />
            younifind may include links to third-party websites or services. We
            are not responsible for the content or privacy practices of these
            third-party sites. Your use of third-party websites is at your own
            risk.
            <br />
            <span className="font-bold"> 6. Limitation of Liability</span>
            <br /> younifind and its affiliates shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            or any loss of profits or revenues, whether incurred directly or
            indirectly.
            <br />
            <span className="font-bold"> 7. Termination</span>
            <br />
            younifind reserves the right to terminate or suspend your access to
            the services at any time, without notice, for any reason, including
            a breach of these Terms of Service.
            <br />
            <span className="font-bold"> 8. Changes to Terms</span>
            <br />
            younifind reserves the right to modify or update these Terms of
            Service at any time. Your continued use of our services after
            changes are made constitutes your acceptance of the revised terms.
            <br />
            <span className="font-bold"> 9. Contact Information:</span>
            <br />
            For any questions or concerns regarding these Terms of Service,
            please contact us at [contact@younifind.ca]. <br />
            <br />
            <br />
            By using younifind, you acknowledge that you have read, understood,
            and agreed to these Terms of Service. Thank you for using younifind!
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

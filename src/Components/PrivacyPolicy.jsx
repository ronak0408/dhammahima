import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to top when this component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-12 lg:px-32 py-20 bg-white text-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-700">
          PRIVACY POLICY
        </h1>

        {/* Scope Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-black">Scope</h2>
          <p className="mb-4">
            In this privacy policy ‘we’, ‘us’, and ‘our’ refers to the Ministry of Tourism, Government of India. Please read
            the Privacy Policy carefully as they apply to your use of (a) the internet site www.incredibleindia.gov.in or
            any other Ministry of Tourism, Government of India owned and operated internet site, including but not limited
            to tourism.gov.in (the Site(s)) and any microsites contained therein; and/or (b) our mobile application (our
            “Mobile App”, collectively with our Website our “Platform(s)”), whether as a guest or a registered user. Use of
            our Platform(s) includes accessing, browsing or registering to use our Platform(s). Your continued use of this
            Platform provides your unconditional consent to us collecting, storing, using, and disclosing your personal
            information in the manner set out below.
          </p>
          <p className="mb-4">
            This privacy policy is subject to, and must be read in conjunction with, our Terms of Use. This Policy applies
            to all external parties, namely, visitors to Ministry of Tourism, Government of India websites and social media
            pages, subscribers to Ministry of Tourism, Government of India briefings and marketing materials, and any other
            individual whose personal information may be collected, stored and used by Ministry of Tourism, Government of
            India or its offices.
          </p>
          <p>
            This Policy also applies to Ministry of Tourism, Government of India's management of personal information across
            all of its offices (in India and internationally). We have provided this Privacy Policy to help you, the user,
            understand how we collect, use and protect your information when you visit and use any of Ministry of Tourism,
            Government of India’s websites, mobile applications, microsites, social media platforms, tools, and any other
            technological platforms in whatever form (the “Platform(s)”), and how that information will be treated. Please
            read the following carefully to understand our views and practices regarding your information and how we will
            treat it. If you are not familiar with certain terms, please familiarize yourself with such in the key terms
            section of this policy.
          </p>
        </section>

        {/* Personal Information Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Personal information that Ministry of Tourism, Government of India collects
          </h2>
          <p className="mb-4">
            The types of personal information that Ministry of Tourism, Government of India collects will depend on the
            nature of your dealings with its products and services and may include your name, contact details, photographic
            information, your views and opinions about Ministry of Tourism, Government of India services, travel
            information. In particular:
          </p>

          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              If you are a travel agent who registers on a Ministry of Tourism, Government of India website, your name,
              gender, date of birth, job title, email address and business contact details will be collected.
            </li>
            <li>
              If you are a traveler or tourist who registers to receive e-newsletters from Ministry of Tourism, Government
              of India or registers to create an account on the Ministry of Tourism, Government of India website to
              customize your web experience, your name, address, email address, age group and information about what type of
              holiday you are looking for will be collected. This is so Ministry of Tourism, Government of India can provide
              you with material likely to be of interest to you.
            </li>
            <li>
              If you deal with Ministry of Tourism, Government of India in the course of business, Ministry of Tourism,
              Government of India will generally collect only your business contact details (so Ministry of Tourism,
              Government of India can communicate with you for normal business purposes).
            </li>
            <li>
              Ministry of Tourism, Government of India also collects personal information about its employees and
              contractors (personnel records).
            </li>
            <li>
              If you make a complaint, Ministry of Tourism, Government of India will generally collect your name, address or
              email address and details about the complaint.
            </li>
          </ul>

          <h3 className="font-bold mt-6 mb-2">Information Collected during the website browsing:</h3>
          <p className="mb-4">
            When you browse, read pages, or download information on this website, we automatically gather and store certain
            technical information about your visit. This information never identifies who you are. The information we
            collect and store about your visit is listed below:
          </p>

          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              The Internet domain of your service provider (e.g. mtnl.net.in) and IP address (an IP address is a number that
              is automatically assigned to your computer whenever you are surfing the web) from which you access our website.
            </li>
            <li>
              The type of browser (such as Firefox, Netscape, or Internet Explorer) and operating system (Windows, Linux)
              used to access our site.
            </li>
            <li>The date and time you access/accessed our site.</li>
            <li>The pages/URLs you have visited, and</li>
            <li>
              If you reached this website from another website, the address of that referring website. This information is
              only used to help us make the site more useful for you. With this data, we learn about the number of visitors
              to our site and the types of technology our visitors use. We never track or record information about
              individuals and their visits.
            </li>
          </ul>
        </section>
       
      </div>
       <Footer></Footer>
    </>
  );
}

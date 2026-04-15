import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-12 lg:px-32 py-20 bg-white text-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-700">
          TERMS OF USE
        </h1>

        {/* Section: Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-3">
            In these terms and conditions (the Terms and Conditions), "we", "our" or "us" means Ministry of Tourism,
            Government of India. Please read the Terms and Conditions carefully as they apply to your use of (a) the
            internet site www.incredibleindia.gov.in or any other internet site owned and operated by Ministry of
            Tourism, Government of India, including but not limited to tourism.gov.in (the Site(s)) and any microsites
            contained therein; and/or (b) our mobile application (our "Mobile App", collectively with our Website our
            "Platform(s)"), whether as a guest or a registered user.
          </p>
          <p className="mb-3">
            Use of our Platforms includes accessing, browsing or registering to use our Platforms. By using the
            Platform(s) you agree to be bound by the Terms and Conditions including those revisions referred to in (c,c).
            We may revise the Terms and Conditions from time to time by updating this posting.
          </p>
          <p className="mb-3">
            The revised terms will take effect when they are posted. Your use of some parts or features of the
            Platform(s) may be governed by additional terms and conditions.
          </p>
          <p>
            Where this is the case, you will be notified accordingly, and those additional terms and conditions:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Will apply to your use of such parts or features of the Platform(s) in addition to these terms and
              conditions; and
            </li>
            <li>
              Will prevail over the Terms and Conditions to the extent of any inconsistency.
            </li>
          </ul>
        </section>

        {/* Section: Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer and Terms of Use:</h2>
          <p className="mb-3">
            This website is designed, developed and maintained by Ministry of Tourism, Government of India. Though all
            efforts have been made to ensure the accuracy and currency of the content on this website, the same should not
            be construed as a statement of law or used for any legal purposes.
          </p>
          <p className="mb-3">
            In case of any ambiguity or doubts, users are advised to verify/check with the Ministry and/or other source(s),
            and to obtain appropriate professional advice. Under no circumstances will this Ministry be liable for any
            expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any
            expense, loss or damage whatsoever arising from use of, or loss of use of, data arising out of or in
            connection with the use of this website.
          </p>
          <p className="mb-3">
            These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute
            arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
          </p>
          <p className="mb-3">
            The information posted on this website could include hypertext links or pointers to information created and
            maintained by non-Government/private organisations. Ministry of Tourism is providing these links and pointers
            solely for your information and convenience.
          </p>
          <p className="mb-3">
            Ministry of Tourism cannot authorise the use of copyrighted materials contained in linked websites. Users are
            advised to request such authorisation from the owner of the linked website.
          </p>
          <p>
            Ministry of Tourism does not guarantee that linked websites comply with Indian Government Web Guidelines.
          </p>
        </section>

        {/* Section: Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
          <p className="mb-3">
            You acknowledge that the Content on the Platform(s) is subject to copyright, trade mark and possibly other
            intellectual property rights.
          </p>
          <p className="mb-3">
            In these Terms and Conditions, "Content" means anything that you may see, read, hear, upload, download or
            access on or via the Platform(s) (including but not limited to messages, files, data, software, images,
            artwork, graphics, design, photographs, illustrations, text, music, songs, videos, tags and other materials or
            subject-matter on the Platform(s)).
          </p>
          <p className="mb-3">
            Unless you are expressly authorized by us, or otherwise by law, you must not do any of the following yourself,
            or permit or authorise any other person to: sell, reproduce, publish, distribute, communicate to the public
            (e.g. by making available online or electronically transmitting) modify, display, perform in public, prepare
            derivative works based on or make an adaptation of, repost or otherwise use any of the Content (or any readily
            identifiable portion of the Content) in any way without our prior written consent.
          </p>
          <p className="mb-3">
            Any other proposed use of the material or any authorization is subject to the approval of the Ministry of
            Tourism. Applications for obtaining permission should be made to dg-tourism@nic.in.
          </p>
          <p>
            You agree that Ministry of Tourism, Government of India owns the copyright in all material and marks in the
            marketing logo “Incredible India”, the domain name(s) INCREDIBLEINDIA.GOV.IN, INCREDIBLEINDIA.ORG,
            tourism.gov.in, the advertising tag line(s) appearing in Ministry of Tourism, Government of India
            advertisements on the Platform(s) and the corporate logo “Incredible India” (the Ministry of Tourism Trade
            Marks).
          </p>
        </section>
      </div>

      {/* Optional Footer: Uncomment if needed */}
      <Footer />
    </>
  );
}

import Image from 'next/image';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Donate Water Surveys"
        description="Review Surveys from Donate water project"
      />
    }
  >
    <div className="h-auto bg-gray-900">
      <div className="relative isolate  h-auto ">
        <Image
          width="2592"
          height="1728"
          src="/1.jpg"
          loading="lazy"
          alt=""
          className="absolute inset-0 -z-10 h-screen w-full object-cover"
        />
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 ">
          <div className="bg-black/20 p-4 pb-8 text-white backdrop-blur-sm">
            <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Privacy
            </h2>
            <div>
              <p>
                Thank you for your willingness to contribute to the Tool. This
                document aims to provide you with adequate information on the
                data we receive from you, how we process it, and what we make
                available to the public in order to comply with the requirements
                of the EU General Data Protection Regulation (GDPR).
              </p>
              <dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">Our platform</h2>
                  The app you are using has been developed by the International
                  Institute for Applied Systems Analysis (IIASA), Schlossplatz
                  1, 2361 Laxenburg, Austria.
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    What are personal data?
                  </h2>
                  “Personal data” means any information relating to an
                  identified or identifiable natural person, such as their name,
                  contact information, their location at a certain time or IP
                  address.
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    Data processed by us
                  </h2>
                  We are a scientific institute and process personal data for
                  scientific purposes. We process personal data:
                  <ul>
                    <li>
                      for which you have given us consent for a specific purpose
                      (Art. 6 para 1 lit a GDPR), namely for carrying out this
                      scientific study;
                    </li>
                    <li>
                      that is necessary for the performance of a task carried
                      out in the public interest (Art. 6 para 1 lit e GDPR),
                      namely for carrying out this scientific study; that is
                      necessary for the purpose of the legitimate interests
                      pursued by us or by a third party (Art. 6 para 1 lit f
                      GDPR), e.g., avoiding legal disputes about rights in the
                      contributions. If possible, we seek the explicit consent
                      to the processing of data, in particular the disclosure to
                      third parties (Art. 6 para. 1 lit. a GDPR). Below is a
                      list of types of data the app collects. Please note that a
                      copy of the data might be briefly stored in the
                      server&apos;s memory for a short period. These data are
                      temporarily stored apart from the database, managed and
                      deleted automatically by the server&apos;s operating
                      system and will not be accessed by us for processing,
                      archiving, or any other reason, with the exception of
                      email addresses and additional attributes as outlined for
                      the specific purposes below. It is also possible through
                      logging errors or general requests that submitted data be
                      stored in one of the server&apos;s log files. These files
                      are not publicly accessible and are not used for any
                      processing, storage or data publication other than for
                      resolving a possible software problem. These are technical
                      necessities over which we have no control.
                    </li>
                  </ul>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    Registration/Login/Profile Update
                  </h2>
                  There are three ways to register/login to the app: using a
                  Geo-Wiki, Google or facebook account. In the case of Geo-Wiki,
                  we process the following data for registration, login and
                  profile updates for a given user, all of which are stored on
                  the Geo-Wiki.org platform:
                  <ul>
                    <li>Email address</li>
                    <li>User password (encrypted)</li>
                    <li>User name</li>
                    <li>First name</li>
                    <li>Last name</li>
                    <li>Hometown</li>
                    <li>
                      Additional attributes provided by the user (biological
                      gender, profession, experience).
                    </li>
                  </ul>
                  In the case of Google or Facebook, we store only a User ID and
                  user email address.
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    Use of email addresses (all accounts) and additional
                    attributes (Geo-Wiki account)
                  </h2>
                  <p>
                    Email addresses will be added to our newsletter mailing
                    list. However, you can unsubscribe from the mailing list at
                    any time. Otherwise we will only use the email address to
                    contact you if it is related to your activities in the Tool
                    app.
                  </p>
                  <p>
                    None of this information (email address or additional
                    attributes) will be published, e.g., with the data product.
                    For publications, a technical procedure (hash) will be
                    applied to the user&apos;s id to preserve data regarding
                    which contributions were made by the same person. This hash
                    does not allow for the calculation or retrieval of the
                    original user id.
                  </p>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">Log Data</h2>
                  Whenever you use our service, we collect Log Data to identify
                  errors in the app. Log Data may include information such as
                  your device Internet Protocol (“IP”) address, device name,
                  operating system version, the configuration of the app when
                  utilizing our service, the time and date of your use of the
                  service, and other statistics. These data are used for
                  identifying problems with our software and will not be
                  published as part of the resulting data product.
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">Cookies</h2>
                  <p>
                    We use first party cookies to provide essential site
                    functionality. Cookies are small text files that are saved
                    by your browser and temporarily stored on your device.
                  </p>
                  <p>
                    Provided that you have consented to the use of cookies, our
                    website uses Google Analytics, a web analysis service of
                    Google LLC. (“Google”). Google Analytics uses cookies to
                    help understand how the website is being used. In order to
                    do so, information about your visit, including parts of your
                    IP Address, may be transmitted, stored and processed on a
                    Google server in the USA or another non-EU state.
                  </p>
                  <p>
                    You can also prevent the placement of cookies through the
                    settings of your browser or by downloading and installing
                    the browser plug-in available at the following link:
                    <a href="https://tools.google.com/dlpage/gaoptout?hl=en-GB">
                      {' '}
                      Google Analytics Opt-out Browser Add-on.
                    </a>
                  </p>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    Submitting your contribution
                  </h2>
                  When you submit your contribution, the app accesses and
                  processes the data you collected, and some additional
                  information we use for assessing the quality of your
                  contribution and for reproducing technical problems in case of
                  an error. The following data are sent to the server and
                  stored:
                  <ul>
                    <li>User ID</li>
                    <li>User display name</li>
                    <li>User e-mail address</li>
                    <li>
                      Only for Geo-Wiki accounts:
                      <ul>
                        <li>First name</li>
                        <li>Last name</li>
                        <li>Hometown</li>
                        <li>
                          Additional attributes provided by the user (biological
                          gender, profession, experience).
                        </li>
                      </ul>
                    </li>
                    <li>User language preferences</li>
                    <li>
                      Data sets uploaded to the system as shapefiles or GeoTiffs
                    </li>
                    <li>Legend information created by the user</li>
                    <li>Sample data sets generated by the user</li>
                    <li>
                      Validation sessions generated by the user, including layer
                      selections
                    </li>
                    <li>Validation data sets</li>
                    <li>
                      Geo-tagged photographs (uploaded from the mobile app)
                    </li>
                    <li>Accuracy assessment reports generated by the user.</li>
                  </ul>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    Information on contributions made with the Tool mobile app
                  </h2>
                  The mobile app has a map view. Since this usually shows your
                  current location, it implicitly uses your current location
                  (latitude and longitude). For this purpose, we access the
                  following data:
                  <ul>
                    <li>User ID</li>
                    <li>Location (Latitude, Longitude)</li>
                    <li>
                      Bounding coordinates for the part of the map currently
                      shown in the app
                    </li>
                  </ul>
                  However, we do not permanently store this information except
                  for your user ID and location when submitting a validation.
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">Data storage</h2>
                  <p>
                    The data in Tool are stored and maintained on
                    state-of-the-art web service environments hosted on rented
                    servers at{' '}
                    <a href="https://www.hetzner.com/?country=at">
                      Hetzner Online GmbH
                    </a>
                    , Industriestrasse 25, 91710 Gunzenhausen, Germany. We do
                    not provide any means to access data for the hosting company
                    other than the ways intended for every user. The environment
                    is set up such that we restrict access to the database
                    strictly to our trusted network and through APIs that let us
                    choose exactly which data are accessible to which users.{' '}
                  </p>
                  <p>
                    Regarding the use of cookies, please see above. Information
                    about your visit, including parts of your IP address, may be
                    transmitted, stored and processed on a Google server in the
                    USA or another non-EU state.
                  </p>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    Data contributions
                  </h2>
                  <p>
                    Please be aware that we rely on you to contribute data,
                    which does not infringe on the rights of others. Make sure
                    you follow the instructions and do not submit data that
                    could violate especially personal rights, copyright or other
                    legislation.{' '}
                  </p>
                  <p>
                    By contributing data, you provide us with the information
                    requested in the app/website, but we usually also collect
                    additional data that allows us to trace technical problems
                    and verify the quality of the contribution. Please see the
                    details above.
                  </p>
                  <p>
                    By contributing data, you grant IIASA a license to use these
                    data. Please refer to our{' '}
                    <a href="\\terms">
                      <u>Terms of Use</u>
                    </a>
                    .
                  </p>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">Third parties</h2>
                  Please note that we may employ the following third-party
                  companies to facilitate our service:
                  <ul>
                    <li>Google LLC;</li>
                    <li>Hetzner Online GmbH.</li>
                  </ul>
                  <p>
                    These companies will have access to your data in order to
                    perform the tasks we assign to them, as described above.
                    However, they are obliged to not disclose or use the
                    information for any other purpose.
                  </p>
                  <p>
                    Should you consent to the use of your username in our social
                    media platforms, it will be visible in connection with the
                    photos you submitted on
                  </p>
                  <ul>
                    <li>
                      Facebook (
                      <a href="https://www.facebook.com">www.facebook.com/</a>,
                      operated by Facebook, Inc.,1601 Willow Road, Menlo Park,
                      California 94025; and Facebook Ireland Ltd., 4 Grand Canal
                      Square, Grand Canal Harbour, Dublin 2 Ireland)
                    </li>
                    <li>
                      Twitter (
                      <a href="https://www.twitter.com">www.twitter.com/</a>,
                      operated by Twitter International Company, One Cumberland
                      Place, Fenian Street Dublin 2, D02 AX07 Ireland; and 1355
                      Market Street, Suite 900, San Francisco, CA 94103, United
                      States)
                    </li>
                  </ul>
                  <p>
                    Google LLC, Facebook and Twitter have their seat in the US
                    and comply with “Privacy Shield”. According to a decision by
                    the European Commission this guarantees an adequate level of
                    data protection.
                  </p>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    Rights of the user
                  </h2>
                  At any time, you have the right
                  <ul>
                    <li>
                      to request information as to which of your data we process
                      (Art. 15 GDPR),
                    </li>
                    <li>
                      to request the rectification or erasure of your data (Art.
                      16 and Art. 17 GDPR),
                    </li>
                    <li>
                      to restrict the processing of your data (Art. 18 GDPR),
                    </li>
                    <li>
                      to request the transmission of your data (Art. 20 GDPR);
                    </li>
                    <li>
                      to file a complaint with a supervisory authority, in
                      particular, the Austrian data protection authority
                      (www.dsb.gv.at) or the data protection authority at your
                      place of residence.
                    </li>
                  </ul>
                  <p>
                    You can instruct us to stop processing your data at any time
                    using the contact data below. Even if you have agreed to the
                    processing of data in the past, you can revoke such consent
                    at any time (Art. 21 GDPR).
                  </p>
                  <p>
                    Should you have questions concerning your personal data,
                    please contact us using the contact information below.
                  </p>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    Third party apps and websites
                  </h2>
                  <p>
                    Our app and/or website may contain links to other websites.
                    If you click on a third-party link, you will be directed to
                    that site. Please note that these external sites are not
                    operated by us and we do not have any control, nor assume
                    any responsibility for their content, privacy policies or
                    practices.
                  </p>
                  <p>
                    We therefore strongly advise you to review the Privacy
                    Policy of those websites.
                  </p>
                </dl>
                <dl>
                  <h2 className="pt-4 text-2xl font-bold">
                    <b>Contact us</b>
                  </h2>
                  <p>
                    If you have any questions about our Privacy Policy, do not
                    hesitate to contact us at{' '}
                    <a href="mailto:info@iiasa.ac.at">info@iiasa.ac.at.</a>
                  </p>
                  <p>
                    International Institute for Applied Systems Analysis
                    <br />
                    Schlossplatz 1<br />
                    A-2361 Laxenburg
                    <br />
                    Austria
                    <br />
                    Tel: + 43 2236 807 0<br />
                    Last updated: May 2021
                    <br />
                  </p>
                </dl>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default About;

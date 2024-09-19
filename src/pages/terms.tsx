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
      <div className="relative isolate h-auto  ">
        <Image
          width="2592"
          height="1728"
          src="/1.jpg"
          loading="lazy"
          alt=""
          className="absolute inset-0 -z-10 h-screen w-full object-cover"
        />
        <div className="mx-auto block max-w-6xl  py-32 sm:py-48 lg:py-56 ">
          <div className="  bg-black/20 p-4 pb-8 backdrop-blur-sm">
            <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Terms
            </h2>
            <div className="h-auto w-full text-white">
              <p>
                Thank you for your interest in contributing data and/or other
                content. By using the Tool, you accept the following terms and
                conditions. Please read them carefully before using the app.
              </p>
              <dl>
                <dl>
                  <h3>
                    <b>1. General information </b>
                  </h3>
                  <ul>
                    <dl>
                      a) This Agreement is made between you (“the user”) and the
                      International Institute for Applied Systems Analysis,
                      Schlossplatz 1, 2361 Laxenburg, Austria (“IIASA”), the
                      developer of the Tool software.
                    </dl>
                  </ul>
                </dl>
                <dl>
                  <h3>
                    <b>2. Legal age</b>
                  </h3>
                  <ul>
                    <dl>
                      There is no age restriction for the use of the app (or the
                      download of the mobile app).
                    </dl>
                  </ul>
                </dl>
                <dl>
                  <h3>
                    <b>3. Data manipulation</b>
                  </h3>
                  <ul>
                    <dl>
                      Any form of, or attempt at, data manipulation is strictly
                      prohibited and will result in a permanent ban from the
                      app.
                    </dl>
                  </ul>
                </dl>
                <dl>
                  <h3>
                    <b>4. Rights of third parties</b>
                  </h3>
                  <ul>
                    <dl>
                      Your data contribution must not infringe on any
                      third-party rights. By submitting contributions, the users
                      indicate that they have the right to authorize IIASA to
                      use, process and make available any contributed material
                      under these terms and conditions
                    </dl>
                  </ul>
                </dl>
                <dl>
                  <h3>
                    <b>5. Rights and obligations</b>
                  </h3>
                  <ul>
                    <dl>
                      a) All the rights relating to this app, including its
                      copyrights, trademarks or database rights belong to IIASA.
                      Users are not allowed to copy, modify or otherwise exploit
                      any part of the app, make derivative versions or to
                      extract the app’s source code except for these two cases:
                      <ul>
                        <dl>
                          a. You may print or download to a local hard drive
                          extracts for your personal and non-commercial use
                          only.
                        </dl>
                        <dl>
                          b. You may copy the content to individual third
                          parties for their personal use, but only if you
                          acknowledge the website as the source of the material.
                        </dl>
                      </ul>
                      This does not apply to the mobile app source code, which
                      is open source and available on the github repository
                    </dl>
                    <dl>
                      b) You may not, except with our express written
                      permission, distribute or commercially exploit the
                      content. Nor may you transmit it or store it in any other
                      website or other form of electronic retrieval system.
                    </dl>
                    <dl>
                      c) The information contained in the app is for general
                      information purposes only. The information is provided by
                      the Tool team and while we endeavor to keep the
                      information up to date and correct, we make no
                      representations or warranties of any kind, express or
                      implied, about the completeness, accuracy, reliability,
                      suitability or availability with respect to the website or
                      the information, products, services, or related graphics
                      contained on the website for any purpose. Any reliance you
                      place on such information is therefore strictly at your
                      own risk.
                    </dl>
                    <dl>
                      d) The app requires an active internet connection. IIASA
                      is not responsible for any charges related to the cost of
                      internet usage.
                    </dl>
                    <dl>
                      e) IIASA gives no warranty and accepts no responsibility
                      or liability for the accuracy or the completeness of the
                      information and materials contained in the app.
                    </dl>
                    <dl>
                      f) Under no circumstances will IIASA be held responsible
                      or liable in any way for any claims, damages, losses,
                      expenses, costs or liabilities whatsoever resulting or
                      arising directly or indirectly from the user’s use of or
                      inability to use the app or the user’s reliance on the
                      information and material in the app.
                    </dl>
                    <dl>
                      g) Through this website users can link to other websites
                      that are not under the control of the Tool team. We have
                      no control over the nature, content and availability of
                      these sites. The inclusion of any links does not
                      necessarily imply a recommendation or endorse the views
                      expressed within them.
                    </dl>
                    <dl>
                      h) Every effort is made to keep the website up and running
                      smoothly. However, the Tool team takes no responsibility
                      for, and will not be liable for, the website being
                      temporarily unavailable due to technical issues beyond our
                      control.
                    </dl>
                  </ul>
                </dl>
                <dl>
                  <h3>
                    <b>6. Assignment of rights</b>
                  </h3>
                  <ul>
                    <dl>
                      a) The user grants IIASA a perpetual, worldwide, unlimited
                      in scope, no-charge, royalty-free, irrevocable and
                      non-exclusive license to use, in particular without being
                      limited to, copy, adapt, rent, lend, show, communicate and
                      make available to the public (including without limitation
                      via the internet), distribute and broadcast, in each case
                      in an original or modified form, in any currently known or
                      future way of exploitation, the submitted contributions in
                      whole or in part (including its photographs), with the
                      right to transfer these rights or to grant sublicenses to
                      third parties. The user waives his right to be named as an
                      author of the contribution, including any photographs. The
                      land cover data sets and the reports remain the property
                      of the user. However, if the users choose to share either
                      of these to ‘everyone’ in the Tool app, then the same
                      conditions apply as they do to the contributions.
                    </dl>
                    <dl>
                      b) The user assures that he is legally entitled to grant
                      the above license. If any third party holds any rights on
                      the contribution (including the photographs), the user
                      assures that he has received permission to grant the above
                      license on behalf of that third party, or that the third
                      party has waived such rights in regard to the
                      contributions, especially the photographs.
                    </dl>
                  </ul>
                </dl>
                <dl>
                  <h3>
                    <b>7. Miscellaneous</b>
                  </h3>
                  <ul>
                    <dl>
                      a) This contract and all rights and obligations resulting
                      from it is subject to Austrian substantive law to the
                      exclusion of the rules on conflicts of law and CISG.
                    </dl>
                    <dl>
                      b) All disputes between the contracting parties in
                      relation to this contract are subject to the exclusive
                      jurisdiction of the competent court for the City of Vienna
                      (Innere Stadt Wien).
                    </dl>
                    <dl>
                      c) Any amendments to this contract shall only be valid if
                      done in writing.
                    </dl>
                    <dl>
                      d) If any provision in these conditions is found to be
                      illegal or invalid by a court of competent jurisdiction or
                      an arbitrator, that clause shall be deemed removed and the
                      remainder shall be unaffected. The parties shall endeavor
                      to agree on an alternative clause having like effect, as a
                      substitute for the provision that has been removed.
                    </dl>
                    <dl>
                      e) Our{' '}
                      <a href="\privacy">
                        <u>Privacy Policy</u>
                      </a>{' '}
                      is an integral part of these terms and conditions.
                    </dl>
                    <dl>
                      f) IIASA reserves the right, to modify or replace these
                      terms and conditions at any time. Should a modification be
                      adopted, an adequate notice will be given to the users. By
                      continuing to access or use the app after this notice,
                      users agree to be bound by the revised terms and
                      conditions. If users do not agree to the new terms and
                      conditions, they must refrain from accessing or using the
                      app without delay.
                    </dl>
                  </ul>
                </dl>
                <dl>
                  <h3>
                    <b>Contact us</b>
                  </h3>
                  <p>
                    If you have any questions about our Terms of Use, do not
                    hesitate to contact us at{' '}
                    <a href="mailto:info@laco-wiki.net">info@laco-wiki.net.</a>
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

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

import { useGetSurveyMap } from '@/api/autoGenerated/survey/survey';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getBackgroundImage } from '@/utils/backgroundImage';
import { isReviewer } from '@/utils/Helpers';

const Map = dynamic(() => import('../../components/surveysmap'), {
  ssr: false,
});

const SurveyMap = () => {
  const router = useRouter();
  const auth = useAuth();
  const surveysForMap = useGetSurveyMap({ MaxResultCount: 1000, SkipCount: 0 });

  useEffect(() => {
    if (!auth.isAuthenticated) {
      auth
        .signinSilent()
        .then((user) => {
          if (user === null) {
            router.push('\\').then();
          }
        })
        .catch(() => {
          router.push('\\').then();
        });
    } else if (!isReviewer(auth)) {
      router.push(`${router.basePath}/user`).then();
    }
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Donate Water Surveys"
          description="Review Surveys from Donate water project"
        />
      }
    >
      <div className="relative isolate h-auto">
        {getBackgroundImage()}
        {surveysForMap.data !== undefined && (
          <Map
            items={surveysForMap.data?.items}
            isLoading={surveysForMap.isLoading}
          />
        )}
      </div>
    </Main>
  );
};

export default SurveyMap;

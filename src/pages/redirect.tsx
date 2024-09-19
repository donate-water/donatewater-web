import { useRouter } from 'next/router';
import { useAuth } from 'react-oidc-context';

import { isReviewer } from '@/utils/Helpers';

export default function Redirect() {
  const router = useRouter();
  const auth = useAuth();
  if (auth.isLoading) {
    return (
      <div className="items-center justify-center py-12 text-center">
        Loading...
      </div>
    );
  }

  if (auth.isAuthenticated) {
    if (!isReviewer(auth)) {
      router.push('/user').then();
    } else {
      router.push('/review').then();
    }
  }

  return (
    <div className="items-center justify-center py-12 text-center">
      Logging in ...
    </div>
  );
}

import { useRouter } from 'next/router';
import { type AuthContextProps, useAuth } from 'react-oidc-context';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split('.')[1] as string));
  } catch (e) {
    return null;
  }
}

export function getUserName(auth: AuthContextProps) {
  if (auth !== undefined) {
    return parseJwt(auth.user?.access_token as string).preferred_username;
  }
  return '';
}

export function getUserId(auth: AuthContextProps) {
  if (auth !== undefined) {
    return parseJwt(auth.user?.access_token as string).sub;
  }
  return '';
}

export function isReviewer(auth: AuthContextProps): boolean {
  try {
    if (auth === undefined) {
      return false;
    }
    const roles = parseJwt(auth.user?.access_token as string).role as string[];
    if (roles === undefined) {
      return false;
    }
    const ReviewerRoleString = 'dwreviewer';
    // @ts-ignore
    if (roles === ReviewerRoleString) {
      return true;
    }
    return roles.find((x) => x === ReviewerRoleString) !== undefined;
  } catch {
    return false;
  }
}

export function getLogin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const auth = useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  function login() {
    if (!auth.isAuthenticated) {
      auth.signinRedirect().then();
    } else if (!isReviewer(auth)) {
      router.push('/user').then();
    } else {
      router.push('/review').then();
    }
  }

  return login;
}
export function wordToSentence(data: string) {
  const result = data.match(/[A-Z][a-z]+|[0-9]+/g);
  if (result == null) {
    return data;
  }
  return result.join(' ');
}

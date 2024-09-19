import Link from 'next/link';
import CookieConsent from 'react-cookie-consent';

export default function CookieBanner() {
  return (
    <div>
      <CookieConsent
        overlay
        style={{
          background: 'white',
          color: 'gray',
        }}
        buttonStyle={{
          background: '#3182ce',
          color: 'white',
          borderRadius: '12px',
          padding: '8px',
        }}
        hideOnAccept
        buttonText="Accept"
        location="top"
        cookieName="iiiasa-survey-cookie-consent"
        onAccept={() => {
          console.log('user accepted the cookie policy');
        }}
      >
        The website uses cookies to improve the user experience. Please read and
        accept the{' '}
        <Link href="https://iiasa.ac.at/terms-of-use">
          <button type="button">terms of use</button>
        </Link>{' '}
        .
      </CookieConsent>
    </div>
  );
}

/*import Link from 'next/link';
import { useEffect, useState } from 'react';

const isDevelopment = process.env.NODE_ENV === 'development';

const CookieNotification: React.FC = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(
    localStorage.getItem('cookiesAccepted') === 'true'
  );

  useEffect(() => {
    const handleCookieAccept = (e: Event) => {
      e.preventDefault();
      localStorage.setItem('cookiesAccepted', 'true');
      setCookiesAccepted(true);
    };

    const cookieMessage = document.getElementById('cookie-notification');
    const closeCookie = document.getElementById('cookie-notification-close');

    //if (cookieMessage && closeCookie && (!cookiesAccepted || isDevelopment)) {
    if (cookieMessage && closeCookie && !cookiesAccepted) {
      cookieMessage.style.display = 'block';
      closeCookie.addEventListener('click', handleCookieAccept);
    }

    //return (!cookiesAccepted || isDevelopment) ? (
    return () => {
      if (closeCookie) {
        closeCookie.removeEventListener('click', handleCookieAccept);
      }
    };
  }, [cookiesAccepted]);

  return !cookiesAccepted ? (
    <div
      id="cookie-notification"
      className="CookieMessage fixed bottom-0 left-0 right-0 bg-black"
      style={{ display: 'none', zIndex: '999' }}
    >
      <div className="CookieMessage-content text-white max-w-4xl my-0 mx-auto pt-4 md:pt-5 lg:pt-5 pr-3 lg:pr-5 md:pr-5 pb-0 pl-3 md:pl-1 lg:pl-1 leading-6 text-xs">
        <p>
          Nós utilizamos cookies: Eles são usados para aprimorar a sua experiência. Ao fechar este banner ou continuar na página, você concorda com o uso dos cookies ativos. Você pode optar por rejeitar os cookies de terceiros.{' '}
          <a href="https://exemplo/politicas-de-privacidade" className="text-white border-b-2 border-white">
            Saiba mais
          </a>
        </p>
        <p>
          <Link id="cookie-notification-close" className="CookieMessage-button text-white inline-block py-1 px-5 rounded-md uppercase bg-blue-400 hover:bg-blue-500" href="#">
            Aceitar
          </Link>
        </p>
      </div>
    </div>
  ) : null;
};

export default CookieNotification;*/
/*import Link from 'next/link';
import { useEffect } from 'react';

const CookieNotification: React.FC = () => {
  useEffect(() => {
    const handleCookieAccept = (e: Event) => {
      e.preventDefault();

      // Armazena no localStorage
      localStorage.setItem('cookiesAccepted', 'true');

      // Calcula a data de expiração em aproximadamente 30 dias
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);

      // Cria um cookie HTTP real com expiração em 30 dias
      document.cookie = `cookiesAccepted=true; expires=${expirationDate.toUTCString()}; path=/`; // Ajuste conforme necessário
      console.log('Aceito com sucesso!');
      // Oculta a mensagem de notificação
      const cookieMessage = document.getElementById('cookie-notification');
      if (cookieMessage) {
        cookieMessage.style.display = 'none';
      }
    };

    const cookieMessage = document.getElementById('cookie-notification');
    const closeCookie = document.getElementById('cookie-notification-close');

    if (cookieMessage && closeCookie) {
      cookieMessage.style.display = 'block';
      closeCookie.addEventListener('click', handleCookieAccept);
    }

    return () => {
      if (closeCookie) {
        closeCookie.removeEventListener('click', handleCookieAccept);
      }
    };
  }, []);

  return (
    <div id="cookie-notification" className="CookieMessage fixed bottom-0 left-0 right-0 bg-black" style={{ display: 'none', zIndex: '999' }}>
      <div className="CookieMessage-content text-white max-w-4xl my-0 mx-auto pt-4 md:pt-5 lg:pt-5 pr-3 lg:pr-5 md:pr-5 pb-0 pl-3 md:pl-1 lg:pl-1 leading-6 text-xs">
        <p>
          Nós utilizamos cookies: Eles são usados para aprimorar a sua experiência. Ao fechar este banner ou continuar na página, você concorda com o uso dos cookies ativos. Você pode optar por rejeitar os cookies de terceiros.{' '}
          <a href="https://exemplo/politicas-de-privacidade" className='text-white border-b-2 border-white'>Saiba mais</a>
        </p>
        <p>
          <Link id="cookie-notification-close" className="CookieMessage-button text-white inline-block py-1 px-5 rounded-md uppercase bg-blue-400 hover:bg-blue-500" href="#">
            Aceitar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CookieNotification;*/
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CookieNotification: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(true);

  useEffect(() => {
    const handleCookieAccept = (e: Event) => {
      e.preventDefault();

      // Armazena no localStorage
      localStorage.setItem('cookiesAccepted', 'true');

      const date1 =3;
        // Calcula a data de expiração em 1 dia
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + date1);

      // Define o tempo de expiração para 1 dia
      expirationDate.setHours(0, 0, 0, 0);

      // Armazena a data de expiração no localStorage
      localStorage.setItem('cookieExpiration', expirationDate.toISOString());

      // Atualiza o estado para ocultar o banner
      setShowBanner(false);
    };

    const cookieMessage = document.getElementById('cookie-notification');
    const closeCookie = document.getElementById('cookie-notification-close');

    // Verifica se o banner deve ser exibido com base na data de expiração
    const shouldShowBanner = () => {
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      const expirationDate = localStorage.getItem('cookieExpiration');
      return !cookiesAccepted || (expirationDate && new Date(expirationDate) > new Date());
    };

    if (cookieMessage && closeCookie && shouldShowBanner()) {
      cookieMessage.style.display = 'block';
      closeCookie.addEventListener('click', handleCookieAccept);
    }

    return () => {
      if (closeCookie) {
        closeCookie.removeEventListener('click', handleCookieAccept);
      }
    };
  }, []);

  return showBanner ? (
    <div id="cookie-notification" className="CookieMessage fixed bottom-0 left-0 right-0 bg-black" style={{ display: 'none', zIndex: '999' }}>
      <div className="CookieMessage-content text-white max-w-4xl my-0 mx-auto pt-4 md:pt-5 lg:pt-5 pr-3 lg:pr-5 md:pr-5 pb-0 pl-3 md:pl-1 lg:pl-1 leading-6 text-xs">
        <p>
          Nós utilizamos cookies: Eles são usados para aprimorar a sua experiência. Ao fechar este banner ou continuar na página, você concorda com o uso dos cookies ativos. Você pode optar por rejeitar os cookies de terceiros.{' '}
        </p>
        <p>
          <Link id="cookie-notification-close" className="CookieMessage-button text-white inline-block py-1 px-5 rounded-md uppercase bg-blue-400 hover:bg-blue-500" href="#">
            Aceitar
          </Link>
        </p>
      </div>
    </div>
  ) : null;
};

export default CookieNotification;


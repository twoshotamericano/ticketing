import 'bootstrap/dist/css/bootstrap.css';
import buildQuery from '../helpers/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component pageProps={pageProps} currentUser={currentUser} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (context) => {
  let pageProps;

  try {
    const client = await buildQuery(context.ctx);

    const { data } = client.get('/api/users/currentuser');
    console.log('got data');
    if (context.Component.getInitialProps) {
      pageProps = await context.Component.getInitialProps(
        context.ctx,
        client,
        data.currentUser
      );
    }
    console.log('got page props!');

    return { pageProps, ...data };
  } catch (error) {
    console.log(error);
    return { pageProps };
  }
};

export default AppComponent;

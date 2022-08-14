import SignInTemplate from '../../../modules/auth/components/SignInTemplate';
import useUnauthenticatedRoute from '../../../modules/shared/hooks/useUnauthenticatedRoute';

const SignInPage = () => {
  const isLoading = useUnauthenticatedRoute();
  return isLoading ? null : <SignInTemplate />;
};

export default SignInPage;

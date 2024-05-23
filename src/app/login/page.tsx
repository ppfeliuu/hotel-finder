import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { LoginBox, LoginButton, LoginContainer, Title } from "@/src/styles/app/LoginStyled";
import { Session } from 'next-auth';

const LoginPage = () => {
  const session: Session | null = useSession().data ?? null;
  const loading: boolean = useSession().status === "loading";
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/search');
    }
  }, [session, router]);

  if (loading) return <p>Loading...</p>;

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <LoginButton onClick={() => router.push('/api/auth/signin')}>
          Sign in with Auth0
        </LoginButton>
      </LoginBox>
    </LoginContainer>
  )
}

export default LoginPage
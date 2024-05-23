// LoginPage.tsx
'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { LoginBox, LoginButton, LoginContainer, Title } from "@/src/styles/app/LoginStyled";

interface HomeProps {
  session: any;
  loading: boolean;
}

const LoginPage = () => {
  const router = useRouter();

  const session = null;
  const loading = false;

  useEffect(() => {
    if (session) {
      router.push('/search');
    }
  }, [router, session]);

  if (loading) return <p>Loading...</p>;

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <LoginButton onClick={() => router.push('/search')}>
          Sign in with Auth0
        </LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;

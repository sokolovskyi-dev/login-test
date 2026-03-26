import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';

import { useSignInMutation } from '@/api/authApi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate();
  const [signUp, { error, isLoading }] = useSignInMutation();

  async function handleSubmit(formData) {
    try {
      const payload = Object.fromEntries(formData);
      console.log(payload);
      const result = await signUp(payload).unwrap();
      console.log(result);

      toast.success('✅ Login successful!!!');
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('🔥 Login error!!!');
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="username"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                />
              </Field>
              <Field>
                {error && <p className="text-sm text-red-500">🔥 Login error</p>}
                <Spinner />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Login...' : 'Login'}
                </Button>
                {/* <Button variant="outline" type="button">
                  Login with Google
                </Button> */}
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/registration">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

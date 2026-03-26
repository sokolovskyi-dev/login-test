// import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

// import { toast } from 'sonner';
import { useSignUpMutation } from '@/api/authApi';
// import { registration } from '@/api/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
// import { registrationThunk } from '@/redux/operations';
// import { selectAuthLoading } from '@/redux/selectors';
function getErrorMessage(error) {
  if (error?.data?.code === 11000) {
    return `User with email ${error.data.keyValue.email} already exists`;
  }

  if (error?.data?.message) {
    return error.data.message;
  }

  return 'Sign up failed';
}

export function RegistrationForm({ className, ...props }) {
  const navigate = useNavigate();
  const [signUp, { error, isLoading }] = useSignUpMutation();
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectAuthLoading);
  // const isAuth = useSelector(selectAuth);

  async function handleSubmit(formData) {
    try {
      const payload = Object.fromEntries(formData);
      const result = await signUp(payload).unwrap();
      console.log(result);

      toast.success('✅  User created!!!');
      navigate('/home');
    } catch (error) {
      console.error('Sign up failed:', error);
      toast.error('🔥 Sign up failed!!!');
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          {/* <CardDescription>Enter your email below to login to your account</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form action={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" name="name" type="text" placeholder="Tomas" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email"
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
                  minLength={7}
                  autoComplete="new-password"
                  required
                />
              </Field>
              {error && <p className="text-sm text-red-500">{getErrorMessage(error)}</p>}
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Signing up...' : 'Sign Up'}
                </Button>
                {/* <Button variant="outline" type="button">
                  Login with Google
                </Button> */}
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

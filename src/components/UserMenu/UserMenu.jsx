import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { useLogOutMutation } from '@/api/authApi';
import { logOut } from '@/redux/auth/authSlice';
import { selectUser } from '@/redux/auth/selectors';

import { Button } from '../ui/button';

export function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [logout, { isLoading }] = useLogOutMutation();

  async function handleClick() {
    try {
      await logout().unwrap();
      dispatch(logOut());
    } catch (error) {
      console.error(error);
      toast.error('Logout error!!!');
    }
  }

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Logging out...' : 'Logout'}
      </Button>
    </div>
  );
}

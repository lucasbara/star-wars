import { Error } from '@/layouts/Error';

export function NotFound() {
  return <Error code={404} message="Page not found" />;
}

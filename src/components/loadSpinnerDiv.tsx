import { Spinner } from '@/components/spinner';

export function LoadSpinnerDiv(msg: string = 'Loading...') {
  return (
    <div className="w-32 py-8 sm:mx-auto sm:max-w-sm sm:py-3">
      <p className="text-center">{msg}</p>
      <Spinner />
    </div>
  );
}

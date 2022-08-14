import Skeleton from '../../../shared/components/Skeleton';

const BookCardSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-[4px] p-4 shadow-[0px_6px_24px_rgba(84,16,95,0.13)]">
      <div className="flex items-center gap-x-2">
        <Skeleton className="h-[122px] w-[81px] rounded-sm" />
        <div className="flex flex-col flex-1">
          <div className="mb-12 flex flex-col w-full gap-y-0.5">
            <Skeleton className="w-full h-4" />
            <Skeleton className="h-4 w-25" />
          </div>
          <div className="flex flex-col w-full gap-y-0.5">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-22" />
            <Skeleton className="h-4 w-25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;

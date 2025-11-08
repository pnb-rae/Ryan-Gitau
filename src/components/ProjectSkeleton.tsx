import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSkeleton() {
  return (
    <div className="card-gradient rounded-2xl overflow-hidden h-full">
      {/* Image Skeleton */}
      <Skeleton className="w-full aspect-[16/10] rounded-none" />
      
      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        
        {/* Tech badges */}
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        
        <Skeleton className="h-5 w-32 mt-2" />
      </div>
    </div>
  );
}

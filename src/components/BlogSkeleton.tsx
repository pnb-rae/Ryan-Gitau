import { Skeleton } from "@/components/ui/skeleton";

export default function BlogSkeleton() {
  return (
    <div className="card-gradient rounded-2xl overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="w-full h-48 rounded-none" />
      
      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        <div className="flex gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}

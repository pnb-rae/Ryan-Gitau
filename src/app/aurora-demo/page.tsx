import { AuroraDemo } from "@/components/ui/aurora-demo"

export default function AuroraDemoPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Aurora Effect Demo</h1>
        <p className="mx-auto max-w-2xl text-neutral-400">
          A beautiful WebGL-powered aurora effect that adds dynamic, colorful backgrounds to your UI.
        </p>
      </div>
      
      <div className="space-y-8">
        <AuroraDemo />
        
        <div className="grid gap-6 md:grid-cols-2">
          <AuroraDemo className="h-[300px]" />
          <AuroraDemo className="h-[300px]" />
        </div>
        
        <div className="rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">How to Use</h2>
          <pre className="rounded-lg bg-black/50 p-4 text-sm text-gray-300">
            {`import { Aurora } from "@/components/ui/aurora";

function MyComponent() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="relative z-10 p-8 text-white">
        {/* Your content here */}
      </div>
    </div>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}

import { StackContext, StaticSite } from 'sst/constructs'

export function FrontendStack({ stack, app }: StackContext) {
  // Define our React app
  const site = new StaticSite(stack, 'ReactSite', {
    path: 'packages/clientApp',
    buildCommand: 'pnpm run build',
    buildOutput: 'dist',
    // Pass in our environment variables
    environment: {
      VITE_REGION: app.region,
      VITE_API_URL: 'http://localhost:3000/dev/graphql',
    },
  })

  // Show the url in the output
  stack.addOutputs({
    SiteUrl: site.url,
  })
}

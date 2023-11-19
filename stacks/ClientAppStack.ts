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
      /* VITE_API_URL: api.url,
      VITE_BUCKET: bucket.bucketName,
      VITE_USER_POOL_ID: auth.userPoolId,
      VITE_USER_POOL_CLIENT_ID: auth.userPoolClientId,
      VITE_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "", */
    },
  })

  // Show the url in the output
  stack.addOutputs({
    SiteUrl: site.url,
  })
}

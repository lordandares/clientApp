import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// stacks/ClientAppStack.ts
import { StaticSite } from "sst/constructs";
function FrontendStack({ stack, app }) {
  const site = new StaticSite(stack, "ReactSite", {
    path: "packages/clientApp",
    buildCommand: "pnpm run build",
    buildOutput: "dist",
    // Pass in our environment variables
    environment: {
      VITE_REGION: app.region
      /* VITE_API_URL: api.url,
      VITE_BUCKET: bucket.bucketName,
      VITE_USER_POOL_ID: auth.userPoolId,
      VITE_USER_POOL_CLIENT_ID: auth.userPoolClientId,
      VITE_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "", */
    }
  });
  stack.addOutputs({
    SiteUrl: site.url
  });
}
__name(FrontendStack, "FrontendStack");

// sst.config.ts
var sst_config_default = {
  config() {
    return {
      name: "clientApp",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(FrontendStack);
  }
};
export {
  sst_config_default as default
};

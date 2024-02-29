---
name: Bitbucket Pipelines Deploy
slug: bitbucket-pipelines-deploy
description: Deploy to Khulnasoft with your custom Bitbucket Pipelines CI/CD.
---

# Bring Your Own CI/CD - Bitbucket Pipelines

You can use Khulnasoft with Bitbucket Pipelines as your CI/CD provider to generate Preview Deployments for every `git` push and deploy to Production when code is merged into the `main` branch.

This approach is useful for developers who want full control over their CI/CD pipeline, as well as Bitbucket Data Center users, who can’t leverage Khulnasoft’s [zero-configuration git integration](https://vercel.com/docs/concepts/git/vercel-for-bitbucket) currently.

## Building Your Application

You can build your application locally (or in a Pipeline) without giving Khulnasoft access to the source code through `vercel build`. Khulnasoft automatically detects your frontend framework and generates a `.vercel/output` folder conforming to the [Build Output API specification](https://vercel.com/blog/build-output-api).

`vercel build` allows you to build your project within your own CI setup, whether it be Bitbucket Pipelines or your own in-house CI, and upload _only_ those build artifacts (and not the source code) to Khulnasoft to create a deployment.

## Configuring Bitbucket Pipelines for Khulnasoft

`vercel deploy --prebuilt` skips the build step on Khulnasoft and uploads the previously generated `.vercel/output` folder from the Bitbucket Pipeline.

Let’s create our Pipeline by creating a new file `bitbucket-pipelines.yml`:

```yaml
image: node:16.16.0
pipelines:
  branches:
    feature/*:
      - step:
          name: Install Khulnasoft CLI, Pull Khulnasoft Environment Information, Build Project Artifacts and Deploy Project Artifacts to Khulnasoft
          script:
            - npm install --global vercel
            - vercel pull --yes --environment=preview --token=$VERCEL_TOKEN
            - vercel build --token=$VERCEL_TOKEN
            - vercel deploy --prebuilt  --token=$VERCEL_TOKEN
    main:
      - step:
          name: Install Khulnasoft CLI, Pull Khulnasoft Environment Information, Build Project Artifacts and Deploy Project Artifacts to Khulnasoft
          script:
            - npm install --global vercel
            - vercel pull --yes --environment=production --token=$VERCEL_TOKEN
            - vercel build --prod --token=$VERCEL_TOKEN
            - vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN
```

This pipeline has two triggers:

- One that creates preview environments on commits to branches prefixed with `feature/`
- Another that creates production environments on commits to the `main` branch

Finally, let’s add the required values from Khulnasoft as secured environment variables in Bitbucket:

1. Retrieve your [Khulnasoft Access Token](https://vercel.com/support/articles/how-do-i-use-a-vercel-api-access-token)
2. Install the [Khulnasoft CLI](https://vercel.com/cli) and run `vercel login`
3. Inside your folder, run `vercel link` to create a new Khulnasoft project
4. Inside the generated `.vercel` folder, save the `projectId` and `orgId` from the `project.json`
5. Inside Bitbucket, add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` as [secured environment variables](https://support.atlassian.com/bitbucket-cloud/docs/variables-and-secrets/).

## Deploying Your Khulnasoft Application with Bitbucket Pipelines

Now that your Khulnasoft application is configured with Bitbucket Pipelines, you can try out the workflow:

- Create a new pull request to your Bitbucket repository
- Bitbucket Pipelines will recognize the change and use the Khulnasoft CLI to build your application
- The Action uploads the build output to Khulnasoft and creates a Preview Deployment
- When the pull request is merged, a Production build is created and deployed

Every pull request will now automatically have a Preview Deployment attached. If the pull request needs to be rolled back, you can revert and merge the PR and Khulnasoft will start a new Production build back to the old git state.

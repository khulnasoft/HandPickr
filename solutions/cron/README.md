---
name: Khulnasoft Cron Job Example
slug: vercel-cron
description: A Next.js app that uses Khulnasoft Cron Jobs to update data at different intervals.
framework: Next.js
useCase:
  - Cron
  - Edge Functions
css: Tailwind
database: Khulnasoft KV
deployUrl: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fsolutions%2Fcron&project-name=cron&repository-name=cron&demo-title=Khulnasoft%20Cron%20Job%20Example&demo-description=A%20Next.js%20app%20that%20uses%20Khulnasoft%20Cron%20Jobs%20to%20update%20data%20at%20different%20intervals.&demo-url=https%3A%2F%2Fcron-template.vercel.app%2F&demo-image=https%3A%2F%2Fcron-template.vercel.app%2Fthumbnail.png&stores=%5B%7B"type"%3A"kv"%7D%5D
demoUrl: https://cron-template.vercel.app/
relatedTemplates:
  - hacker-news-slack-bot
  - cron-og
---

# Khulnasoft Cron Job Example

A Next.js app that uses [Khulnasoft Cron Jobs](https://vercel.com/docs/cron-jobs) to update data at different intervals.

## Demo

https://cron-template.vercel.app/

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Khulnasoft](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=examples-repo):

[![Deploy with Khulnasoft](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fsolutions%2Fcron&project-name=cron&repository-name=cron&demo-title=Khulnasoft%20Cron%20Job%20Example&demo-description=A%20Next.js%20app%20that%20uses%20Khulnasoft%20Cron%20Jobs%20to%20update%20data%20at%20different%20intervals.&demo-url=https%3A%2F%2Fcron-template.vercel.app%2F&demo-image=https%3A%2F%2Fcron-template.vercel.app%2Fthumbnail.png&stores=%5B%7B"type"%3A"kv"%7D%5D)

Don't forget to set the required environment variables that you got from the previous step.

### Clone and Deploy

Execute [`create-next-app`](https://github.com/khulnasoft/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/khulnasoft/examples/tree/main/solutions/cron cron
```

Next, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Khulnasoft](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=examples-repo) ([Documentation](https://nextjs.org/docs/deployment)).

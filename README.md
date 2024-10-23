# hyperformula-staging

#### Repository required to deploy HF documentation to staging env (GH pages).

## Staging env

### URL

https://handsontable.github.io/hyperformula-staging/

### SEO

The page is protected from being indexed by the search engine bots by:
- https://handsontable.github.io/robots.txt
- `<meta name="robots" content="noindex, nofollow">` in https://handsontable.github.io/hyperformula-staging/index.html file

GH [does not support](https://github.com/orgs/community/discussions/60689) restricting access to it using a password

## How to deploy documentation to staging

If you want to deploy the documentation from `feature-branch` (in the `hyperformula` repo), follow these steps:

1. Create a pull request **across forks**:
    - to [base repo] `hyperformula-staging`, [base branch] `hyperformula`
    - from [head repo] `hyperformula`, [head branch] `feature-branch`
    - this link might help: https://github.com/handsontable/hyperformula-staging/compare/hyperformula...handsontable:hyperformula:feature-branch
2. Make sure it does not overwrite the key code fragments (see below)
3. Merge the PR
4. Wait for `Publish` and `pages-build-deployment` workflows to finish
5. Visit https://handsontable.github.io/hyperformula-staging/

## Key code fragments

In `hyperformula` branch there are a few code fragments that are essential for correct deployment of the staging env. They must not be overwritten.


1. File [.github/workflows/publish.yml](https://github.com/handsontable/hyperformula-staging/blob/hyperformula/.github/workflows/publish.yml), especially the specification of the branch that triggers the workflow:

https://github.com/handsontable/hyperformula-staging/blob/28116bfaf372b95e7f6149d9201f8c074a04a55f/.github/workflows/publish.yml#L6

2. Spacification of the base URL in the [docs/.vuepress/config.js](https://github.com/handsontable/hyperformula-staging/blob/hyperformula/docs/.vuepress/config.js) file:

https://github.com/handsontable/hyperformula-staging/blob/28116bfaf372b95e7f6149d9201f8c074a04a55f/docs/.vuepress/config.js#L65

3. `<meta name="robots">` tag in the [docs/.vuepress/config.js](https://github.com/handsontable/hyperformula-staging/blob/hyperformula/docs/.vuepress/config.js) file:

https://github.com/handsontable/hyperformula-staging/blob/28116bfaf372b95e7f6149d9201f8c074a04a55f/docs/.vuepress/config.js#L15:L16

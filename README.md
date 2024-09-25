# Logos

The repository for [logos.co](https://logos.co/) website.


## How to Run Locally

1. Clone this repository
    ```bash
    $ git clone https://github.com/acid-info/logos.co.git
    ```
2. Install the dependencies:
    ```bash
    $ yarn install
    ```
3. Start the website:
    ```bash
    $ yarn start
    ```
4. Visit `http://localhost:3000` in your browser

## Landing Page

The code for a landing page is located in `docs/index.mdx`. This file employs the `mdx` format and utilizes React components from the [Logos Docusaurus Plugins](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/src/client/components/mdx) package.

## Adding Subpages

To include subpages, create a `.md` or `mdx` file within the `about` directory. You can use [Frontmatter](https://docusaurus.io/docs/markdown-features#front-matter) to add metadata to your markdown file.

The content in `about/index.md` will be utilized as the index page for the `/about` section.

## Root Pages

Subpages that do not belong to the `About` page (e.g., [Terms of Use](/root-pages/terms.md)) can be situated in the `root-pages` directory.

## Docusaurus Config

You can find instructions for adding additional documentation sections, implementing localization, and managing versioning on the [Docusaurus](https://docusaurus.io/docs) website.

> Please note that theme customization is somewhat restricted; for more detailed instructions on customizing your theme, visit the [Logos Docusaurus Theme](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/) repository.

## Custom CSS

By default, this template utilizes the CSS styles defined in the [logos-docusaurus-plugins](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/src/client/css) package. You have the option to define custom CSS in `src/css/custom.scss`.

## How to Run a Static Build (Production Build)

1. Generate static files for production:
    ```bash
    $ yarn build
    ```
    The static files will be created in the `build` directory.
2. Serve the static build:
    ```bash
    $ yarn serve
    ```

## CI/CD

- [CI builds](https://ci.infra.status.im/job/website/job/logos.co/) `master` and pushes to `deploy-master` branch, which is hosted at <https://logos.co//>.
- [CI builds](https://ci.infra.status.im/job/website/job/dev.logos.co/) `develop` and pushes to `deploy-develop` branch, which is hosted at <https://dev.logos.co//>.

The hosting is done using [Caddy server with Git plugin for handling GitHub webhooks](https://github.com/status-im/infra-misc/blob/master/ansible/roles/caddy-git).

Information about deployed build can be also found in `/build.json` available on the website.

## Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`.
2. Make your changes, push them to the `origin`, and open a Pull Request against the `develop` branch.
3. After approval, merge the pull request, and verify the changes on the staging server (e.g., https://dev.vac.dev).
4. When ready to promote changes to the live website, rebase the `master` branch on the staging changes: `git checkout master; git pull origin master; git rebase origin/develop; git push`.

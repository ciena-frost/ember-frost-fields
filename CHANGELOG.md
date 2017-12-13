# 6.0.2 (2017-12-13)
* Change semver range of `ember-resolver` to align with other repos

# 6.0.1 (2017-11-08)
* Use the latest minor of `ember-frost-core`


# 6.0.0 (2017-11-03)

## WARNING: THIS REVERTS EMBER CLI 2.16.2 BACK TO 2.12.3

We apologize for this change. Unfortunately, due to the internal needs of our organization this became a required action.

The 2.16.2 changes are now located in the `ember-cli-2.16.2` branch and will hopefully be contained in a versioned release again in the future.

# 5.0.0 (2017-10-31)
* **Updated** to Ember CLI 2.16.2 and babel 6
* **Removed** ember-computed-decorators since it is now provided as a dependency of `ember-frost-core`
* **Updated** dependencies
* **Updated** pr-bumber to version 3
* **Updated** CONTRIBUTING.md file
* **Updated** to using Ember Javascript Modules API https://github.com/ember-cli/ember-rfc176-data
* **Updated** blueprints to latest versions of dependencies
* **Updated** to use chrome headless in Travis CI
* **Updated** to using Node 8.1.2 NPM 5
* **Added** eslint-plugin-ember to enforce Ember Javascript Modules API syntax
* **Removed** running of code coverage until issue is resolved with ember-cli-code-coverage: https://github.com/kategengler/ember-cli-code-coverage/issues/133
* **Removed** running of ember-try its-2.12 scenario until issue is resolved: https://github.com/ember-cli/ember-try/issues/148

# 4.2.10 (2017-10-26)
* **Updated** testing dependencies
* **Removed** ember-cli-visual-acceptance
* **Removed** no longer used `bower.json` and `.bowerrc`


# 4.2.9 (2017-08-11)
* Upgrade ember-cli 2.12.3 inter-dependencies

# 4.2.8 (2017-07-05)
* Upgrade `ember-cli` to `2.12.3`

# 4.2.7 (2017-05-10)
* **Updated** the secure tokens in `.travis.yml`

# 4.2.6 (2017-04-21)
* **Added**  blueprint check


# 4.2.5 (2017-03-20)
* **Used** `ember-frost-core` info, warning and error icons instead of the local icons
* **Modified** `ember-cli` dependency to `~` instead of `^` to avoid picking up the latest minor version of ember


# 4.2.4
* **Added** .gitkeep file to the coverage directory

# 4.2.3
* **Updated** the travis scripts used for bumping and publishing

# 4.2.2

* **Fixed** build to publish.

# 4.2.1
* **Updated** integration tests to use the `ember-test-utils` helpers


# 4.2.0

* **Removed** lodash from dependencies.
* **Updated** CI to test in Chrome as well as Firefox.


# 4.1.1

* **Upgraded** to test against Ember 2.11.


# 4.1.0

* **Added** additional builds to CI to make sure addon works with latest versions of Ember.
* **Removed** files from npm package that aren't necessary (all of the various config files).
* **Updated** dependencies to latest versions.


# 4.0.0
- Updated comber-frost-core
- SVG's folder was added to main directory
- 'frost-nav' icon pack was added to package.json
- updated failing dependencies
- removed unnecessary dependencies.

# 3.0.1
**fix** gh-pages demo



# 3.0.0
**updated** publish script perms, coverage attrs, node version.


# 2.0.0
**upgraded** to Ember 2.8.
**Added** sass and md linting.
**Updated** Demo, README and tests

# 1.0.0

* Bumping to 1.0 for inclusion in the long term Frost ecosystem

# 0.2.1

* **Removed** application template from `app` directory which was being used by apps not defining their own
application template.

# 0.2.0

* **Upgraded** from `lodash` 3.x to 4.x.

# 0.1.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.1.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

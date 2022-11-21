# Top app

## Build Setup

### Run with **bash**
```bash
# install dependencies
$ npm install

# serve with hot reload
$ npm run dev

# build for production and launch server
$ npm run build && npm run start
```

### Rules for writing commits
Commits should be of the form:
```
<type>(optional area): <short description>
```
for example,
```
chore: adding a commit message linter
```

##### Types
The following types are allowed in the name:
- chore - updating routine tasks, etc.; without changing the production code
- feat - new feature for user
- fix - bug fix for users
- refactor - production code refactoring
- style - formatting, missing semicolons, etc.; without changing the production code
- test - adding missing tests, test refactoring; without changing the production code
- docs - documentation update

##### Optional area
In the optional area, you can add something specific to a particular commit, such as a link to an issue.
```
docs(task-1234): added optional parameter to commit message
```

##### Short description
Description of what was done as part of the commit (cannot be more than 100 characters)

# Dependabot SCA Demo

This project is a small TypeScript application intentionally using older npm packages so that GitHub Dependabot and npm audit can surface dependency security findings.

## Included older dependencies

- axios@0.18.1
- glob@7.1.6
- lodash@4.17.0
- minimatch@3.0.4
- moment@2.29.4
- serialize-javascript@4.0.0
- set-value@2.0.1

## Build

```bash
npm install
npm run build
```

## Notes

This demo was built to help learn SCA workflows, dependency advisories, and reachability analysis in a real GitHub repository.

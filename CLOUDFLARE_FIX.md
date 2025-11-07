# Cloudflare Pages Build Configuration

## ✅ Correct Build Settings

When setting up your project in Cloudflare Pages, use these **exact** settings:

### Build Configuration

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty or default) |
| **Environment variables** | `NODE_VERSION = 18` (optional, but recommended) |

### Important Notes

1. **DO NOT** use `npm clean-install` as Cloudflare does by default - let it use the standard install
2. The `patch-package` dependency has been added to fix the rollup post-install script issue
3. If build still fails, try adding this environment variable in Cloudflare Pages settings:
   - `NPM_FLAGS = --legacy-peer-deps`

## Alternative: Use Custom Build Command

If you still encounter issues, use this build command instead:

```
npm install --legacy-peer-deps && npm run build
```

Or use the custom script we added:

```
npm run cf-build
```

## Troubleshooting

### If build fails with "patch-package: not found"

**Solution**: Make sure you've pushed the latest `package.json` that includes `patch-package` in devDependencies.

```bash
git add package.json
git commit -m "Add patch-package for Cloudflare build"
git push
```

Then retry the deployment in Cloudflare.

### If build fails with peer dependency warnings

**Solution**: Use the `npm run cf-build` command which includes `--legacy-peer-deps` flag.

In Cloudflare Pages:
- Build command: `npm run cf-build`
- Build output directory: `dist`

## Quick Deploy Steps

1. **Push updated code to GitHub**
   ```bash
   git add .
   git commit -m "Fix Cloudflare build configuration"
   git push
   ```

2. **In Cloudflare Pages Dashboard**
   - Go to your project
   - Click "Settings" → "Builds & deployments"
   - Update build command to: `npm run build`
   - Save settings

3. **Retry deployment**
   - Go to "Deployments"
   - Click "Retry deployment" on the failed build
   - OR push a new commit to trigger automatic deployment

That's it! Your build should now succeed. ✅

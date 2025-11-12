# 🚀 Deploying Learn Assamese to Netlify

Complete guide to deploy your Assamese learning app to Netlify.

---

## ✅ Prerequisites

- Netlify account (you have a paid account ✓)
- Git repository with the prototype code (already pushed ✓)
- Sarvam AI API key (you have it ✓)

---

## 🎯 Quick Deploy (5 Minutes)

### Method 1: Netlify Dashboard (Easiest)

1. **Log in to Netlify**
   - Go to https://app.netlify.com/
   - Sign in to your account

2. **Import from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub/GitLab/Bitbucket"
   - Connect your repository: `mondweep/learn-assamese`
   - Select branch: `claude/assamese-language-learning-app-011CV2tw5tov9r1CXigVKL1L`

3. **Configure Build Settings**
   - **Base directory:** `prototype`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18 (should auto-detect from netlify.toml)

4. **Add Environment Variables**
   Click "Show advanced" → "Add environment variables":
   ```
   NEXT_PUBLIC_SARVAM_API_KEY = your_sarvam_api_key_here
   SARVAM_AP_API_KEY = your_sarvam_api_key_here
   ```

   **IMPORTANT:** Use your actual Sarvam AI API key from https://www.sarvam.ai/
   NEVER commit API keys to git repositories!

5. **Deploy!**
   - Click "Deploy site"
   - Wait 2-3 minutes for build
   - Your app will be live at: `https://your-site-name.netlify.app`

---

### Method 2: Netlify CLI (Alternative)

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Navigate to prototype
cd /home/user/learn-assamese/prototype

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow prompts:
# - Create & configure new site
# - Choose team (your paid account)
# - Site name: learn-assamese (or your choice)
# - Build command: npm run build
# - Publish directory: .next
# - Base directory: (leave empty, we're already in prototype/)

# Set environment variables (use your actual API key)
netlify env:set NEXT_PUBLIC_SARVAM_API_KEY "your_sarvam_api_key_here"
netlify env:set SARVAM_AP_API_KEY "your_sarvam_api_key_here"

# Deploy!
netlify deploy --prod
```

---

## 📋 Configuration Files

### netlify.toml (Already Created ✓)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

### package.json (Updated ✓)
The Netlify Next.js plugin is now included in devDependencies.

---

## 🔧 Post-Deployment Setup

### 1. Custom Domain (Optional)
If you have a custom domain:

1. Go to: Site settings → Domain management
2. Add custom domain: `learn-assamese.com` (or your domain)
3. Configure DNS with your provider:
   ```
   Type: CNAME
   Name: www (or @)
   Value: your-site-name.netlify.app
   ```
4. Enable HTTPS (automatic with Netlify)

### 2. Environment Variables
Verify in Netlify dashboard:
- Site settings → Environment variables
- Should see both API keys set
- Can add more as needed

### 3. Deploy Previews
- Every push to your branch creates a preview
- Perfect for testing before production
- Accessible at: `deploy-preview-X--your-site.netlify.app`

### 4. Custom Subdomain
Change the default subdomain:
- Site settings → Site details → Change site name
- e.g., `learn-assamese-prototype.netlify.app`

---

## ✅ Verification Checklist

After deployment, verify these work:

- [ ] Landing page loads (`/`)
- [ ] Lesson library shows 5 lessons (`/learn`)
- [ ] Individual lessons work (`/learn/lesson-01`)
- [ ] Assamese script renders correctly
- [ ] Translation demo works (`/demo`)
- [ ] About page loads (`/about`)
- [ ] Sarvam AI translation works (real API, not mock)
- [ ] Audio playback works (TTS)
- [ ] Mobile responsive (test on phone)
- [ ] All navigation links work

---

## 🎨 Netlify Features You Can Use

### With Your Paid Account:

1. **Analytics**
   - Site analytics tab
   - See visitor stats, page views
   - Track which lessons are most popular

2. **Forms** (if you add signup)
   - Built-in form handling
   - Email notifications
   - Spam filtering

3. **Functions** (for future backend needs)
   - Serverless functions
   - API endpoints
   - Database integration

4. **Split Testing** (A/B testing)
   - Test different lesson formats
   - Optimize conversion
   - Data-driven decisions

5. **Build Minutes**
   - Generous limit with paid plan
   - Fast build times
   - Automatic deploys on push

---

## 🔄 Continuous Deployment

Once set up, deployment is automatic:

1. **Make changes locally**
   ```bash
   cd /home/user/learn-assamese/prototype
   # Edit files...
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "Add new lesson"
   git push
   ```

3. **Netlify auto-deploys!**
   - Detects push
   - Runs build
   - Deploys in 2-3 minutes
   - Live automatically

---

## 🐛 Troubleshooting

### Build Fails
**Error:** "Command failed: npm run build"
**Fix:**
```bash
# Test build locally first
cd prototype
npm run build

# If it works locally, check:
# - Node version in Netlify (should be 18)
# - Base directory is set to "prototype"
```

### Environment Variables Not Working
**Error:** "NEXT_PUBLIC_SARVAM_API_KEY is undefined"
**Fix:**
- Must use `NEXT_PUBLIC_` prefix for client-side variables
- Redeploy after adding env vars
- Clear cache and redeploy if needed

### 404 on Refresh
**Error:** Page works via navigation but 404 on direct URL
**Fix:** This shouldn't happen with Next.js + Netlify plugin, but if it does:
- Verify `@netlify/plugin-nextjs` is in package.json ✓
- Check netlify.toml has the plugin configured ✓

### Fonts Not Loading
**Error:** Assamese script doesn't render
**Fix:**
- Google Fonts loaded via CDN in globals.css ✓
- Should work automatically
- Check browser console for errors

---

## 📊 Performance Tips

### Optimize for Netlify:

1. **Edge Functions** (future)
   - Move Sarvam AI calls to edge
   - Reduce client-side latency
   - Better caching

2. **Image Optimization**
   - Use Next.js Image component
   - Automatic optimization
   - Netlify CDN caching

3. **Build Caching**
   - Netlify caches dependencies
   - Faster subsequent builds
   - Use build plugins

---

## 💰 Cost Estimate

With your **Netlify paid plan:**

- ✅ **Hosting:** Included
- ✅ **SSL:** Free (automatic)
- ✅ **CDN:** Global, included
- ✅ **Build minutes:** Generous limit
- ✅ **Bandwidth:** High limit
- 💵 **Sarvam AI:** Pay per use
  - Translation: ~$0.0005 per character
  - TTS: ~$0.006 per minute
  - Estimate: $10-50/month for 100-500 active users

**Total:** Mostly covered by your Netlify plan + Sarvam AI usage

---

## 🎯 After Deployment

### Share Your App!

**Your deployed URL:**
`https://learn-assamese-prototype.netlify.app` (or custom name)

**Share with:**
1. Assamese diaspora Facebook groups
2. r/Assam subreddit
3. Twitter/X with hashtags: #Assamese #LanguageLearning
4. WhatsApp groups
5. Email to community associations

### Gather Feedback

Create a feedback form:
- What did you learn?
- What was confusing?
- What features do you want?
- Would you pay for premium?

### Monitor Usage

Use Netlify analytics to track:
- Which lessons are popular
- Where users drop off
- Mobile vs desktop usage
- Geographic distribution

---

## 🚀 Quick Reference

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy via CLI
netlify deploy --prod

# Check deployment status
netlify status

# View logs
netlify logs

# Open deployed site
netlify open
```

---

## 📞 Support

**Netlify Docs:** https://docs.netlify.com/
**Next.js on Netlify:** https://docs.netlify.com/integrations/frameworks/next-js/

**Need help?** With your paid account, you have access to Netlify support!

---

## ✨ You're Ready!

Your Learn Assamese app is configured and ready to deploy to Netlify. The configuration is optimized for Next.js 14 and will automatically use your Sarvam AI API key for real translation and speech.

**Deploy now and share with the Assamese diaspora community!** 🇮🇳

---

**Next Steps:**
1. Deploy via Netlify dashboard (easiest)
2. Test all pages work
3. Share the URL
4. Gather feedback
5. Iterate and improve

Good luck! 🎉

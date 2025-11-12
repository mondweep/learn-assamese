# ⚠️ SECURITY: API Key Exposed - Action Required

## 🚨 Issue

Your Sarvam AI API key was accidentally committed to the git repository in:
- `prototype/NETLIFY_DEPLOY.md` (lines 38, 39, 73, 74)
- Built into `.next/` folder (auto-generated from code)

**The key that was exposed:** `sk_mikyq6wr_...y2c9` (full key redacted for security)

## ✅ What We've Fixed

1. **Redacted API key** from NETLIFY_DEPLOY.md (replaced with placeholder)
2. **Enhanced .gitignore** - Added comprehensive secret protection:
   - All `.env*` files
   - API key patterns
   - Secret file patterns
   - Build directories (`.next/`, `.netlify/`)

3. **Deleted build files** - Removed `.next/` and `.env.local`

4. **Created pre-commit hook** - Automatically scans for secrets before commits:
   - Detects API keys, passwords, tokens
   - Blocks commits containing secrets
   - Provides helpful error messages

5. **Updated documentation** - Added warnings about secret safety

## 🔐 What You Must Do NOW

### 1. Rotate Your Sarvam AI API Key (CRITICAL)

The exposed key is in the public git history. You MUST rotate it:

1. **Log in to Sarvam AI:**
   - Go to https://dashboard.sarvam.ai/ (or relevant dashboard)
   - Navigate to API Keys section

2. **Revoke the old key:**
   - Find the key you were using (check your local .env file or password manager)
   - Click "Revoke" or "Delete"

3. **Generate a new key:**
   - Click "Create new API key"
   - Copy the new key securely
   - Store it in a password manager

4. **Update your environment:**
   ```bash
   # In Netlify dashboard:
   # - Go to Site settings → Environment variables
   # - Update NEXT_PUBLIC_SARVAM_API_KEY with new key
   # - Update SARVAM_AP_API_KEY with new key

   # Locally (if testing):
   # - Update your .env.local file (already gitignored)
   # - NEVER commit .env.local
   ```

### 2. Update Local Environment

```bash
cd /home/user/learn-assamese/prototype

# Create .env.local with NEW key
echo "NEXT_PUBLIC_SARVAM_API_KEY=your_new_api_key_here" > .env.local
echo "SARVAM_AP_API_KEY=your_new_api_key_here" >> .env.local

# Verify it's gitignored
git status  # Should NOT show .env.local
```

### 3. Test the Pre-Commit Hook

```bash
# Try to commit a file with a fake secret (it should block):
echo "sk""_test_FAKE_KEY_EXAMPLE_FOR_TESTING_PURPOSES" > test-secret.txt
git add test-secret.txt
git commit -m "test"
# Should see: "ERROR: Potential secret found"

# Clean up test
git reset HEAD test-secret.txt
rm test-secret.txt
```

**Note:** The hook detects keys matching the pattern `sk_[characters]` where any key starting with `sk_` followed by 20+ alphanumeric/underscore characters will be caught.

## 📋 Pre-Commit Hook Details

Location: `.git/hooks/pre-commit`

**What it checks:**
- Sarvam AI keys (`sk_...`)
- Anthropic keys (`sk-ant-...`)
- OpenAI keys (`sk-proj-...`)
- OpenRouter keys (`sk-or-v...`)
- Google API keys (`AIza...`)
- Generic long tokens and passwords
- API key assignments in code

**How it works:**
1. Scans all staged files before commit
2. Uses regex patterns to detect secrets
3. Blocks commit if secrets found
4. Shows exact file and line
5. Provides tips for fixing

**To bypass (NOT recommended):**
```bash
git commit --no-verify  # Only use if absolutely necessary
```

## 🛡️ Security Best Practices Going Forward

### ✅ DO:
- Store API keys in `.env.local` (gitignored)
- Use environment variables in Netlify dashboard
- Use placeholders in documentation (`your_api_key_here`)
- Keep `.gitignore` up to date
- Use password managers for secrets
- Rotate keys if exposed

### ❌ DON'T:
- Hardcode API keys in source code
- Commit `.env` files
- Put real keys in documentation
- Share keys in chat/email
- Use `--no-verify` to bypass hooks
- Keep exposed keys active

## 📝 Files Updated (This Commit)

- `.gitignore` - Enhanced secret protection
- `NETLIFY_DEPLOY.md` - API keys redacted
- `.git/hooks/pre-commit` - Secret detection hook
- `.next/` - Deleted (will regenerate on build)
- `.env.local` - Deleted (recreate locally with new key)

## ⚠️ Important Notes

1. **Git history still contains the old key** - This is why rotation is CRITICAL
2. **The hook only checks NEW commits** - Doesn't remove past secrets
3. **Hook is local only** - Doesn't protect other contributors
4. **Always verify gitignore** - Before committing sensitive files

## ✅ Verification Checklist

After fixing:
- [ ] Old Sarvam API key revoked
- [ ] New API key generated
- [ ] New key added to Netlify environment variables
- [ ] New key in local `.env.local` (not committed)
- [ ] `.env.local` NOT showing in `git status`
- [ ] Pre-commit hook tested and working
- [ ] Documented not to commit secrets
- [ ] Team informed about security practices (if applicable)

## 🆘 If Key Was Used Maliciously

Monitor your Sarvam AI usage:
1. Check dashboard for unexpected API calls
2. Review billing for unusual charges
3. Check rate limits and quotas
4. Contact Sarvam support if suspicious activity

## 📞 Support

- **Sarvam AI Support:** Check their dashboard for support options
- **Git Security:** https://github.com/learn/security
- **Pre-commit framework:** https://pre-commit.com/

---

**Remember:** The best time to rotate an exposed API key was when it was exposed. The second best time is NOW.

**Status:**
- ✅ Documentation fixed
- ✅ Hook installed
- ✅ `.gitignore` updated
- ⏳ **ACTION REQUIRED:** Rotate API key immediately
